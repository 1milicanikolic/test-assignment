const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    env: {
      'VALID_USER_NAME': 'standard_user',
      'VALID_USER_PASSWORD': 'secret_sauce'
    }
  },
  "chromeWebSecurity": false,
  
  
});
