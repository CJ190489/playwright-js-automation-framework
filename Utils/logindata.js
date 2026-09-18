const base = require("@playwright/test");
const {HomePage} = require('../pageobjects/HomePage');

exports.customtest = base.test.extend({
    normalloginData : {
        username: "B" ,
        password:"B"
    },


loggedInPage : async({page,normalloginData} , use) =>{
    const loginPage = new HomePage(page);

    await loginPage.Login(normalloginData.username,normalloginData.password);
    await use(page);
}
});
