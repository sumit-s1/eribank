var allureReporter = require('@wdio/allure-reporter').default;
var assert = require('assert');
var locators = require('./helper/locator.json');
var data = require('./helper/testData.json');

var timeOut = 10000
var platform

//This will check the platform and based on that it will fetch the appropriate selector
if(driver.isAndroid){
    platform = 'android'
}
else{
    platform = 'iOS'
}


describe('Positive Test cases for EriBank', () => {
it('Successful Sign In To The Account', async function () {
    allureReporter.addDescription('User should be able to login to the account and verify the home page');

    //Check if any error prompt is there after the app launch
    var errPrompt = await $(locators.eribank[platform].errPrompt)
    if (await errPrompt.isExisting()){
        errPrompt.click();
        console.log("Prompt acknowledged")
    }
    
    //Enter the username
    var userName = await $(locators.eribank[platform].userName); 
    await userName.waitForDisplayed({ timeout: timeOut });
    userName.setValue(data.eriBankLogin.userName)
    console.log("Username Set")

    // Enter the password
    var pwd = await $(locators.eribank[platform].pwd);
    await pwd.waitForDisplayed({ timeout: timeOut });
    pwd.setValue(data.eriBankLogin.pwd); 
    console.log("Password Entered")

    // Perform Login
    var loginButton = await $(locators.eribank[platform].loginButton); 
    await loginButton.waitForDisplayed({ timeout: timeOut });
    loginButton.click(); //click on login button
    console.log("Login Done")
    
    // Check the text on Homepage
    var expectedText = data.eriBankLogin.homeText
    var verifyHomePage = await $(locators.eribank[platform].homePageText); 
    await verifyHomePage.waitForDisplayed({ timeout: timeOut });
    var actualText = await verifyHomePage.getText(); 
    assert.equal(actualText, expectedText); 

    // Perform logout
    var logOutButton = await $(locators.eribank[platform].logOutButton);
    await logOutButton.waitForDisplayed({ timeout: timeOut });
    logOutButton.click();
    console.log("Logout Done")
});
});


describe('Negative Test cases for EriBank', () => {
it('Unsuccessful Sign In To The Account', async function () {
    allureReporter.addDescription('User should not be able to login to the account on incorrect password');
    
     //Check if any error prompt is there after the app launch
    var errPrompt = await $(locators.eribank[platform].errPrompt)
    if (await errPrompt.isExisting()){
        errPrompt.click();
        console.log("Prompt acknowledged")
    }

    //Enter the username
    var userName = await $(locators.eribank[platform].userName); 
    await userName.waitForDisplayed({ timeout: timeOut });
    userName.setValue(data.eriBankLogin.userName)
    console.log("Username Set")

    var pwd = await $(locators.eribank[platform].pwd);
    await pwd.waitForDisplayed({ timeout: timeOut });
    pwd.setValue(data.eriBankLogin.incorrectPwd); //type incorrect password
    console.log("Password Entered")

    var loginButton = await $(locators.eribank[platform].loginButton);
    await loginButton.waitForDisplayed({ timeout: timeOut });
    loginButton.click(); //click on login button
    console.log("Login Attempted")

    // Verify that the homepage is not displayed
    var logOutButton = await $(locators.eribank[platform].logOutButton);
    let isFalse = Boolean("");
    assert.equal(await logOutButton.isExisting(), isFalse);
});
});
