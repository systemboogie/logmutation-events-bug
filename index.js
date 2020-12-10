const { Builder } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const cdpConnection = await driver.createCDPConnection('page');
        await driver.logMutationEvents(cdpConnection, function(event) {
            console.log(event);
        });

        await driver.get('https://the-internet.herokuapp.com/dynamic_controls');
        await driver.findElement({ css: '#checkbox-example button'}).click();
    } finally {
        await driver.quit();
    }
})();
