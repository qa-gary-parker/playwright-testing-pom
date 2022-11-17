const { expect } = require('@playwright/test');

exports.SoftwarePage = class SoftwarePage {
  constructor(page) {
    this.page = page;
    this.secondPage = page.locator('#entry_212470 >> text=2');
    this.addToCart = page.locator('button:has-text("Add to Cart")');
    this.carouselItem = page.locator('.carousel-item');
  }
 
  async clickSecondPage() {
    await this.secondPage.first().click()
  }

  async addFirstItemToCart() {
    await this.carouselItem.first().hover()
    await this.addToCart.first().click()
  }
}

