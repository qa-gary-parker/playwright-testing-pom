const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartPopup = page.locator('div[role="alert"]');
  }
}