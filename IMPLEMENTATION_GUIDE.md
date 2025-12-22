# Implementation Guide

## Step 1: System Under Test

- Backend provides `POST /api/auth/login` and `POST /api/appointments`.
- These represent the healthcare app login and appointment booking flow.

## Step 2: Database

- SQL schema is in `db/schema.sql`.
- Includes `TestCases`, `Bugs`, `TestRuns`, and `Appointments`.

## Step 3: Backend APIs

- `POST /api/testcases`
- `GET /api/testcases`
- `POST /api/run-test`
- `POST /api/bugs`
- `GET /api/bugs`
- `PATCH /api/bugs/:id`
- `GET /api/reports`

## Step 4: Frontend Dashboard

- React app in `frontend`.
- Tabs for Dashboard, Test Cases, Bugs, Automation, API, Performance.
- Uses Chart.js charts for pass/fail and bug severity.

## Step 5: Manual Testing Flow

- Run test case from UI with pass/fail action.
- Enter actual result in prompt.
- Stores execution in `TestRuns`.

## Step 6: Automation Testing

- Selenium sample script at `tests/selenium/login-and-booking.test.js`.

## Step 7: API Testing

- Postman collection at `tests/postman/Healthcare-API-Tests.postman_collection.json`.

## Step 8: Performance Testing

- JMeter starter plan at `tests/jmeter/healthcare-performance-test-plan.jmx`.

## Step 9: Dashboard Analytics

- `GET /api/reports` returns total tests, pass/fail, bug count, severity distribution.

## Step 10: Integration

- Frontend calls backend endpoints directly.
- Failed manual test auto-creates a bug.
