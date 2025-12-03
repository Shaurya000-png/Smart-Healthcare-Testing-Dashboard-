CREATE DATABASE IF NOT EXISTS smart_healthcare_testing;
USE smart_healthcare_testing;

CREATE TABLE IF NOT EXISTS TestCases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  steps TEXT NOT NULL,
  expected_result TEXT NOT NULL,
  actual_result TEXT NULL,
  status ENUM('Not Run', 'Pass', 'Fail') DEFAULT 'Not Run'
);

CREATE TABLE IF NOT EXISTS Bugs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL,
  severity ENUM('Low', 'Medium', 'High') NOT NULL,
  status ENUM('Open', 'Closed') DEFAULT 'Open',
  test_case_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (test_case_id) REFERENCES TestCases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TestRuns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_case_id INT NOT NULL,
  result ENUM('Pass', 'Fail') NOT NULL,
  execution_date DATETIME NOT NULL,
  FOREIGN KEY (test_case_id) REFERENCES TestCases(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  doctor_name VARCHAR(255) NOT NULL,
  appointment_date DATETIME NOT NULL,
  notes TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
