# TivixTask
Test Automation for Tivix

## Tech Assigement

**Instal Cypress with npm**
```
npm install cypress --save-dev
```
**Instal TypeScript with npm**
```
npm install --save-dev typescript
```
**Install Cucumber plugin for BDD**
```
npm install @badeball/cypress-cucumber-preprocessor
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
```
**Instal Cypress Esbuild Preprocessor**
```
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
https://github.com/bahmutov/cypress-esbuild-preprocessor - documentation
```
**Configure 'cypress.config.ts' from example setup link above**
```
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
```
**Instal Cypress Testing Library**
```
npm install --save-dev cypress @testing-library/cypress
```
**Add `Cypress Testing Library` in `cypress/support/commands.js`**
```
import '@testing-library/cypress/add-commands';
