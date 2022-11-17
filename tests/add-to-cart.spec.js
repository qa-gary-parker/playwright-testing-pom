// @ts-check
const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { SearchPage } = require('../pages/search.page');
const { SoftwarePage } = require('../pages/software.page');
const { CartPage } = require('../pages/cart.page');

test.beforeEach(async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/?route=account/login')
  });

test('add to cart - software product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const searchPage = new SearchPage(page);
    const softwarePage = new SoftwarePage(page);
    const cartPage = new CartPage(page);

    await loginPage.enterEmail("steve.james@gmail.com")
    await loginPage.enterPassword("Abc123")
    await loginPage.clickLogin()

    await searchPage.selectCategorySoftware()
    await searchPage.searchForItem('iPod')
    await searchPage.clickSearchButton()

    await softwarePage.clickSecondPage()
    await softwarePage.addFirstItemToCart()
    await expect(cartPage.cartPopup).toContainText('Success: You have added iPod Touch to your shopping cart!')
});

