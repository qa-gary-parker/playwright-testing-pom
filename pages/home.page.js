const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.field = page.locator('locator');
  }
 
  async action() {
    await this.field.click()
  }
}