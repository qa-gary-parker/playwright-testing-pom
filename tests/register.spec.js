// @ts-check
const { test } = require('../lambdatest-setup')
const { RegisterPage } = require('../pages/register.page');

test.beforeEach(async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/?route=account/register')
});

test.afterEach(async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.assertAccountCreation('Your Account Has Been Created!')
});

test('register new user - steve', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.enterFirstName('steve')
  await registerPage.enterLastName('james')
  await registerPage.enterEmail('steve.james' + Date.now() + '@gmail.com')
  await registerPage.enterTelephoneNumber('07864538876')
  await registerPage.enterPassword('Abc123')
  await registerPage.enterConfirmPassword('Abc123')
  });

test('register new user - diane', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.enterFirstName('diane')
  await registerPage.enterLastName('peters')
  await registerPage.enterEmail('diane.peters' + Date.now() + '@gmail.com')
  await registerPage.enterTelephoneNumber('07874638885')
  await registerPage.enterPassword('Def£$%')
  await registerPage.enterConfirmPassword('Def£$%')
});