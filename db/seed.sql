-- Demo seed data for presentations and screenshots.
-- Run AFTER db/schema.sql on a fresh database, OR truncate tables first (see bottom).

USE smart_healthcare_testing;

-- Clear existing rows if you want a clean re-seed (uncomment for re-run):
-- SET FOREIGN_KEY_CHECKS = 0;
-- TRUNCATE TABLE Bugs;
-- TRUNCATE TABLE TestRuns;
-- TRUNCATE TABLE TestCases;
-- TRUNCATE TABLE Appointments;
-- SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO TestCases (id, title, steps, expected_result, actual_result, status) VALUES
(1,
 'Login with valid credentials',
 '1. Open login page\n2. Enter tester@healthcare.com / Test@123\n3. Submit',
 'User receives token and success response',
 'Token returned',
 'Pass'),
(2,
 'Login rejects wrong password',
 '1. Open login\n2. Enter valid email, wrong password\n3. Submit',
 '401 Unauthorized',
 '401 returned',
 'Pass'),
(3,
 'Book appointment — happy path',
 '1. Authenticate\n2. POST appointment with valid patient, doctor, date',
 '201 Created with appointment id',
 '201 Created',
 'Pass'),
(4,
 'Book appointment — missing required field',
 '1. POST appointment without patient_name',
 '400 Bad Request',
 '400 returned',
 'Pass'),
(5,
 'Validate appointment date format (edge case)',
 '1. Send invalid date string\n2. Check error handling',
 'Clear validation error',
 'Server accepted invalid date — bug filed',
 'Fail'),
(6,
 'Performance: reports API under load',
 '1. Run JMeter plan\n2. Check p95 latency',
 'p95 under 500ms',
 NULL,
 'Not Run'),
(7,
 'Login API rejects empty body',
 '1. Send POST /api/auth/login with empty JSON body {}',
 '400 Bad Request with validation message',
 NULL,
 'Not Run'),
(8,
 'Login API rejects missing password',
 '1. Send valid email but omit password field',
 '400 Bad Request with required field message',
 NULL,
 'Not Run'),
(9,
 'Login API rejects missing email',
 '1. Send password only in payload',
 '400 Bad Request with required field message',
 NULL,
 'Not Run'),
(10,
 'Login API blocks unknown user',
 '1. Send unknown email and random password',
 '401 Unauthorized and Invalid credentials',
 NULL,
 'Not Run'),
(11,
 'Login trims leading/trailing spaces (UI check)',
 '1. Enter spaces before/after email\n2. Enter valid password\n3. Submit',
 'Either trim and allow login, or show clear validation error',
 NULL,
 'Not Run'),
(12,
 'Appointment creation rejects missing doctor_name',
 '1. POST /api/appointments without doctor_name',
 '400 Bad Request with required field message',
 NULL,
 'Not Run'),
(13,
 'Appointment creation rejects missing appointment_date',
 '1. POST /api/appointments without appointment_date',
 '400 Bad Request with required field message',
 NULL,
 'Not Run'),
(14,
 'Appointment creation accepts long notes text',
 '1. POST valid appointment payload with long notes (>300 chars)',
 '201 Created and row persisted correctly',
 NULL,
 'Not Run'),
(15,
 'Reports API returns required summary fields',
 '1. Call GET /api/reports\n2. Validate keys and numeric values',
 'Response contains total_test_cases, passed, failed, bug_count, severity_distribution',
 NULL,
 'Not Run')
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  steps = VALUES(steps),
  expected_result = VALUES(expected_result),
  actual_result = VALUES(actual_result),
  status = VALUES(status);

INSERT INTO TestRuns (test_case_id, result, execution_date) VALUES
(1, 'Pass', '2026-04-01 09:00:00'),
(2, 'Pass', '2026-04-01 09:05:00'),
(3, 'Pass', '2026-04-02 10:00:00'),
(4, 'Pass', '2026-04-02 10:15:00'),
(5, 'Fail', '2026-04-03 14:00:00'),
(10, 'Pass', '2026-04-05 11:20:00'),
(12, 'Pass', '2026-04-05 11:35:00'),
(13, 'Pass', '2026-04-05 11:45:00');

INSERT INTO Bugs (description, severity, status, test_case_id) VALUES
('Edge case: invalid appointment date accepted by API', 'High', 'Open', 5),
('Auto-created from failed test run', 'Medium', 'Open', 5);

INSERT INTO Appointments (patient_name, doctor_name, appointment_date, notes) VALUES
('Jane Doe', 'Dr. Smith', '2026-05-10 10:30:00', 'Annual checkup'),
('John Public', 'Dr. Lee', '2026-05-12 15:00:00', 'Follow-up');
