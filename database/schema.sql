CREATE DATABASE IF NOT EXISTS hospital_orientation;
USE hospital_orientation;

DROP TABLE IF EXISTS test_results;
DROP TABLE IF EXISTS test_cases;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(120) NOT NULL
);

CREATE TABLE test_cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  type ENUM('UI', 'API') NOT NULL,
  input_data TEXT,
  expected_output TEXT
);

CREATE TABLE test_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_case_id INT NOT NULL,
  actual_output TEXT NOT NULL,
  status ENUM('Pass', 'Fail') NOT NULL,
  execution_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (test_case_id) REFERENCES test_cases(id)
);

INSERT INTO users (email, password) VALUES
('admin@hospital.com', 'admin123'),
('doctor@hospital.com', 'doctor123');

INSERT INTO test_cases (name, type, input_data, expected_output) VALUES
('Valid login', 'UI', '{"email":"admin@hospital.com","password":"admin123"}', 'Login successful'),
('Invalid login', 'UI', '{"email":"admin@hospital.com","password":"wrong"}', 'Invalid credentials'),
('Empty fields', 'UI', '{"email":"","password":""}', 'Please enter email and password.'),
('API success', 'API', '{"email":"admin@hospital.com","password":"admin123"}', 'Login successful'),
('API failure', 'API', '{"email":"unknown@hospital.com","password":"123456"}', 'Invalid credentials');
