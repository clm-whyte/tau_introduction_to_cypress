const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}'
  },
});


require('@applitools/eyes-cypress')(module);
