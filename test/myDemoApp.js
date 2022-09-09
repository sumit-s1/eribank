var allureReporter = require('@wdio/allure-reporter').default;
var assert = require('assert');
var locators = require('./helper/locator.json');
var data = require('./helper/testData.json');
var cartPage = require('./pageobjects/cart').cartScreen
const { expect } = require('chai');


describe('Positive Test cases for myDemoApp', () => {
    it('Verify if the user is able to access the cart from the homescreen', async function () {
        allureReporter.addDescription('User should be able to view the cart from the homescreen');

        await cartPage.cartButton.waitForEnabled();
        await cartPage.cartButton.click();
        console.log("Cart Opened");

        await cartPage.goShopping.waitForEnabled();
        expect(await cartPage.goShopping.isDisplayed()).to.equal(true);
        cartPage.goShopping.click();
        console.log("Empty Cart Verified");
    
    });
});


