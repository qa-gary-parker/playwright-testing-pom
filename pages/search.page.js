const { expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {
  constructor(page) {
    this.page = page;
    this.categoryAllCategories = page.locator('#entry_217822 button:has-text("All Categories")');
    this.categorySoftware = page.locator('#entry_217822 >> text=Software');
    this.searchField = page.locator('#entry_217822 [placeholder="Search For Products"]');
    this.searchButton = page.locator('text=Search');
  }
 
  async selectCategorySoftware() {
    await this.categoryAllCategories.click()
    await this.categorySoftware.click()
  }

  async searchForItem(item) {
    await this.searchField.fill(item)
  }

  async clickSearchButton() {
    await this.searchButton.click()
  }
}