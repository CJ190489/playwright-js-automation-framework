import { test, expect } from '@playwright/test';
import { createUser } from '../Utils/testdataregister';

const { customtest } = require("../Utils/logindata");

const { POManager } = require('../pageobjects/POManager');
/** @type {import('../pageobjects/HomePage').HomePage} */

let homePage;
let poManager;
let accountsPage;

test.describe('Login', () => {
    
        test.beforeEach(async ({ page }) => {
        poManager = new POManager(page);
        homePage = poManager.getHomePage();
        accountsPage = poManager.getAccountsPage();
 
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         await expect(page.locator('#loginPanel')).toBeEnabled();
         //await page.pause();
    });

    /*customtest('Login', async ({ loggedInPage}) => { 
        
       //await expect(loggedInPage.locator('#showOverview')).toHaveText("Accounts Overview");
    });*/

    customtest('Open New Account', async ({ page , loggedInPage}) => { 
       
      //await expect(loggedInPage.locator('#showOverview')).toHaveText("Accounts Overview");
      await accountsPage.clickOpenNewAccount();
      await accountsPage.OpenNewAccount();
    });
});