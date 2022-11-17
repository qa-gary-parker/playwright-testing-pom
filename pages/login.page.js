const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('id=input-email');
    this.passwordField = page.locator('id=input-password');
    this.loginButton = page.locator('input:has-text("Login")');
  }
 
  async enterEmail(email) {
    await this.emailField.fill(email)
  }

  async enterPassword(password) {
    await this.passwordField.fill(password)
  }

  async clickLogin() {
    await this.loginButton.click()
  }
}