
const { createUser } = require('../Utils/testdataregister');

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstname = page.locator('#customer\\.firstName');
    this.lastname = page.locator('#customer\\.lastName');
    this.address = page.locator('#customer\\.address\\.street');
    this.city = page.locator('#customer\\.address\\.city');
    this.state = page.locator('#customer\\.address\\.state');
    this.zipcode = page.locator('#customer\\.address\\.zipCode');
    this.phonenumber = page.locator('#customer\\.phoneNumber');
    this.ssn = page.locator('#customer\\.ssn');
    this.username = page.locator('#customer\\.username');
    this.password = page.locator('#customer\\.password');
    this.confirmPassword = page.locator('#repeatedPassword');
    this.registerbutton = page.getByRole('button', { name: 'Register' });
    }

  async completeRegisteration() {
    await this.registerbutton.click();
  }

  async fillRegisterationForm(userData) {
    await this.firstname.fill(userData.firstName);
    await this.lastname.fill(userData.lastName);
    await this.address.fill(userData.address);
    await this.city.fill(userData.city);
    await this.state.fill(userData.state);
    await this.zipcode.fill(userData.zipCode);
    await this.phonenumber.fill(userData.phone);
    await this.ssn.fill(userData.ssn);
    await this.username.fill(userData.username);
    await this.password.fill(userData.password);
    await this.confirmPassword.fill(userData.password);
  }
}

module.exports = { RegisterPage };