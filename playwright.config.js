const {
  defineConfig,
  devices
} = require("@playwright/test");


module.exports = defineConfig({

  testDir: "./tests",

  // Global teardown: genera coverage/lcov.info al terminar toda la suite.
  globalTeardown: "./coverage.teardown.js",

  timeout: 30000,

  reporter: [
    ["html"],
    ["list"]
  ],

  use: {

    baseURL:
      "http://127.0.0.1:3000",

    screenshot:
      "only-on-failure",

    video:
      "retain-on-failure",

    trace:
      "on",

    viewport: {
      width: 1280,
      height: 720
    }

  },


  projects: [

    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"]
      }
    },

    {
      name: "firefox",

      use: {
        ...devices["Desktop Firefox"]
      }
    }

  ],


  webServer: {

    command:
      "python -m http.server 3000 --directory app",

    url:
      "http://127.0.0.1:3000",

    reuseExistingServer: true

  }

});