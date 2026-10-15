// coverage.teardown.js
// Global teardown de Playwright: corre UNA sola vez al terminar toda la suite.
// Toma todo el coverage V8 que los tests fueron acumulando (vía el fixture)
// y genera el reporte final en coverage/lcov.info.

const MCR = require("monocart-coverage-reports");
const coverageOptions = require("./coverage.config");

module.exports = async () => {
  const mcr = MCR(coverageOptions);
  await mcr.generate();
};
