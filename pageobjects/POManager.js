const {HomePage} =require('./HomePage');
const {RegisterPage} =require('./RegisterPage');
const {Accounts} =require('./Accounts');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.HomePage = new HomePage(this.page);
        this.RegisterPage = new RegisterPage(this.page);
        this.AccountsPage = new Accounts(this.page);
    
    }
    getHomePage()
    {
        return this.HomePage;
    }
    getRegisterPage()
    {
        return this.RegisterPage;
    }

    getAccountsPage()
    {
        return this.AccountsPage;
    }

}

module.exports = { POManager };