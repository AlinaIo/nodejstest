/**
 * Created by tdt on 20.09.2016.
 */
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var name = "test";
var email = "tdt@tdt.tdt";
var description = "This is a tdt test.";

driver.get('http://127.0.0.1:1185');
driver.findElement(webdriver.By.id('name')).sendKeys(name);
driver.findElement(webdriver.By.id('email')).sendKeys(email);
driver.findElement(webdriver.By.id('description')).sendKeys(description);
driver.findElement(webdriver.By.xpath('/html/body/form/fieldset/input[3]')).click();
driver.wait(function() {
    return driver.isElementPresent(webdriver.By.xpath('/html/body/pre'));
}, 3000);
driver.quit();