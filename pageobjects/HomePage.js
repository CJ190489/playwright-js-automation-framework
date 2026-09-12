const {customtest} = require("../Utils/logindata");


class HomePage{

  constructor(page)
    {
        this.page = page;
        this.register = page.getByRole('link', { name: 'Register' });
        this.txtUserName = page.locator('[name="username"]');
        this.txtPassword = page.locator('[name="password"]');
        this.btnLogin = page.getByRole('button', { name: 'Log In' });
    }

    async clickRegister()
    {
      await this.register.click();
    }  
    
    async Login(username,password)
    {
      await this.txtUserName.fill(username);
      await this.txtPassword.fill(password);
      await this.btnLogin.click();
    } 
}
module.exports = {HomePage};