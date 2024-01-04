const LoginPageLocators = require('../Locators/LoginPageLocators');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async setTextInUsernameBox(text) {
    await this.page.fill(LoginPageLocators.USERNAME_FIELD, text);
  }

  async setTextInPasswordBox(text) {
    await this.page.fill(LoginPageLocators.PASSWORD_FIELD, text);
  }

  async clickLoginButton() {
    await this.page.click(LoginPageLocators.LOGIN_BUTTON);
  }
}

module.exports = LoginPage;
