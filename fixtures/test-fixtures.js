const base =
  require("@playwright/test");

const {
  AppPage
} = require("../pages/AppPage");

const MCR =
  require("monocart-coverage-reports");

const coverageOptions =
  require("../coverage.config");


const test =
  base.test.extend({

    app: async ({ page, browserName }, use) => {

      // El coverage V8 (page.coverage) solo existe en Chromium.
      // En Firefox salteamos la instrumentación y el test corre normal.
      const esChromium =
        browserName === "chromium";

      if (esChromium) {
        // Arrancamos la captura ANTES de navegar, con resetOnNavigation: false,
        // para no perder la ejecución inicial de app.js al cargar la página.
        await page.coverage.startJSCoverage({
          resetOnNavigation: false
        });
      }

      const app =
        new AppPage(page);

      await page.goto("/");

      await use(app);

      if (esChromium) {
        // Al terminar el test frenamos la captura y acumulamos el coverage.
        // El reporte final se arma en el global teardown (coverage.teardown.js).
        const coverage =
          await page.coverage.stopJSCoverage();

        const mcr = MCR(coverageOptions);
        await mcr.add(coverage);
      }
    }

  });


module.exports = {
  test,
  expect: base.expect
};
