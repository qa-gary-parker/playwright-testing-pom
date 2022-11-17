const { devices } = require('@playwright/test')

// Playwright config to run tests on LambdaTest platform and local
const config = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 60000,
  use: {
    viewport: null,
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
  },
  projects: [
    // -- LambdaTest Config --
    // name in the format: browserName:browserVersion:platform@lambdatest
    // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig
    {
      name: 'chrome:latest:MacOS Big sur@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      }
    },
    {
      name: 'pw-webkit:latest:MacOS Big sur@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      }
    }

    // Config for running tests in local
    // {
    //   name: "chrome",
    //   use: {
    //     browserName: "chromium",
    //     channel: "chrome",
    //   },
    // },
    // {
    //   name: "safari",
    //   use: {
    //     browserName: "webkit",
    //     viewport: { width: 1200, height: 750 },
    //   },
    // },
    // {
    //   name: "firefox",
    //   use: {
    //     browserName: "firefox",
    //     viewport: { width: 800, height: 600 },
    //   },
    // },
    // // Test in mobile viewport.
    // {
    //   name: "chrome@pixel5",
    //   use: {
    //     ...devices['iPhone 12 Pro Max'],
    //   }
    // },
  ]
}

module.exports = config