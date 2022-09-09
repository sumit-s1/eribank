var allureReporter = require('@wdio/allure-reporter').default;
var assert = require('assert');
var locators = require('./helper/locator.json');
var data = require('./helper/testData.json');
var cartScreen = require('./pageobjects/cart')
const { expect } = require('chai');

var timeOut = 10000
var platform

//This will check the platform and based on that it will fetch the appropriate selector
if(driver.isAndroid){
    platform = 'android'
}
else{
    platform = 'iOS'
}


// describe('Positive Test cases for myDemoApp', () => {
// it('Verify if the user is able to access the cart from the homescreen', async function () {
//     allureReporter.addDescription('User should be able to view the cart from the homescreen');

//     var cart = await $(locators.myDemoApp[platform].viewCart)
//     await cart.waitForDisplayed({ timeout: timeOut });
//     cart.click(); //click on view cart button
//     console.log("Cart Opened")

//     // Verify that the cart is displayed
//     var cartPage = await $(locators.myDemoApp[platform].emptyCart);
//     console.log("Cart Check done")
//     await cartPage.waitForDisplayed({ timeout: timeOut });
//     let isTrue = Boolean("true");
//     assert.equal(await cartPage.isExisting(), isTrue);

//     //Return to shopping screen
//     cartPage.click();
// });
// });


describe('Positive Test cases for myDemoApp', () => {
    it('Verify if the user is able to access the cart from the homescreen', async function () {
        allureReporter.addDescription('User should be able to view the cart from the homescreen');

        cartScreen.cartButton.waitForEnabled();
        cartScreen.cartButton.click();
        console.log("Cart Opened");

        cartScreen.goShopping.waitForEnabled();
        expect(await cartScreen.goShopping.isDisplayed()).to.equal(true);
        cartScreen.goShopping.click();
    
        // // Verify that the cart is displayed
        // var cartPage = await $(locators.myDemoApp[platform].emptyCart);
        // console.log("Cart Check done")
        // await cartPage.waitForDisplayed({ timeout: timeOut });
        // let isTrue = Boolean("true");
        // assert.equal(await cartPage.isExisting(), isTrue);
    
        // //Return to shopping screen
        // cartPage.click();
    });
});


