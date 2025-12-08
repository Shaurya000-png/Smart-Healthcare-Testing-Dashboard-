const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

// System under test: simple auth endpoint for healthcare app.
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  if (email === "tester@healthcare.com" && password === "Test@123") {
    return res.json({ token: "mock-jwt-token", role: "tester", name: "QA Tester" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

app.post("/api/appointments", async (req, res) => {
  const { patient_name, doctor_name, appointment_date, notes } = req.body;
  if (!patient_name || !doctor_name || !appointment_date) {
    return res.status(400).json({ message: "patient_name, doctor_name, appointment_date are required" });
  }
  const [result] = await pool.query(
    "INSERT INTO Appointments (patient_name, doctor_name, appointment_date, notes) VALUES (?, ?, ?, ?)",
    [patient_name, doctor_name, appointment_date, notes || null]
  );
  res.status(201).json({ id: result.insertId, message: "Appointment booked" });
});

app.get("/api/testcases", async (_req, res) => {
  const [rows] = await pool.query("SELECT * FROM TestCases ORDER BY id DESC");
  res.json(rows);
});

app.post("/api/testcases", async (req, res) => {
  const { title, steps, expected_result } = req.body;
  if (!title || !steps || !expected_result) {
    return res.status(400).json({ message: "title, steps, expected_result are required" });
  }
  const [result] = await pool.query(
    "INSERT INTO TestCases (title, steps, expected_result, actual_result, status) VALUES (?, ?, ?, ?, ?)",
    [title, steps, expected_result, null, "Not Run"]
  );
  res.status(201).json({ id: result.insertId, message: "Test case created" });
});

app.post("/api/run-test", async (req, res) => {
  const { test_case_id, actual_result, result } = req.body;
  if (!test_case_id || !result) {
    return res.status(400).json({ message: "test_case_id and result are required" });
  }
  const normalized = result === "Pass" ? "Pass" : "Fail";
  await pool.query("UPDATE TestCases SET actual_result = ?, status = ? WHERE id = ?", [
    actual_result || null,
    normalized,
    test_case_id
  ]);
  await pool.query("INSERT INTO TestRuns (test_case_id, result, execution_date) VALUES (?, ?, NOW())", [
    test_case_id,
    normalized
  ]);
  if (normalized === "Fail") {
    await pool.query(
      "INSERT INTO Bugs (description, severity, status, test_case_id) VALUES (?, ?, ?, ?)",
      ["Auto-created from failed test run", "Medium", "Open", test_case_id]
    );
  }
  res.json({ message: "Test execution recorded" });
});

app.get("/api/bugs", async (_req, res) => {
  const [rows] = await pool.query("SELECT * FROM Bugs ORDER BY id DESC");
  res.json(rows);
});

app.post("/api/bugs", async (req, res) => {
  const { description, severity, status, test_case_id } = req.body;
  if (!description || !severity || !status || !test_case_id) {
    return res.status(400).json({ message: "description, severity, status, test_case_id are required" });
  }
  const [result] = await pool.query(
    "INSERT INTO Bugs (description, severity, status, test_case_id) VALUES (?, ?, ?, ?)",
    [description, severity, status, test_case_id]
  );
  res.status(201).json({ id: result.insertId, message: "Bug created" });
});

app.patch("/api/bugs/:id", async (req, res) => {
  const { status } = req.body;
  await pool.query("UPDATE Bugs SET status = ? WHERE id = ?", [status || "Open", req.params.id]);
  res.json({ message: "Bug updated" });
});

app.get("/api/reports", async (_req, res) => {
  const [[{ total_test_cases }]] = await pool.query("SELECT COUNT(*) AS total_test_cases FROM TestCases");
  const [[{ passed }]] = await pool.query("SELECT COUNT(*) AS passed FROM TestCases WHERE status = 'Pass'");
  const [[{ failed }]] = await pool.query("SELECT COUNT(*) AS failed FROM TestCases WHERE status = 'Fail'");
  const [[{ bug_count }]] = await pool.query("SELECT COUNT(*) AS bug_count FROM Bugs");
  const [severity] = await pool.query(
    "SELECT severity, COUNT(*) AS count FROM Bugs GROUP BY severity ORDER BY severity ASC"
  );

  res.json({
    total_test_cases,
    passed,
    failed,
    bug_count,
    severity_distribution: severity
  });
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
