# Test Case Specifications

This file documents the expanded test suite used by the Smart Healthcare Testing Dashboard.

## Legend

- **Type:** UI / API / Performance
- **Priority:** High / Medium
- **Status:** Initial seeded state in DB

## Detailed Test Cases

### TC-01 Login with valid credentials
- **Type:** API/UI
- **Priority:** High
- **Precondition:** System is running, valid user exists.
- **Input:** `tester@healthcare.com`, `Test@123`
- **Steps:** Open login, enter credentials, submit.
- **Expected:** Success response/token returned.
- **Status:** Pass

### TC-02 Login rejects wrong password
- **Type:** API/UI
- **Priority:** High
- **Precondition:** Valid email exists.
- **Input:** Valid email + wrong password.
- **Steps:** Submit login form/API request.
- **Expected:** `401 Unauthorized`.
- **Status:** Pass

### TC-03 Book appointment happy path
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Valid patient, doctor, appointment date.
- **Steps:** Send `POST /api/appointments`.
- **Expected:** `201 Created` with appointment ID.
- **Status:** Pass

### TC-04 Book appointment missing required field
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Missing `patient_name`.
- **Steps:** Send invalid payload.
- **Expected:** `400 Bad Request`.
- **Status:** Pass

### TC-05 Validate appointment date format edge case
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Invalid date string.
- **Steps:** Send payload with malformed date.
- **Expected:** Validation error should be returned.
- **Status:** Fail (bug identified)

### TC-06 Performance reports API under load
- **Type:** Performance
- **Priority:** Medium
- **Precondition:** JMeter plan configured.
- **Input:** Concurrent requests to `GET /api/reports`.
- **Steps:** Run load test and monitor p95 latency.
- **Expected:** p95 latency < 500 ms.
- **Status:** Not Run

### TC-07 Login API rejects empty body
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** `{}`
- **Steps:** Send `POST /api/auth/login` with empty JSON.
- **Expected:** `400 Bad Request` with required field message.
- **Status:** Not Run

### TC-08 Login API rejects missing password
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** `{ "email": "tester@healthcare.com" }`
- **Steps:** Send request.
- **Expected:** `400 Bad Request`.
- **Status:** Not Run

### TC-09 Login API rejects missing email
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** `{ "password": "Test@123" }`
- **Steps:** Send request.
- **Expected:** `400 Bad Request`.
- **Status:** Not Run

### TC-10 Login API blocks unknown user
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Unknown email and password.
- **Steps:** Send request.
- **Expected:** `401 Unauthorized`, message indicates invalid credentials.
- **Status:** Not Run

### TC-11 Login input whitespace behavior check
- **Type:** UI
- **Priority:** Medium
- **Precondition:** UI and backend running.
- **Input:** Email with leading/trailing spaces.
- **Steps:** Enter values in login form and submit.
- **Expected:** System handles whitespace predictably (trim or reject with clear message).
- **Status:** Not Run

### TC-12 Appointment creation rejects missing doctor_name
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Valid appointment payload without `doctor_name`.
- **Steps:** Send request to appointment endpoint.
- **Expected:** `400 Bad Request`.
- **Status:** Not Run

### TC-13 Appointment creation rejects missing appointment_date
- **Type:** API
- **Priority:** High
- **Precondition:** Backend available.
- **Input:** Valid payload without `appointment_date`.
- **Steps:** Send request.
- **Expected:** `400 Bad Request`.
- **Status:** Not Run

### TC-14 Appointment creation accepts long notes
- **Type:** API
- **Priority:** Medium
- **Precondition:** Backend available.
- **Input:** Valid payload with notes longer than 300 chars.
- **Steps:** Submit appointment.
- **Expected:** `201 Created` and complete note saved.
- **Status:** Not Run

### TC-15 Reports API response schema validation
- **Type:** API
- **Priority:** Medium
- **Precondition:** Backend available, some data exists.
- **Input:** `GET /api/reports`
- **Steps:** Validate response keys and numeric types.
- **Expected:** Keys exist: `total_test_cases`, `passed`, `failed`, `bug_count`, `severity_distribution`.
- **Status:** Not Run
