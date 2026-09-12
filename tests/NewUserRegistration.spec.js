// @ts-check
import { test, expect } from '@playwright/test';
import { createUser } from '../Utils/testdataregister';
const { POManager } = require('../pageobjects/POManager');
/** @type {import('../pageobjects/HomePage').HomePage} */
let homePage;
/** @type {import('../pageobjects/RegisterPage').RegisterPage} */
let registerPage;


const userData = createUser();
const username =  userData.username;
const passwprd =  userData.password;

test.describe('New User Registration', () => {
    let poManager;
        test.beforeEach(async ({ page }) => {
         poManager = new POManager(page);
         homePage = poManager.getHomePage();
         registerPage = poManager.getRegisterPage();

         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         //Click on Register link
         await homePage.clickRegister();
         //Assertion to check if the user is navigated to Register page
         await expect(page.locator('.title')).toHaveText("Signing up is easy!");
    });

test('Successful New User Registration', async ({ page }) => {

    //Fill the form
    
    await registerPage.fillRegisterationForm(userData);


    //await page.pause();
    await registerPage.completeRegisteration();

    await expect(page.locator('.title')).toHaveText("Welcome " + userData.username);

});

test('Mandatory field validation', async ({ page }) => {

    //Click Registration button without entering any of the fields
    await registerPage.completeRegisteration();

    await expect(page.locator('#customer\\.firstName\\.errors')).toHaveText("First name is required.");
    await expect(page.locator('#customer\\.lastName\\.errors')).toHaveText("Last name is required.");
    await expect(page.locator('#customer\\.address\\.street\\.errors')).toHaveText("Address is required.");
    await expect(page.locator('#customer\\.address\\.city\\.errors')).toHaveText("City is required.");
    await expect(page.locator('#customer\\.address\\.state\\.errors')).toHaveText("State is required.");
    await expect(page.locator('#customer\\.address\\.zipCode\\.errors')).toHaveText("Zip Code is required.");
    await expect(page.locator('#customer\\.ssn\\.errors')).toHaveText("Social Security Number is required.");

    await expect(page.locator('#customer\\.username\\.errors')).toHaveText("Username is required.");
    await expect(page.locator('#customer\\.password\\.errors')).toHaveText("Password is required.");
    await expect(page.locator('#repeatedPassword\\.errors')).toHaveText("Password confirmation is required.");

});

});

test('Login', async ({ page }) => {

         homePage.Login(userData);

});