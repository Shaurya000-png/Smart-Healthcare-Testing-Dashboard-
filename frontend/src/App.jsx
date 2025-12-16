import { useEffect, useMemo, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const API_BASE = "http://localhost:5000/api";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [report, setReport] = useState({ total_test_cases: 0, passed: 0, failed: 0, bug_count: 0, severity_distribution: [] });
  const [testCases, setTestCases] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [newTestCase, setNewTestCase] = useState({ title: "", steps: "", expected_result: "" });

  async function loadData() {
    const [reportRes, tcRes, bugRes] = await Promise.all([
      fetch(`${API_BASE}/reports`),
      fetch(`${API_BASE}/testcases`),
      fetch(`${API_BASE}/bugs`)
    ]);
    setReport(await reportRes.json());
    setTestCases(await tcRes.json());
    setBugs(await bugRes.json());
  }

  useEffect(() => {
    loadData().catch(() => {});
  }, []);

  const passFailData = useMemo(
    () => ({
      labels: ["Passed", "Failed"],
      datasets: [{ data: [report.passed || 0, report.failed || 0], backgroundColor: ["#16a34a", "#dc2626"] }]
    }),
    [report]
  );

  const severityBar = useMemo(
    () => ({
      labels: (report.severity_distribution || []).map((x) => x.severity),
      datasets: [{ label: "Bugs", data: (report.severity_distribution || []).map((x) => x.count), backgroundColor: "#2563eb" }]
    }),
    [report]
  );

  async function createTestCase(e) {
    e.preventDefault();
    await fetch(`${API_BASE}/testcases`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTestCase)
    });
    setNewTestCase({ title: "", steps: "", expected_result: "" });
    loadData();
  }

  async function runManualTest(id, result) {
    const actual = window.prompt("Enter actual result:");
    await fetch(`${API_BASE}/run-test`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test_case_id: id, result, actual_result: actual || "" })
    });
    loadData();
  }

  async function closeBug(id) {
    await fetch(`${API_BASE}/bugs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Closed" })
    });
    loadData();
  }

  return (
    <div className="app">
      <h1>Smart Healthcare Testing Dashboard</h1>
      <div className="tabs">
        {["dashboard", "testcases", "bugs", "automation", "api", "performance"].map((tab) => (
          <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "dashboard" && (
        <section>
          <div className="cards">
            <div className="card"><strong>Total Test Cases</strong><p>{report.total_test_cases}</p></div>
            <div className="card"><strong>Passed</strong><p>{report.passed}</p></div>
            <div className="card"><strong>Failed</strong><p>{report.failed}</p></div>
            <div className="card"><strong>Total Bugs</strong><p>{report.bug_count}</p></div>
          </div>
          <div className="charts">
            <div className="chart"><h3>Pass vs Fail</h3><Pie data={passFailData} /></div>
            <div className="chart"><h3>Bug Severity</h3><Bar data={severityBar} /></div>
          </div>
        </section>
      )}

      {activeTab === "testcases" && (
        <section>
          <h2>Test Case Management</h2>
          <form className="form" onSubmit={createTestCase}>
            <input placeholder="Title" value={newTestCase.title} onChange={(e) => setNewTestCase({ ...newTestCase, title: e.target.value })} />
            <textarea placeholder="Steps" value={newTestCase.steps} onChange={(e) => setNewTestCase({ ...newTestCase, steps: e.target.value })} />
            <textarea placeholder="Expected Result" value={newTestCase.expected_result} onChange={(e) => setNewTestCase({ ...newTestCase, expected_result: e.target.value })} />
            <button type="submit">Add Test Case</button>
          </form>
          <table>
            <thead>
              <tr><th>ID</th><th>Title</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {testCases.map((tc) => (
                <tr key={tc.id}>
                  <td>{tc.id}</td>
                  <td>{tc.title}</td>
                  <td>{tc.status}</td>
                  <td>
                    <button onClick={() => runManualTest(tc.id, "Pass")}>Mark Pass</button>
                    <button onClick={() => runManualTest(tc.id, "Fail")}>Mark Fail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {activeTab === "bugs" && (
        <section>
          <h2>Bug Tracker</h2>
          <table>
            <thead>
              <tr><th>ID</th><th>Description</th><th>Severity</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {bugs.map((bug) => (
                <tr key={bug.id}>
                  <td>{bug.id}</td>
                  <td>{bug.description}</td>
                  <td>{bug.severity}</td>
                  <td>{bug.status}</td>
                  <td>{bug.status !== "Closed" ? <button onClick={() => closeBug(bug.id)}>Close</button> : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {activeTab === "automation" && (
        <section>
          <h2>Automation Results</h2>
          <p>Run Selenium scripts under tests/selenium and persist outputs through backend APIs.</p>
        </section>
      )}
      {activeTab === "api" && (
        <section>
          <h2>API Testing</h2>
          <p>Import Postman collection from tests/postman and validate login + appointment APIs.</p>
        </section>
      )}
      {activeTab === "performance" && (
        <section>
          <h2>Performance Testing</h2>
          <p>Use tests/jmeter plan to simulate users and analyze response times.</p>
        </section>
      )}
    </div>
  );
}
