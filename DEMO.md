# How this works — and what to show

## How it works (simple)

1. **The “healthcare app” (system under test)**  
   The backend exposes fake **login** and **appointment booking** APIs. Testers use these to practice API and automation tests, like a small hospital scheduling app.

2. **The dashboard (what you open in the browser)**  
   A web UI talks to the backend over **REST**. You add **test cases**, mark them **Pass/Fail**, and **bugs** get stored in MySQL. The **Reports** tab uses numbers from the database to draw **charts** (pass vs fail, bug severity).

3. **The database**  
   MySQL holds **test cases**, **runs**, **bugs**, and **appointments**. Nothing magical: the backend reads and writes rows; the frontend just displays them.

4. **External tools (optional for your story)**  
   - **Selenium** — browser scripts (sample under `tests/selenium`).  
   - **Postman** — hits login/booking APIs (`tests/postman`).  
   - **JMeter** — load test scaffold (`tests/jmeter`).  

So: **backend = brain**, **database = memory**, **frontend = screen**, **Postman/Selenium/JMeter = how you prove quality**.

---

## What to show (demo / assignment / interview)

| What | Where | One sentence |
|------|--------|----------------|
| Architecture | Draw or say | “React dashboard → Express API → MySQL; tools call the same APIs.” |
| System under test | Postman or `curl` | “Login and booking endpoints mimic a healthcare app.” |
| Manual testing | Frontend → Test Cases | “I create a case, run it, record Pass/Fail; failures can create bugs.” |
| Bug tracking | Frontend → Bugs | “Severity and Open/Closed match our schema.” |
| Reporting | Frontend → Dashboard | “Charts reflect real counts from the database.” |
| Automation | `tests/selenium` | “Selenium can drive UI; results can be reported via API.” |
| API testing | Postman collection | “We assert status codes and bodies for login and booking.” |
| Performance | JMeter plan | “We simulate users and measure response times.” |

**Live demo flow (2–3 minutes)**  
1. Open `http://localhost:5173` — show **Dashboard** (totals + charts).  
2. Open **Test Cases** — add one case, mark **Pass** or **Fail**, show list updating.  
3. Open **Bugs** — show bugs (including after a **Fail**).  
4. Optional: run **Postman** collection against `http://localhost:5000` — show green checks.  

**Credentials for login API demo**  
- Email: `tester@healthcare.com`  
- Password: `Test@123`  

---

## Demo data (already prepared for you)

After `setup-db.bat`, run **`setup-seed.bat`** once. That loads sample test cases (pass/fail/not run), test run history, bugs, and sample appointments so your **pie/bar charts and tables are not empty** for screenshots or presentation.
