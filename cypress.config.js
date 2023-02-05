const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  watchForFileChanges: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //ideas of event listeners:
      // - on('task', { ... })  // https://on.cypress.io/task 
      // - on('file:preprocessor', { ... })  // https://on.cypress.io/file-preprocessor
      // - on('after:spec', { ... })  // https://on.cypress.io/after-spec
      
    },
  },
  
});
