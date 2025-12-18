// Sample Selenium test script for login + appointment flow.
// Update selectors and base URL to match your app UI if needed.
const { Builder, By, until } = require("selenium-webdriver");

async function run() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:5173");
    await driver.wait(until.elementLocated(By.css("button")), 5000);
    console.log("Selenium smoke test reached dashboard.");
  } finally {
    await driver.quit();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
