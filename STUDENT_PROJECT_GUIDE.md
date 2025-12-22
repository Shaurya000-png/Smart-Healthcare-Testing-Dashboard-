# Hospital Orientation System with Automated Software Testing Dashboard

This project is a complete full-stack mini system for a student demonstration.  
It includes:

- A web app (login + dashboard)
- Backend APIs (Node.js + Express + MySQL)
- UI automation tests (Selenium + Python)
- API automation tests (Postman + Newman)
- Storage and display of test execution results

## 1) Folder Structure

```text
smart-healthcare-testing-dashboard/
├── backend/
│   ├── package.json
│   ├── .env.example
│   ├── db.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── styles.css
│   ├── login.js
│   └── dashboard.js
├── database/
│   └── schema.sql
├── tests/
│   ├── selenium/
│   │   ├── login_ui_tests.py
│   │   └── requirements.txt
│   └── postman/
│       ├── hospital_orientation.postman_collection.json
│       └── run_newman.ps1
└── STUDENT_PROJECT_GUIDE.md
```

## 2) Software Needed

- Node.js (v18+ recommended)
- MySQL Server
- Python 3.9+
- Google Chrome browser
- Newman CLI (`npm install -g newman`)

## 3) Database Setup

1. Open MySQL client (MySQL Workbench or command line).
2. Run SQL file:
  - `database/schema.sql`
3. This file creates:
  - `users`
  - `test_cases`
  - `test_results`
4. It inserts:
  - 2 sample users
  - 5 sample test cases (Valid login, Invalid login, Empty fields, API success, API failure)

## 4) Backend Setup and Run

1. Open terminal in `backend/`
2. Install dependencies:
  - `npm install`
3. Create `.env` file (copy from `.env.example`)
4. Update DB values in `.env`
5. Start server:
  - `npm start`
6. Backend runs at:
  - `http://localhost:3000`

## 5) Frontend Run

Frontend is served by Express static middleware from `frontend/`.

Open:

- `http://localhost:3000` -> Login page
- `http://localhost:3000/dashboard` -> Results dashboard

## 6) Selenium UI Automation Run

1. Open terminal in `tests/selenium/`
2. Install Python dependencies:
  - `pip install -r requirements.txt`
3. Run script:
  - `python login_ui_tests.py`

What it does:

- Opens login page in browser
- Executes Valid login and Invalid login tests
- Captures UI message
- Marks Pass/Fail
- Sends results to backend `/api/test-result`

## 7) Postman/Newman API Automation Run

Option A: Postman app

- Import `tests/postman/hospital_orientation.postman_collection.json`
- Run collection

Option B: Newman CLI

1. Go to `tests/postman/`
2. Run:
  - `newman run ".\hospital_orientation.postman_collection.json"`
  - or `.\run_newman.ps1`

What it checks:

- API success login case (200 + "Login successful")
- API failure login case (401 + "Invalid credentials")
- Sends each result to backend `/api/test-result`

## 8) Test Execution Flow

1. Test cases are predefined in database (`test_cases`)
2. Selenium executes UI tests and posts results
3. Newman executes API tests and posts results
4. Backend stores results in `test_results`
5. Dashboard fetches `/api/results` and shows:
  - Total executed
  - Passed
  - Failed
  - Result table

## 9) Viva Explanation (How each component works)

- Frontend (`index.html`, `login.js`):
  - Takes email/password and calls `/api/auth/login`
  - Displays response message
  - On success, redirects to dashboard
- Backend (`server.js`):
  - `/api/auth/login`: checks credentials in MySQL
  - `/api/test-result`: stores Pass/Fail test output
  - `/api/results`: returns summary + detailed result list
- Database (`schema.sql`):
  - Stores users, test definitions, and test execution outcomes
  - Uses foreign key from `test_results.test_case_id` to `test_cases.id`
- Selenium (`login_ui_tests.py`):
  - Simulates real user login actions in browser
  - Reads UI messages and evaluates expected result
  - Pushes result to backend for dashboard display
- Postman/Newman collection:
  - Validates API response code and message
  - Sends API test execution status to backend

## 10) Debug Tips

- If login fails for valid user, check:
  - MySQL is running
  - `.env` DB config
  - `users` table has sample data
- If dashboard shows no data:
  - Run Selenium and Newman tests once
  - Check backend console for API errors
- If Selenium does not open browser:
  - Ensure Chrome is installed and updated

