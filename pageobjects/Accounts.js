const {customtest} = require("../Utils/logindata");


class Accounts{

  constructor(page)
    {
        this.page = page;
        this.linkOpenNewAccount = page.getByRole('link', { name: 'Open New Account' });
        this.selectAccountType = page.locator('#type');
        this.selectAccountId= page.locator('#fromAccountId');
        this.btnOpenNewAccount = page.getByRole('button',{ name: 'Open New Account'});
   }

    async clickOpenNewAccount()
    {
      await this.linkOpenNewAccount.click();
    }
    
    async OpenNewAccount()
    {
      await this.selectAccountType.selectOption('SAVINGS');
            //await this.selectAccountId.selectOption('14454');
      await this.btnOpenNewAccount.click();

    }
    
     
}

module.exports = {Accounts};