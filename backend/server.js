const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const [rows] = await pool.execute(
      "SELECT id, email FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      return res.json({
        message: "Login successful",
        userId: rows[0].id,
        email: rows[0].email
      });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    console.error("Login API error:", error.message);
    return res.status(500).json({ message: "Server error during login" });
  }
});

app.post("/api/test-result", async (req, res) => {
  const { test_case_id, actual_output, status } = req.body;

  if (!test_case_id || !actual_output || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!["Pass", "Fail"].includes(status)) {
    return res.status(400).json({ message: "Status must be Pass or Fail" });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO test_results (test_case_id, actual_output, status) VALUES (?, ?, ?)",
      [test_case_id, actual_output, status]
    );

    return res.status(201).json({
      message: "Test result stored successfully",
      resultId: result.insertId
    });
  } catch (error) {
    console.error("Test result API error:", error.message);
    return res.status(500).json({ message: "Server error while storing test result" });
  }
});

app.get("/api/results", async (_req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT
        tr.id,
        tr.test_case_id,
        tc.name AS test_case_name,
        tc.type,
        tr.actual_output,
        tr.status,
        tr.execution_time
      FROM test_results tr
      JOIN test_cases tc ON tr.test_case_id = tc.id
      ORDER BY tr.execution_time DESC`
    );

    const summary = {
      total: rows.length,
      passed: rows.filter((item) => item.status === "Pass").length,
      failed: rows.filter((item) => item.status === "Fail").length
    };

    return res.json({ summary, results: rows });
  } catch (error) {
    console.error("Results API error:", error.message);
    return res.status(500).json({ message: "Server error while fetching results" });
  }
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.get("/dashboard", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
