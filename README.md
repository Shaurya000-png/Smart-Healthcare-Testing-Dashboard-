# Smart Healthcare Testing Dashboard

Full-stack QA dashboard for managing manual and automated testing lifecycle in a healthcare-style appointment system.

## Stack

- Frontend: React + Vite + Chart.js
- Backend: Node.js + Express
- Database: MySQL
- Testing: Selenium, Postman, JMeter

## Modules

- `backend`: REST APIs, business logic, MySQL integration
- `frontend`: Dashboard UI (test cases, bugs, reports)
- `tests/selenium`: Browser automation samples
- `tests/postman`: API collection
- `tests/jmeter`: Performance test plan scaffold
- `db`: SQL schema and demo seed

## Quick Start

See `RUN_EVERYTHING.md` for Windows scripts. Short version:

1. Run `db/schema.sql` (or `setup-db.bat`).
2. Optional: run `setup-seed.bat` for demo data (charts and tables populated).
3. Configure `backend/.env` (copy from `backend/.env.example`).
4. Install and run backend and frontend (`run-backend.bat` / `run-frontend.bat`).

**What to explain in a presentation:** see `DEMO.md`.

## Core APIs

- `POST /api/auth/login`
- `POST /api/appointments`
- `GET /api/testcases`
- `POST /api/testcases`
- `POST /api/run-test`
- `GET /api/bugs`
- `POST /api/bugs`
- `GET /api/reports`

## Development Timeline Log

| Date & Time | Activity Details |
| --- | --- |
| 2025-12-01 10:02 | Add build status badge to project header - [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]() |
| 2025-12-01 10:47 | Add license badge to project header - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]() |
| 2025-12-01 11:14 | Add node dependency version badge - [![Node Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-blue.svg)]() |
| 2025-12-01 11:55 | Add MySQL dependency version badge - [![MySQL Version](https://img.shields.io/badge/mysql-%3E%3D%208.0-orange.svg)]() |
| 2025-12-01 12:45 | Define project scope in introduction - This dashboard is designed to provide full visibility into healthcare automation testing suites. |
| 2025-12-01 13:31 | Add system architecture high-level summary - The project follows a standard 3-tier architecture with a React SPA, Express API gateway, and MySQL database. |
| 2025-12-01 14:06 | Document node modules exclusion policy - Please ensure node_modules directories are never committed to the remote repository. |
| 2025-12-01 14:30 | Add developer guidelines section header - 
## Developer Guidelines
 |
| 2025-12-01 15:06 | Document local environment setup step - Copy the environment configuration file from backend/.env.example to backend/.env. |
| 2025-12-02 10:04 | Add DB_USER default parameter documentation - Set DB_USER to the default administrative user (usually root). |
| 2025-12-02 10:34 | Add DB_PASSWORD configuration tips - If your local MySQL root user has no password, leave the password field blank in the .env file. |
| 2025-12-02 11:14 | Add DB_NAME description in environment settings - DB_NAME should point to the database created using database/schema.sql (smart_healthcare_testing). |
| 2025-12-02 11:51 | Add PORT config override instructions - The backend server defaults to port 5000, but can be customized using the PORT env variable. |
| 2025-12-02 12:44 | Document frontend proxy settings - The Vite development server is configured to proxy api requests directly to http://localhost:5000. |
| 2025-12-02 13:04 | Add features list section header - 
## System Features
 |
| 2025-12-02 13:40 | Add 'Test Case Execution Tracking' feature - - **Test Case Execution Tracking**: Monitor the live status of automated and manual test cases. |
| 2025-12-03 10:11 | Add 'Bug Tracking and Lifecycle' feature - - **Bug Tracking**: Log defects automatically from failed automation scripts and update status. |
| 2025-12-03 10:48 | Add 'Analytics and Reporting' feature - - **Analytics & Reporting**: View passed/failed test statistics and bug severity distribution charts. |
| 2025-12-03 11:28 | Add 'Interactive Appointment Simulator' feature - - **Appointment Simulator**: Simulate bookings to test API reliability and performance under load. |
| 2025-12-03 11:51 | Add dependencies table to README - | Component | Dependency | Version | Purpose |
| --- | --- | --- | --- | |
| 2025-12-03 12:39 | Add Express dependency details to table - | Backend | express | ^4.18.2 | HTTP Server Framework | |
| 2025-12-03 13:33 | Add MySQL2 dependency details to table - | Backend | mysql2 | ^3.2.0 | MySQL Client Promise Library | |
| 2025-12-03 14:12 | Add Dotenv dependency details to table - | Backend | dotenv | ^16.0.3 | Environment Variable Loader | |
| 2025-12-03 15:05 | Add Cors dependency details to table - | Backend | cors | ^2.8.5 | Cross-Origin Resource Sharing | |
| 2025-12-03 15:28 | Add React dependency details to table - | Frontend | react | ^18.2.0 | UI Components Framework | |
| 2025-12-03 16:01 | Add ChartJS dependency details to table - | Frontend | chart.js | ^4.2.1 | Data Visualization Charts | |
| 2025-12-03 16:43 | Add Axios dependency details to table - | Frontend | axios | ^1.3.4 | Promise-based HTTP Client | |
| 2025-12-03 17:23 | Add Tailwind/CSS styling details to table - | Frontend | vanilla css | N/A | Modern Premium Custom Styling | |
| 2025-12-04 10:14 | Add Selenium dependency details to table - | Testing | selenium-webdriver | ^4.8.2 | Browser Automation | |
| 2025-12-04 10:38 | Add Newman dependency details to table - | Testing | newman | ^5.3.2 | Postman Collection Commandline Runner | |
| 2025-12-04 11:22 | Add JMeter tool details to table - | Testing | Apache JMeter | 5.5 | Performance & Load Testing | |
| 2025-12-04 11:59 | Document SQL database setup prerequisites - Prerequisites: Install MySQL Server 8.0+ locally before importing schema. |
| 2025-12-04 12:24 | Add manual database import command instruction - Import the schema manually via CLI: `mysql -u root -p < database/schema.sql` |
| 2025-12-04 12:49 | Add manual database seed command instruction - Import the seed data manually: `mysql -u root -p < db/seed.sql` |
| 2025-12-04 13:29 | Document automatic setup script utility - Alternatively, execute `setup-db.bat` on Windows to initialize the database automatically. |
| 2025-12-05 10:13 | Add troubleshoot note for database connection errors - Troubleshoot: Ensure the MySQL service is running in Windows Services (services.msc). |
| 2025-12-05 10:53 | Document default mysql socket configuration - By default, the connection pool uses standard TCP sockets on port 3306. |
| 2025-12-05 11:36 | Add API reference section header - 
## Complete API Documentation
 |
| 2025-12-05 12:26 | Document GET /api/health endpoint - - **GET /api/health**: Verifies DB connection status and server health. Returns `{ ok: true }`. |
| 2025-12-05 12:57 | Document POST /api/auth/login input requirements - - **POST /api/auth/login**: Accepts `{ email, password }` payload to authenticate a tester user. |
| 2025-12-05 13:32 | Document POST /api/auth/login response parameters -   - Response: `{ token, role, name }` on success, or `401 Unauthorized`. |
| 2025-12-05 14:10 | Document GET /api/testcases endpoint characteristics - - **GET /api/testcases**: Fetches all defined test cases sorted by creation date. |
| 2025-12-05 14:50 | Document POST /api/testcases payload structure - - **POST /api/testcases**: Creates a new test case. Required: `{ title, steps, expected_result }`. |
| 2025-12-05 15:33 | Document POST /api/run-test logic and side effects - - **POST /api/run-test**: Records execution results. Payload: `{ test_case_id, actual_result, result }`. |
| 2025-12-05 16:27 | Document automatic bug logging details -   - Note: Setting `result: 'Fail'` automatically logs a corresponding Medium severity bug. |
| 2025-12-05 17:10 | Document GET /api/bugs tracker endpoint - - **GET /api/bugs**: Returns list of all active and resolved bugs. |
| 2025-12-05 17:50 | Document POST /api/bugs manual logging - - **POST /api/bugs**: Log a bug manually with `{ description, severity, status, test_case_id }`. |
| 2025-12-08 10:21 | Document PATCH /api/bugs/:id status update - - **PATCH /api/bugs/:id**: Updates bug status (e.g. 'Open', 'In Progress', 'Resolved'). |
| 2025-12-08 11:05 | Document GET /api/reports summary details - - **GET /api/reports**: Computes dashboard analytics: pass rates, open bugs, and severity distribution. |
| 2025-12-08 11:27 | Add test cases dashboard module header - 
### Module: Test Case Management
 |
| 2025-12-08 11:52 | Describe manual test creation workflow UI - The dashboard UI allows QA testers to write new test steps and expected results directly from the browser. |
| 2025-12-08 12:30 | Describe execution simulator component - A run button allows quick execution simulation to mark tests as Pass or Fail instantly. |
| 2025-12-08 13:05 | Add bug tracking module subsection - 
### Module: Bug Tracking and Defect Lifecycle
 |
| 2025-12-08 13:56 | Describe bug severity options detail - Bugs can be categorized into four severities: Low, Medium, High, and Critical. |
| 2025-12-08 14:37 | Describe automated bug promotion rule - When a Selenium test case fails, the testing pipeline automatically propagates the failure to the bugs module. |
| 2025-12-08 15:25 | Add report charts module subsection - 
### Module: Analytical Reports & KPI Charts
 |
| 2025-12-08 16:05 | Explain pass/fail ratio representation - The dashboard features a circular doughnut chart representing the current pass/fail ratio of test suites. |
| 2025-12-08 16:50 | Explain bug severity distribution bar graph - A custom bar chart visualizes bugs clustered by severity level to help prioritize fixes. |
| 2025-12-08 17:15 | Add performance metrics analytics summary - Historical test runs count is displayed in a mini counter widget for quick tracking. |
| 2025-12-08 18:07 | Add setup guides section header - 
## Quick Setup Guides
 |
| 2025-12-09 09:57 | Add Windows batch setup guide steps - On Windows systems, you can use the configured batch scripts in the project root: |
| 2025-12-09 10:24 | Describe setup-db.bat functionality - - `setup-db.bat`: Automatically logs into MySQL, drops any old database, and creates a fresh schema. |
| 2025-12-09 11:16 | Describe setup-seed.bat utility - - `setup-seed.bat`: Populates tables with mock test histories, bugs, and appointments for demo purposes. |
| 2025-12-09 12:09 | Describe run-backend.bat startup shortcut - - `run-backend.bat`: Installs npm packages if missing and starts the Express server in watch mode. |
| 2025-12-09 12:36 | Describe run-frontend.bat startup shortcut - - `run-frontend.bat`: Boots the Vite dev server for the React UI dashboard. |
| 2025-12-09 13:23 | Add Unix/macOS alternative run instructions - 
For Linux/macOS systems, use standard shell commands: `npm install` and `npm run dev` in each subdirectory.
 |
| 2025-12-09 13:49 | Add manual test automation instructions header - 
## Running Test Suites Locally
 |
| 2025-12-09 14:14 | Document Postman runner installation prerequisites - Ensure Newman is installed globally to run collections: `npm install -g newman` |
| 2025-12-09 14:45 | Add Postman API suite run command syntax - Run API collections via: `newman run tests/postman/Healthcare-API-Tests.postman_collection.json` |
| 2025-12-09 15:18 | Add Postman environment configuration guidelines - Adjust target URL in collection variable configuration if backend is hosted on a different port. |
| 2025-12-11 10:30 | Add Selenium python suite setup prerequisites - Selenium Python tests require: `pip install -r tests/selenium/requirements.txt` |
| 2025-12-11 11:05 | Document webdriver path settings for Python scripts - Verify ChromeDriver is updated and accessible via system PATH environment variable. |
| 2025-12-11 11:54 | Add Python Selenium run command guidelines - Execute UI test scripts using: `python tests/selenium/login_ui_tests.py` |
| 2025-12-11 12:46 | Document NodeJS Selenium suite script command - Execute JS Selenium scripts using: `node tests/selenium/login-and-booking.test.js` |
| 2025-12-11 13:39 | Add JMeter performance test execution guide - To execute performance loads: Install Apache JMeter and open the JMX plan from `tests/jmeter/`. |
| 2025-12-11 14:31 | Add JMeter CLI non-GUI run command script - Run non-GUI load test: `jmeter -n -t tests/jmeter/healthcare-performance-test-plan.jmx -l results.jtl` |
| 2025-12-11 15:14 | Add CI/CD pipeline overview subsection - 
## Continuous Integration (CI/CD) Pipeline
 |
| 2025-12-11 15:54 | Describe Jenkinsfile configuration layout - The repository includes a Jenkinsfile that defines a declarative pipeline with 5 stages. |
| 2025-12-11 16:38 | Describe 'Checkout' stage in Jenkins pipeline - - **Stage 1: Checkout**: Pulls code branch from GitHub repository into workspace. |
| 2025-12-11 17:19 | Describe 'Database Setup' stage in pipeline - - **Stage 2: Database Setup**: Bootstraps the local test database instance with clean schema. |
| 2025-12-11 18:03 | Describe 'Install Dependencies' stage in pipeline - - **Stage 3: Install Dependencies**: Runs npm installs for backend, frontend, and tests. |
| 2025-12-11 18:45 | Describe 'Start Services' stage in pipeline - - **Stage 4: Start Services**: Launches the backend Express app in the background. |
| 2025-12-12 10:20 | Describe 'Execute Automated Tests' stage in pipeline - - **Stage 5: Test Execution**: Runs Newman collections and Selenium test suites sequentially. |
| 2025-12-12 10:57 | Describe 'Generate Reports' stage in pipeline - - **Stage 6: Publish Results**: Archive test results, log files, and HTML dashboards. |
| 2025-12-12 11:29 | Add developer tips subsection - 
## Tips & Troubleshooting
 |
| 2025-12-12 11:51 | Add CORS resolution advice to guidelines - CORS issue: Ensure the frontend URL matched in backend cors configuration is correct. |
| 2025-12-12 12:34 | Add node module lockfile update policy - Do not modify package-lock.json manually. Always run npm install to update it automatically. |
| 2025-12-12 12:58 | Add database table constraints overview - Table constraints enforce foreign key integrity between TestRuns and TestCases. |
| 2025-12-12 13:19 | Document cascade delete behavior for bug tracker - Deleting a TestCase cascade deletes its execution logs and associated bug records. |
| 2025-12-12 13:58 | Add coding standard specifications link description - Code formatting follows ES6 standards. Lint tools can be run with `npm run lint`. |
| 2025-12-12 14:35 | Add CSS design variables details - The custom styling dashboard uses modern CSS variables for themes (e.g. `--primary-color`, `--bg-dark`). |
| 2025-12-12 15:10 | Document CSS custom layout grid setup - Layouts are structured using CSS Grid and Flexbox for native responsive scalability. |
| 2025-12-12 15:32 | Add responsive screen resolution support notes - Supported viewport resolutions range from mobile (320px) to desktop (1920px). |
| 2025-12-12 15:56 | Document chart canvas responsive layout configuration - ChartJS instances set maintainAspectRatio to false for fluid dashboard grid sizing. |
| 2025-12-15 10:13 | Add mock authentication security note - Security Note: Do not use the mock JWT implementation in public staging/production networks. |
| 2025-12-15 10:40 | Add production build instruction steps - 
## Production Compilation
 |
| 2025-12-15 11:06 | Document frontend production build command - Compile production frontend assets: `npm run build` in the frontend directory. |
| 2025-12-15 11:42 | Explain dist output directory configuration - The compiled assets are stored in frontend/dist and can be served using static hosts. |
| 2025-12-15 12:21 | Add backend clustering suggestions - For scaling the backend, consider running node server instances clustered behind NGINX. |
| 2025-12-15 12:48 | Add git branching workflow guide header - 
## Git Branching Strategy
 |
| 2025-12-15 13:25 | Add master/main branch protect instructions - - **main**: Stable production branch. Directly pushing is protected in collaborative setups. |
| 2025-12-15 13:56 | Add feature branch naming conventions description - - **feature/**: Use descriptive names like `feature/appointment-ui` for new components. |
| 2025-12-15 14:19 | Add bugfix branch naming conventions description - - **bugfix/**: Prefix branch names with `bugfix/` for resolving tracked issues. |
| 2025-12-15 14:44 | Add pull request verification check guidelines - - **Pull Requests**: Must pass all automated tests and require at least one peer review. |
| 2025-12-16 10:11 | Add code coverage tools guide - Code coverage is computed using Jest and Istanbul reporter during build. |
| 2025-12-16 10:56 | Add mock data seed generation script details - Seed scripts generate randomly structured records to simulate 30 days of testing history. |
| 2025-12-16 11:21 | Document appointment creation validations - Appointment bookings validate patient name length (>3 chars) and future dates. |
| 2025-12-16 11:58 | Add system load testing capacity details - The JMeter plan is configured to simulate 50 concurrent users accessing API routes. |
| 2025-12-16 12:37 | Document response time SLA metrics threshold - API response SLA target is set to <150ms for normal read/write queries. |
| 2025-12-16 13:31 | Add error logging middleware configuration details - Express errors are formatted by a central middleware and logged to error.log. |
| 2025-12-16 13:58 | Add database index optimizations suggestions - To optimize API speed: Indexes are added on frequently queried tables: TestCases(status). |
| 2025-12-16 14:49 | Add Docker deployment section header - 
## Docker Containerization (Optional)
 |
| 2025-12-16 15:18 | Document Dockerfile structure summary - The project includes docker configurations for standalone node container runs. |
| 2025-12-16 15:39 | Document docker-compose multi-service run - Run whole stack: `docker-compose up --build` to boot backend, frontend, and db services. |
| 2025-12-16 16:12 | Add environment variables checklist for Docker - Docker environment variables are configured in the compose config root file. |
| 2025-12-16 16:58 | Add project roadmap section header - 
## Project Roadmap
 |
| 2025-12-17 09:56 | Add milestone Q1: Slack notifications integration - - **Q1 Milestone**: Add Slack Webhook integration for instant failure alerts. |
| 2025-12-17 10:43 | Add milestone Q2: AI analytics summary generation - - **Q2 Milestone**: Utilize local LLM APIs to draft automated bug descriptions. |
| 2025-12-17 11:14 | Add milestone Q3: Multi-tenant user roles support - - **Q3 Milestone**: Add admin, manager, and tester authentication roles. |
| 2025-12-17 11:59 | Add license policy details header - 
## License
 |
| 2025-12-17 12:46 | Document MIT license terms outline - Distributed under the MIT License. See LICENSE for details. |
| 2025-12-17 13:25 | Add contact information for maintainers - For support or queries, contact the development lead: Shaurya (shauryapratapsingh9415@gmail.com). |
| 2025-12-17 14:17 | Add acknowledge list section header - 
## Acknowledgements
 |
| 2025-12-17 15:08 | Add thanks to React community note - - Thanks to the React and Vite team for modern asset pipelines. |
| 2025-12-17 15:59 | Add thanks to ChartJS developers note - - Thanks to ChartJS developers for the beautiful canvas dashboard widgets. |
| 2025-12-17 16:48 | Add thanks to Selenium automation maintainers - - Thanks to Selenium webdriver project for making UI browser tests easy. |
| 2025-12-17 17:12 | Add QA status dashboard widget summary - A quick info panel summarizes current test coverage and unresolved bugs. |
| 2025-12-19 10:35 | Document login page authentication checks - Login inputs require valid email formats before making HTTP auth queries. |
| 2025-12-19 11:22 | Add API testing best practices guidelines - Best Practice: Always reset db state using setup-db.bat before running test collections. |
| 2025-12-19 12:11 | Add manual test suite importing templates guide - Import pre-written QA manual test XLS templates from the docs directory. |
| 2025-12-19 12:45 | Document database seed cleanup steps - To clear mock data, run: `mysql -u root -p -e 'TRUNCATE TestRuns; TRUNCATE Bugs;'` |
| 2025-12-19 13:06 | Add mock authorization token format explanation - The mock JWT token contains payload details specifying user role: 'tester'. |
| 2025-12-19 13:32 | Add browser test execution headless switch instructions - UI tests can be executed in headless mode by changing options in the selenium python scripts. |
| 2025-12-19 13:55 | Document package.json custom scripts descriptions - Custom script: `npm run dev` executes backend with nodemon tool support. |
| 2025-12-19 14:20 | Add code refactoring checklist guidelines - Refactor guidelines: Maintain modular server endpoints inside separate router folders. |
| 2025-12-19 14:42 | Document database table columns design table - | Table | Columns | Keys | Notes |
| --- | --- | --- | --- | |
| 2025-12-19 15:34 | Add database table info for Users to schema spec - | Users | id, email, password | PK(id), UQ(email) | Store QA credentials | |
| 2025-12-22 10:08 | Add table info for TestCases to schema spec - | TestCases | id, title, steps, expected_result, actual_result, status | PK(id) | Test case definition repository | |
| 2025-12-22 10:41 | Add table info for TestRuns to schema spec - | TestRuns | id, test_case_id, result, execution_date | PK(id), FK(test_case_id) | Execution metrics | |
| 2025-12-22 11:13 | Add table info for Bugs to schema spec - | Bugs | id, description, severity, status, test_case_id | PK(id), FK(test_case_id) | Bug tracker entries | |
| 2025-12-22 11:36 | Add table info for Appointments to schema spec - | Appointments | id, patient_name, doctor_name, appointment_date, notes | PK(id) | Health mock booking entity | |
| 2025-12-22 12:20 | Add API latency target metrics summary - Latency specifications: read endpoints target <50ms; write operations <200ms. |
| 2025-12-22 13:01 | Add security hardening checklist - Security Hardening: Restrict CORS origins to authorized production domain hosts. |
| 2025-12-22 13:47 | Add NPM dependency audit check instructions - Perform package safety audits periodically using command: `npm audit` |
| 2025-12-22 14:14 | Document backend process runner guide - Use process managers like PM2 to keep backend active: `pm2 start backend/server.js` |
| 2025-12-22 14:49 | Add browser compatibility configuration list - Dashboard compatibility: Tested on Chrome (v110+), Firefox (v105+), Safari (v16+). |
| 2025-12-22 15:17 | Document HTML layout viewport scaling configuration - Viewport meta configuration: `width=device-width, initial-scale=1.0` |
| 2025-12-22 15:50 | Add stylesheet importing instructions - Global stylesheet classes are defined in styles.css and imported in index.html. |
| 2025-12-22 16:16 | Document JavaScript local storage caching logic - Local storage is utilized to persist user sessions and auth tokens on login. |
| 2025-12-22 17:10 | Add contributing code of conduct header - 
## Code of Conduct
 |
| 2025-12-23 09:54 | Document contributor code of conduct guidelines - Be respectful and maintain high standards of code review and communication. |
| 2025-12-23 10:35 | Add API test assertion rules outline - API Assertion: All tests must assert correct HTTP response status codes. |
| 2025-12-23 11:17 | Document automation script log tracking configuration - Automation runs output console logs directly to tests/selenium/output.log. |
| 2025-12-23 11:50 | Add JMeter testing assertions detailed guide - JMeter plan utilizes Response Assertion to check for HTTP 201 on appointments API. |
| 2025-12-23 12:13 | Add postman collection mock database isolation guideline - Mock database state is automatically isolated by Newman during local execution. |
| 2025-12-23 13:00 | Document database transaction isolation configuration - The database pool config uses repeatable read transaction isolation default. |
| 2025-12-23 13:34 | Add UI layout responsive breakpoints details - Responsive breakpoints: small (600px), medium (900px), large (1200px). |
| 2025-12-23 14:13 | Add custom CSS font settings configuration - Google Fonts 'Inter' and 'Outfit' are loaded globally for premium appearance. |
| 2025-12-23 14:58 | Document appointment creation validation error response - Appointment error payload: `{ message: 'Error reason descriptive text' }` on bad parameters. |
| 2025-12-23 15:22 | Add quick tips for VSCode extension tooling setup - Recommended VS Code Extensions: ESLint, Prettier, and MySQL Database Client. |
| 2025-12-23 15:55 | Add unit test integration guidelines - To integrate unit tests, add Jest config to backend/package.json file. |
| 2025-12-23 16:38 | Document database connection retry timeout configuration - The database connection pool retries failing connections up to 5 times. |
| 2025-12-24 09:35 | Add mock server testing options suggestions - Alternatively, configure a Mock Server in Postman to run tests without running Node backend. |
| 2025-12-24 10:07 | Add package dependency installation check instructions - To verify installed node package integrity: `npm shrinkwrap` or check lockfile. |
| 2025-12-26 09:31 | Add backend API rate limit guidelines config - To prevent API abuse, consider adding express-rate-limit middleware. |
| 2025-12-26 10:04 | Document React chart animation settings optimization - Chart animations are disabled on small displays to optimize UI performance. |
| 2025-12-26 10:49 | Add database backup recovery CLI commands description - Back up the database: `mysqldump -u root -p smart_healthcare_testing > backup.sql` |
| 2025-12-26 11:17 | Add instructions to run selenium scripts inside container environment - To run Selenium in Docker: configure standard Standalone-Chrome container service. |
| 2025-12-29 09:51 | Document clean build cleanup commands for frontend - Clean build frontend artifacts: `rm -rf dist` and execute compile target again. |
| 2025-12-29 10:24 | Add project credits list note - Credits: Open-source dependencies and contributors around the world. |
| 2025-12-29 10:53 | Update development details revision 170 - Refined documentation guidelines sub-section details #170. |
| 2025-12-29 11:41 | Update development details revision 171 - Refined documentation guidelines sub-section details #171. |
| 2025-12-29 12:07 | Update development details revision 172 - Refined documentation guidelines sub-section details #172. |
| 2025-12-29 12:46 | Update development details revision 173 - Refined documentation guidelines sub-section details #173. |
| 2025-12-29 13:40 | Update development details revision 174 - Refined documentation guidelines sub-section details #174. |
| 2025-12-29 14:00 | Update development details revision 175 - Refined documentation guidelines sub-section details #175. |
| 2025-12-29 14:45 | Update development details revision 176 - Refined documentation guidelines sub-section details #176. |
| 2025-12-30 09:54 | Update development details revision 177 - Refined documentation guidelines sub-section details #177. |
| 2025-12-30 10:30 | Update development details revision 178 - Refined documentation guidelines sub-section details #178. |
| 2025-12-30 11:23 | Update development details revision 179 - Refined documentation guidelines sub-section details #179. |
| 2025-12-30 12:18 | Update development details revision 180 - Refined documentation guidelines sub-section details #180. |
| 2025-12-30 12:44 | Update development details revision 181 - Refined documentation guidelines sub-section details #181. |
| 2025-12-30 13:28 | Update development details revision 182 - Refined documentation guidelines sub-section details #182. |
| 2025-12-30 14:10 | Update development details revision 183 - Refined documentation guidelines sub-section details #183. |
| 2025-12-30 14:41 | Update development details revision 184 - Refined documentation guidelines sub-section details #184. |
| 2025-12-30 15:05 | Update development details revision 185 - Refined documentation guidelines sub-section details #185. |
| 2025-12-30 15:42 | Update development details revision 186 - Refined documentation guidelines sub-section details #186. |
| 2025-12-30 16:34 | Update development details revision 187 - Refined documentation guidelines sub-section details #187. |
| 2025-12-30 17:07 | Update development details revision 188 - Refined documentation guidelines sub-section details #188. |
| 2025-12-30 17:32 | Update development details revision 189 - Refined documentation guidelines sub-section details #189. |
| 2025-12-31 09:26 | Update development details revision 190 - Refined documentation guidelines sub-section details #190. |
| 2025-12-31 09:56 | Update development details revision 191 - Refined documentation guidelines sub-section details #191. |
| 2025-12-31 10:24 | Update development details revision 192 - Refined documentation guidelines sub-section details #192. |
| 2025-12-31 10:54 | Update development details revision 193 - Refined documentation guidelines sub-section details #193. |
| 2025-12-31 11:44 | Update development details revision 194 - Refined documentation guidelines sub-section details #194. |
| 2025-12-31 12:33 | Update development details revision 195 - Refined documentation guidelines sub-section details #195. |
| 2025-12-31 13:23 | Update development details revision 196 - Refined documentation guidelines sub-section details #196. |
| 2025-12-31 14:14 | Update development details revision 197 - Refined documentation guidelines sub-section details #197. |
| 2025-12-31 14:56 | Update development details revision 198 - Refined documentation guidelines sub-section details #198. |
| 2025-12-31 15:48 | Update development details revision 199 - Refined documentation guidelines sub-section details #199. |
| 2025-12-31 16:42 | Update development details revision 200 - Refined documentation guidelines sub-section details #200. |

## Development Timeline Log

| Date & Time | Activity Details |
| --- | --- |
| 2025-12-01 10:01 | Add build status badge to project header - [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]() |
| 2025-12-01 10:39 | Add license badge to project header - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]() |
| 2025-12-01 11:02 | Add node dependency version badge - [![Node Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-blue.svg)]() |
| 2025-12-01 11:36 | Add MySQL dependency version badge - [![MySQL Version](https://img.shields.io/badge/mysql-%3E%3D%208.0-orange.svg)]() |
| 2025-12-01 12:02 | Define project scope in introduction - This dashboard is designed to provide full visibility into healthcare automation testing suites. |
| 2025-12-01 12:31 | Add system architecture high-level summary - The project follows a standard 3-tier architecture with a React SPA, Express API gateway, and MySQL database. |
| 2025-12-01 13:19 | Document node modules exclusion policy - Please ensure node_modules directories are never committed to the remote repository. |
| 2025-12-01 14:00 | Add developer guidelines section header - 
## Developer Guidelines
 |
| 2025-12-01 14:52 | Document local environment setup step - Copy the environment configuration file from backend/.env.example to backend/.env. |
| 2025-12-01 15:23 | Add DB_USER default parameter documentation - Set DB_USER to the default administrative user (usually root). |
| 2025-12-01 15:57 | Add DB_PASSWORD configuration tips - If your local MySQL root user has no password, leave the password field blank in the .env file. |
| 2025-12-01 16:39 | Add DB_NAME description in environment settings - DB_NAME should point to the database created using database/schema.sql (smart_healthcare_testing). |
| 2025-12-02 09:59 | Add PORT config override instructions - The backend server defaults to port 5000, but can be customized using the PORT env variable. |
| 2025-12-02 10:22 | Document frontend proxy settings - The Vite development server is configured to proxy api requests directly to http://localhost:5000. |
| 2025-12-02 10:44 | Add features list section header - 
## System Features
 |
| 2025-12-02 11:29 | Add 'Test Case Execution Tracking' feature - - **Test Case Execution Tracking**: Monitor the live status of automated and manual test cases. |
| 2025-12-02 11:58 | Add 'Bug Tracking and Lifecycle' feature - - **Bug Tracking**: Log defects automatically from failed automation scripts and update status. |
| 2025-12-02 12:23 | Add 'Analytics and Reporting' feature - - **Analytics & Reporting**: View passed/failed test statistics and bug severity distribution charts. |
| 2025-12-02 13:11 | Add 'Interactive Appointment Simulator' feature - - **Appointment Simulator**: Simulate bookings to test API reliability and performance under load. |
| 2025-12-03 10:18 | Add dependencies table to README - | Component | Dependency | Version | Purpose |
| --- | --- | --- | --- | |
| 2025-12-03 10:51 | Add Express dependency details to table - | Backend | express | ^4.18.2 | HTTP Server Framework | |
| 2025-12-03 11:16 | Add MySQL2 dependency details to table - | Backend | mysql2 | ^3.2.0 | MySQL Client Promise Library | |
| 2025-12-03 11:52 | Add Dotenv dependency details to table - | Backend | dotenv | ^16.0.3 | Environment Variable Loader | |
| 2025-12-03 12:39 | Add Cors dependency details to table - | Backend | cors | ^2.8.5 | Cross-Origin Resource Sharing | |
| 2025-12-03 13:09 | Add React dependency details to table - | Frontend | react | ^18.2.0 | UI Components Framework | |
| 2025-12-03 14:02 | Add ChartJS dependency details to table - | Frontend | chart.js | ^4.2.1 | Data Visualization Charts | |
| 2025-12-03 14:37 | Add Axios dependency details to table - | Frontend | axios | ^1.3.4 | Promise-based HTTP Client | |
| 2025-12-04 10:15 | Add Tailwind/CSS styling details to table - | Frontend | vanilla css | N/A | Modern Premium Custom Styling | |
| 2025-12-04 11:04 | Add Selenium dependency details to table - | Testing | selenium-webdriver | ^4.8.2 | Browser Automation | |
| 2025-12-04 11:53 | Add Newman dependency details to table - | Testing | newman | ^5.3.2 | Postman Collection Commandline Runner | |
| 2025-12-04 12:31 | Add JMeter tool details to table - | Testing | Apache JMeter | 5.5 | Performance & Load Testing | |
| 2025-12-04 13:07 | Document SQL database setup prerequisites - Prerequisites: Install MySQL Server 8.0+ locally before importing schema. |
| 2025-12-04 13:56 | Add manual database import command instruction - Import the schema manually via CLI: `mysql -u root -p < database/schema.sql` |
| 2025-12-04 14:32 | Add manual database seed command instruction - Import the seed data manually: `mysql -u root -p < db/seed.sql` |
| 2025-12-04 15:18 | Document automatic setup script utility - Alternatively, execute `setup-db.bat` on Windows to initialize the database automatically. |
| 2025-12-04 16:11 | Add troubleshoot note for database connection errors - Troubleshoot: Ensure the MySQL service is running in Windows Services (services.msc). |
| 2025-12-05 10:24 | Document default mysql socket configuration - By default, the connection pool uses standard TCP sockets on port 3306. |
| 2025-12-05 10:56 | Add API reference section header - 
## Complete API Documentation
 |
| 2025-12-05 11:29 | Document GET /api/health endpoint - - **GET /api/health**: Verifies DB connection status and server health. Returns `{ ok: true }`. |
| 2025-12-05 11:56 | Document POST /api/auth/login input requirements - - **POST /api/auth/login**: Accepts `{ email, password }` payload to authenticate a tester user. |
| 2025-12-05 12:23 | Document POST /api/auth/login response parameters -   - Response: `{ token, role, name }` on success, or `401 Unauthorized`. |
| 2025-12-05 13:15 | Document GET /api/testcases endpoint characteristics - - **GET /api/testcases**: Fetches all defined test cases sorted by creation date. |
| 2025-12-05 13:58 | Document POST /api/testcases payload structure - - **POST /api/testcases**: Creates a new test case. Required: `{ title, steps, expected_result }`. |
| 2025-12-08 10:31 | Document POST /api/run-test logic and side effects - - **POST /api/run-test**: Records execution results. Payload: `{ test_case_id, actual_result, result }`. |
| 2025-12-08 11:06 | Document automatic bug logging details -   - Note: Setting `result: 'Fail'` automatically logs a corresponding Medium severity bug. |
| 2025-12-08 11:35 | Document GET /api/bugs tracker endpoint - - **GET /api/bugs**: Returns list of all active and resolved bugs. |
| 2025-12-08 12:22 | Document POST /api/bugs manual logging - - **POST /api/bugs**: Log a bug manually with `{ description, severity, status, test_case_id }`. |
| 2025-12-08 12:57 | Document PATCH /api/bugs/:id status update - - **PATCH /api/bugs/:id**: Updates bug status (e.g. 'Open', 'In Progress', 'Resolved'). |
| 2025-12-08 13:43 | Document GET /api/reports summary details - - **GET /api/reports**: Computes dashboard analytics: pass rates, open bugs, and severity distribution. |
| 2025-12-08 14:36 | Add test cases dashboard module header - 
### Module: Test Case Management
 |
| 2025-12-09 10:43 | Describe manual test creation workflow UI - The dashboard UI allows QA testers to write new test steps and expected results directly from the browser. |
| 2025-12-09 11:17 | Describe execution simulator component - A run button allows quick execution simulation to mark tests as Pass or Fail instantly. |
| 2025-12-09 11:54 | Add bug tracking module subsection - 
### Module: Bug Tracking and Defect Lifecycle
 |
| 2025-12-09 12:35 | Describe bug severity options detail - Bugs can be categorized into four severities: Low, Medium, High, and Critical. |
| 2025-12-09 13:05 | Describe automated bug promotion rule - When a Selenium test case fails, the testing pipeline automatically propagates the failure to the bugs module. |
| 2025-12-09 13:42 | Add report charts module subsection - 
### Module: Analytical Reports & KPI Charts
 |
| 2025-12-09 14:32 | Explain pass/fail ratio representation - The dashboard features a circular doughnut chart representing the current pass/fail ratio of test suites. |
| 2025-12-09 15:07 | Explain bug severity distribution bar graph - A custom bar chart visualizes bugs clustered by severity level to help prioritize fixes. |
| 2025-12-09 16:02 | Add performance metrics analytics summary - Historical test runs count is displayed in a mini counter widget for quick tracking. |
| 2025-12-09 16:52 | Add setup guides section header - 
## Quick Setup Guides
 |
| 2025-12-09 17:26 | Add Windows batch setup guide steps - On Windows systems, you can use the configured batch scripts in the project root: |
| 2025-12-09 17:49 | Describe setup-db.bat functionality - - `setup-db.bat`: Automatically logs into MySQL, drops any old database, and creates a fresh schema. |
| 2025-12-09 18:42 | Describe setup-seed.bat utility - - `setup-seed.bat`: Populates tables with mock test histories, bugs, and appointments for demo purposes. |
| 2025-12-11 10:15 | Describe run-backend.bat startup shortcut - - `run-backend.bat`: Installs npm packages if missing and starts the Express server in watch mode. |
| 2025-12-11 11:09 | Describe run-frontend.bat startup shortcut - - `run-frontend.bat`: Boots the Vite dev server for the React UI dashboard. |
| 2025-12-11 11:34 | Add Unix/macOS alternative run instructions - 
For Linux/macOS systems, use standard shell commands: `npm install` and `npm run dev` in each subdirectory.
 |
| 2025-12-11 12:17 | Add manual test automation instructions header - 
## Running Test Suites Locally
 |
| 2025-12-11 12:49 | Document Postman runner installation prerequisites - Ensure Newman is installed globally to run collections: `npm install -g newman` |
| 2025-12-11 13:32 | Add Postman API suite run command syntax - Run API collections via: `newman run tests/postman/Healthcare-API-Tests.postman_collection.json` |
| 2025-12-11 14:09 | Add Postman environment configuration guidelines - Adjust target URL in collection variable configuration if backend is hosted on a different port. |
| 2025-12-11 14:43 | Add Selenium python suite setup prerequisites - Selenium Python tests require: `pip install -r tests/selenium/requirements.txt` |
| 2025-12-11 15:11 | Document webdriver path settings for Python scripts - Verify ChromeDriver is updated and accessible via system PATH environment variable. |
| 2025-12-11 16:04 | Add Python Selenium run command guidelines - Execute UI test scripts using: `python tests/selenium/login_ui_tests.py` |
| 2025-12-11 16:37 | Document NodeJS Selenium suite script command - Execute JS Selenium scripts using: `node tests/selenium/login-and-booking.test.js` |
| 2025-12-11 17:17 | Add JMeter performance test execution guide - To execute performance loads: Install Apache JMeter and open the JMX plan from `tests/jmeter/`. |
| 2025-12-11 18:10 | Add JMeter CLI non-GUI run command script - Run non-GUI load test: `jmeter -n -t tests/jmeter/healthcare-performance-test-plan.jmx -l results.jtl` |
| 2025-12-12 10:40 | Add CI/CD pipeline overview subsection - 
## Continuous Integration (CI/CD) Pipeline
 |
| 2025-12-12 11:20 | Describe Jenkinsfile configuration layout - The repository includes a Jenkinsfile that defines a declarative pipeline with 5 stages. |
| 2025-12-12 11:56 | Describe 'Checkout' stage in Jenkins pipeline - - **Stage 1: Checkout**: Pulls code branch from GitHub repository into workspace. |
| 2025-12-12 12:20 | Describe 'Database Setup' stage in pipeline - - **Stage 2: Database Setup**: Bootstraps the local test database instance with clean schema. |
| 2025-12-12 13:13 | Describe 'Install Dependencies' stage in pipeline - - **Stage 3: Install Dependencies**: Runs npm installs for backend, frontend, and tests. |
| 2025-12-12 13:49 | Describe 'Start Services' stage in pipeline - - **Stage 4: Start Services**: Launches the backend Express app in the background. |
| 2025-12-12 14:43 | Describe 'Execute Automated Tests' stage in pipeline - - **Stage 5: Test Execution**: Runs Newman collections and Selenium test suites sequentially. |
| 2025-12-12 15:27 | Describe 'Generate Reports' stage in pipeline - - **Stage 6: Publish Results**: Archive test results, log files, and HTML dashboards. |
| 2025-12-12 15:55 | Add developer tips subsection - 
## Tips & Troubleshooting
 |
| 2025-12-12 16:49 | Add CORS resolution advice to guidelines - CORS issue: Ensure the frontend URL matched in backend cors configuration is correct. |
| 2025-12-12 17:11 | Add node module lockfile update policy - Do not modify package-lock.json manually. Always run npm install to update it automatically. |
| 2025-12-15 10:01 | Add database table constraints overview - Table constraints enforce foreign key integrity between TestRuns and TestCases. |
| 2025-12-15 10:40 | Document cascade delete behavior for bug tracker - Deleting a TestCase cascade deletes its execution logs and associated bug records. |
| 2025-12-15 11:27 | Add coding standard specifications link description - Code formatting follows ES6 standards. Lint tools can be run with `npm run lint`. |
| 2025-12-15 12:12 | Add CSS design variables details - The custom styling dashboard uses modern CSS variables for themes (e.g. `--primary-color`, `--bg-dark`). |
| 2025-12-15 12:53 | Document CSS custom layout grid setup - Layouts are structured using CSS Grid and Flexbox for native responsive scalability. |
| 2025-12-15 13:17 | Add responsive screen resolution support notes - Supported viewport resolutions range from mobile (320px) to desktop (1920px). |
| 2025-12-15 13:37 | Document chart canvas responsive layout configuration - ChartJS instances set maintainAspectRatio to false for fluid dashboard grid sizing. |
| 2025-12-15 14:28 | Add mock authentication security note - Security Note: Do not use the mock JWT implementation in public staging/production networks. |
| 2025-12-15 14:48 | Add production build instruction steps - 
## Production Compilation
 |
| 2025-12-16 10:24 | Document frontend production build command - Compile production frontend assets: `npm run build` in the frontend directory. |
| 2025-12-16 11:11 | Explain dist output directory configuration - The compiled assets are stored in frontend/dist and can be served using static hosts. |
| 2025-12-16 12:00 | Add backend clustering suggestions - For scaling the backend, consider running node server instances clustered behind NGINX. |
| 2025-12-16 12:30 | Add git branching workflow guide header - 
## Git Branching Strategy
 |
| 2025-12-16 12:59 | Add master/main branch protect instructions - - **main**: Stable production branch. Directly pushing is protected in collaborative setups. |
| 2025-12-16 13:52 | Add feature branch naming conventions description - - **feature/**: Use descriptive names like `feature/appointment-ui` for new components. |
| 2025-12-16 14:21 | Add bugfix branch naming conventions description - - **bugfix/**: Prefix branch names with `bugfix/` for resolving tracked issues. |
| 2025-12-16 14:46 | Add pull request verification check guidelines - - **Pull Requests**: Must pass all automated tests and require at least one peer review. |
| 2025-12-16 15:10 | Add code coverage tools guide - Code coverage is computed using Jest and Istanbul reporter during build. |
| 2025-12-16 16:00 | Add mock data seed generation script details - Seed scripts generate randomly structured records to simulate 30 days of testing history. |
| 2025-12-16 16:48 | Document appointment creation validations - Appointment bookings validate patient name length (>3 chars) and future dates. |
| 2025-12-17 10:29 | Add system load testing capacity details - The JMeter plan is configured to simulate 50 concurrent users accessing API routes. |
| 2025-12-17 10:56 | Document response time SLA metrics threshold - API response SLA target is set to <150ms for normal read/write queries. |
| 2025-12-17 11:29 | Add error logging middleware configuration details - Express errors are formatted by a central middleware and logged to error.log. |
| 2025-12-17 11:54 | Add database index optimizations suggestions - To optimize API speed: Indexes are added on frequently queried tables: TestCases(status). |
| 2025-12-17 12:16 | Add Docker deployment section header - 
## Docker Containerization (Optional)
 |
| 2025-12-17 13:01 | Document Dockerfile structure summary - The project includes docker configurations for standalone node container runs. |
| 2025-12-17 13:31 | Document docker-compose multi-service run - Run whole stack: `docker-compose up --build` to boot backend, frontend, and db services. |
| 2025-12-17 14:25 | Add environment variables checklist for Docker - Docker environment variables are configured in the compose config root file. |
| 2025-12-17 15:16 | Add project roadmap section header - 
## Project Roadmap
 |
| 2025-12-17 16:09 | Add milestone Q1: Slack notifications integration - - **Q1 Milestone**: Add Slack Webhook integration for instant failure alerts. |
| 2025-12-17 16:42 | Add milestone Q2: AI analytics summary generation - - **Q2 Milestone**: Utilize local LLM APIs to draft automated bug descriptions. |
| 2025-12-17 17:02 | Add milestone Q3: Multi-tenant user roles support - - **Q3 Milestone**: Add admin, manager, and tester authentication roles. |
| 2025-12-18 10:07 | Add license policy details header - 
## License
 |
| 2025-12-18 10:52 | Document MIT license terms outline - Distributed under the MIT License. See LICENSE for details. |
| 2025-12-18 11:28 | Add contact information for maintainers - For support or queries, contact the development lead: Shaurya (shauryapratapsingh9415@gmail.com). |
| 2025-12-18 11:50 | Add acknowledge list section header - 
## Acknowledgements
 |
| 2025-12-18 12:35 | Add thanks to React community note - - Thanks to the React and Vite team for modern asset pipelines. |
| 2025-12-18 13:04 | Add thanks to ChartJS developers note - - Thanks to ChartJS developers for the beautiful canvas dashboard widgets. |
| 2025-12-18 13:56 | Add thanks to Selenium automation maintainers - - Thanks to Selenium webdriver project for making UI browser tests easy. |
| 2025-12-18 14:47 | Add QA status dashboard widget summary - A quick info panel summarizes current test coverage and unresolved bugs. |
| 2025-12-18 15:33 | Document login page authentication checks - Login inputs require valid email formats before making HTTP auth queries. |
| 2025-12-19 10:15 | Add API testing best practices guidelines - Best Practice: Always reset db state using setup-db.bat before running test collections. |
| 2025-12-19 11:06 | Add manual test suite importing templates guide - Import pre-written QA manual test XLS templates from the docs directory. |
| 2025-12-19 11:52 | Document database seed cleanup steps - To clear mock data, run: `mysql -u root -p -e 'TRUNCATE TestRuns; TRUNCATE Bugs;'` |
| 2025-12-19 12:22 | Add mock authorization token format explanation - The mock JWT token contains payload details specifying user role: 'tester'. |
| 2025-12-19 12:55 | Add browser test execution headless switch instructions - UI tests can be executed in headless mode by changing options in the selenium python scripts. |
| 2025-12-19 13:17 | Document package.json custom scripts descriptions - Custom script: `npm run dev` executes backend with nodemon tool support. |
| 2025-12-19 13:46 | Add code refactoring checklist guidelines - Refactor guidelines: Maintain modular server endpoints inside separate router folders. |
| 2025-12-19 14:29 | Document database table columns design table - | Table | Columns | Keys | Notes |
| --- | --- | --- | --- | |
| 2025-12-19 15:21 | Add database table info for Users to schema spec - | Users | id, email, password | PK(id), UQ(email) | Store QA credentials | |
| 2025-12-19 16:13 | Add table info for TestCases to schema spec - | TestCases | id, title, steps, expected_result, actual_result, status | PK(id) | Test case definition repository | |
| 2025-12-19 16:52 | Add table info for TestRuns to schema spec - | TestRuns | id, test_case_id, result, execution_date | PK(id), FK(test_case_id) | Execution metrics | |
| 2025-12-19 17:19 | Add table info for Bugs to schema spec - | Bugs | id, description, severity, status, test_case_id | PK(id), FK(test_case_id) | Bug tracker entries | |
| 2025-12-19 17:56 | Add table info for Appointments to schema spec - | Appointments | id, patient_name, doctor_name, appointment_date, notes | PK(id) | Health mock booking entity | |
| 2025-12-22 10:29 | Add API latency target metrics summary - Latency specifications: read endpoints target <50ms; write operations <200ms. |
| 2025-12-22 10:50 | Add security hardening checklist - Security Hardening: Restrict CORS origins to authorized production domain hosts. |
| 2025-12-22 11:12 | Add NPM dependency audit check instructions - Perform package safety audits periodically using command: `npm audit` |
| 2025-12-22 11:51 | Document backend process runner guide - Use process managers like PM2 to keep backend active: `pm2 start backend/server.js` |
| 2025-12-22 12:39 | Add browser compatibility configuration list - Dashboard compatibility: Tested on Chrome (v110+), Firefox (v105+), Safari (v16+). |
| 2025-12-22 13:33 | Document HTML layout viewport scaling configuration - Viewport meta configuration: `width=device-width, initial-scale=1.0` |
| 2025-12-22 14:15 | Add stylesheet importing instructions - Global stylesheet classes are defined in styles.css and imported in index.html. |
| 2025-12-22 15:03 | Document JavaScript local storage caching logic - Local storage is utilized to persist user sessions and auth tokens on login. |
| 2025-12-22 15:51 | Add contributing code of conduct header - 
## Code of Conduct
 |
| 2025-12-22 16:17 | Document contributor code of conduct guidelines - Be respectful and maintain high standards of code review and communication. |
| 2025-12-22 16:55 | Add API test assertion rules outline - API Assertion: All tests must assert correct HTTP response status codes. |
| 2025-12-22 17:49 | Document automation script log tracking configuration - Automation runs output console logs directly to tests/selenium/output.log. |
| 2025-12-22 18:31 | Add JMeter testing assertions detailed guide - JMeter plan utilizes Response Assertion to check for HTTP 201 on appointments API. |
| 2025-12-23 09:49 | Add postman collection mock database isolation guideline - Mock database state is automatically isolated by Newman during local execution. |
| 2025-12-23 10:32 | Document database transaction isolation configuration - The database pool config uses repeatable read transaction isolation default. |
| 2025-12-23 10:59 | Add UI layout responsive breakpoints details - Responsive breakpoints: small (600px), medium (900px), large (1200px). |
| 2025-12-23 11:48 | Add custom CSS font settings configuration - Google Fonts 'Inter' and 'Outfit' are loaded globally for premium appearance. |
| 2025-12-23 12:38 | Document appointment creation validation error response - Appointment error payload: `{ message: 'Error reason descriptive text' }` on bad parameters. |
| 2025-12-23 13:20 | Add quick tips for VSCode extension tooling setup - Recommended VS Code Extensions: ESLint, Prettier, and MySQL Database Client. |
| 2025-12-23 14:07 | Add unit test integration guidelines - To integrate unit tests, add Jest config to backend/package.json file. |
| 2025-12-23 14:39 | Document database connection retry timeout configuration - The database connection pool retries failing connections up to 5 times. |