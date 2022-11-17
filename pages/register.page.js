const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('id=input-firstname');
    this.lastNameField = page.locator('id=input-lastname');
    this.emailField = page.locator('id=input-email');
    this.telephoneField = page.locator('id=input-telephone');
    this.passwordField = page.locator('id=input-password');
    this.confirmField = page.locator('id=input-confirm');
    this.privacyPolicyCheckbox = page.locator('.custom-checkbox');
    this.continueButton = page.locator('text=Continue');
    this.accountCreationMessage = page.locator('.page-title');
  }

  async enterDetails(firstName, lastName, email, telephoneNumber, password, confirmPassword) {
    await this.firstNameField.fill(firstName)
    await this.lastNameField.fill(lastName)
    await this.emailField.fill(email)
    await this.telephoneField.fill(telephoneNumber)
    await this.passwordField.fill(password)
    await this.confirmField.fill(confirmPassword)
  } 
  
  async enterFirstName(firstName) {
    await this.firstNameField.fill(firstName)
  }

  async enterLastName(lastName) {
    await this.lastNameField.fill(lastName)
  }

  async enterEmail(email) {
    await this.emailField.fill(email)
  }

  async enterTelephoneNumber(telephoneNumber) {
    await this.telephoneField.fill(telephoneNumber)
  }

  async enterPassword(password) {
    await this.passwordField.fill(password)
  }

  async enterConfirmPassword(confirmPassword) {
    await this.confirmField.fill(confirmPassword)
  }

  async clickPrivacyPolicy() {
    await this.privacyPolicyCheckbox.click()
  }

  async clickContinue() {
    await this.continueButton.click()
  }
  
  async assertAccountCreation(message) {
    await this.privacyPolicyCheckbox.click()
    await this.continueButton.click()
    await this.continueButton.isHidden()
    await expect(this.accountCreationMessage).toHaveText(message)
  }
}