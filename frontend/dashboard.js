const totalCount = document.getElementById("totalCount");
const passCount = document.getElementById("passCount");
const failCount = document.getElementById("failCount");
const resultsTableBody = document.getElementById("resultsTableBody");
const welcomeText = document.getElementById("welcomeText");

function renderRow(result) {
  return `
    <tr>
      <td>${result.test_case_id}</td>
      <td>${result.test_case_name}</td>
      <td>${result.type}</td>
      <td>${result.status}</td>
      <td>${result.actual_output}</td>
      <td>${new Date(result.execution_time).toLocaleString()}</td>
    </tr>
  `;
}

async function loadResults() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    welcomeText.textContent = `Welcome, ${loggedInUser}`;
  }

  try {
    const response = await fetch("http://localhost:3000/api/results");
    const data = await response.json();

    totalCount.textContent = data.summary.total;
    passCount.textContent = data.summary.passed;
    failCount.textContent = data.summary.failed;

    if (data.results.length === 0) {
      resultsTableBody.innerHTML = `
        <tr><td colspan="6">No test execution results available yet.</td></tr>
      `;
      return;
    }

    resultsTableBody.innerHTML = data.results.map(renderRow).join("");
  } catch (error) {
    console.error("Fetch results error:", error);
    resultsTableBody.innerHTML = `
      <tr><td colspan="6">Unable to fetch results from server.</td></tr>
    `;
  }
}

loadResults();
