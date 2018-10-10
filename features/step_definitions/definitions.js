const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

let { until } = require('selenium-webdriver')
let defaultuntiltime = 60*1000;

Given(/^Browsing "([^"]*)"$/, function(url) {
    return driver.get(url);
});

When("Finding the keep in touch form", function () {
    return driver.findElement({ xpath: '//*[@id="home-sign-up"]' });
});

Then("I sould fill the form and submit", function () {
    driver.findElement( { xpath: '//*[@id="footer_email"]' })
         .sendKeys( "chris@chris.com");
    driver.findElement({ xpath: '//*[@id="footer_nickname"]' })
        .sendKeys("Chris");
    driver.findElement({ xpath: '//*[@id="footer_i_am_a"]/option[2]' }).click();
    driver.findElement( {xpath : '//*[@id="footer-submit-button"]'}).click();  
});

Then(/^search result should contain "([^"]*)"$/, function (keyword) {
    let result = driver.wait(until.elementLocated({ xpath : '//*[@id="cta-thanks-text"]' }), defaultuntiltime);
    // console.log(result.getText()); has a small icon
    return result.getText().then((text) => {
        return assert.notStrictEqual(text, keyword);
    })
});

Then(/^Then search result should not contain "([^"]*)"$/, function (not_desired) {
 let title = driver.findElement({ tagName: 'title' });
    return title.getText().then((text) => {
        return assert.notEqual(text, not_desired);
    }) 
});

