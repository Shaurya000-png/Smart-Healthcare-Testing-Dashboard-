import time
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By

BASE_URL = "http://localhost:3000"
RESULT_API = f"{BASE_URL}/api/test-result"

# Mapping aligns with test_cases IDs in database/schema.sql.
TEST_CASES = [
    {
        "id": 1,
        "name": "Valid login",
        "email": "admin@hospital.com",
        "password": "admin123",
        "expected_message": "Login successful",
    },
    {
        "id": 2,
        "name": "Invalid login",
        "email": "admin@hospital.com",
        "password": "wrong",
        "expected_message": "Invalid credentials",
    },
]


def send_result(test_case_id, actual_output, status):
    payload = {
        "test_case_id": test_case_id,
        "actual_output": actual_output,
        "status": status,
    }

    try:
        response = requests.post(RESULT_API, json=payload, timeout=10)
        print(f"Stored result for TC-{test_case_id}: {response.status_code} {response.text}")
    except requests.RequestException as exc:
        print(f"Failed to store result for TC-{test_case_id}: {exc}")


def run_ui_test(driver, test):
    driver.get(BASE_URL)
    time.sleep(0.8)

    email_input = driver.find_element(By.ID, "email")
    password_input = driver.find_element(By.ID, "password")
    login_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")

    email_input.clear()
    password_input.clear()
    email_input.send_keys(test["email"])
    password_input.send_keys(test["password"])
    login_button.click()

    time.sleep(1.5)

    message = driver.find_element(By.ID, "message").text.strip()
    status = "Pass" if test["expected_message"] in message else "Fail"
    print(f"{test['name']} => actual='{message}', expected='{test['expected_message']}', status={status}")

    send_result(test["id"], message, status)


def main():
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")

    driver = webdriver.Chrome(options=options)
    try:
        for test in TEST_CASES:
            run_ui_test(driver, test)
    finally:
        time.sleep(1)
        driver.quit()


if __name__ == "__main__":
    main()
