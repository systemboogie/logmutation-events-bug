const { Builder, until } = require('selenium-webdriver');
const path = require('path');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    const cdpConnection = await driver.createCDPConnection('page');
    await driver.logMutationEvents(cdpConnection, function (event) {
      console.log(`Greetings from the callback with: ${event}`);
    });

    await driver.get(`file://${path.resolve(__dirname, './webpage/dynamic.html')}`);

    let element = await driver.findElement({ id: 'reveal' });
    await element.click();
    let revealed = await driver.findElement({ id: 'revealed' });
    await driver.wait(until.elementIsVisible(revealed), 5000);

    const logEntries = await driver.manage().logs().get('browser');

    console.log(logEntries);
  } finally {
    await driver.quit();
  }
})();
