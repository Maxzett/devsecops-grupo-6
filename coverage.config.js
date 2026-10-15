// coverage.config.js
// Configuración compartida de monocart-coverage-reports (MCR).
// La usan el fixture (para ir acumulando el coverage V8 de cada test)
// y el global teardown (para generar el reporte final coverage/lcov.info
// que después lee SonarCloud).

module.exports = {

  name: "Coverage de app.js",

  // Carpeta de salida del reporte (está en .gitignore).
  outputDir: "./coverage",

  reports: [
    // lcov.info: formato que consume SonarCloud
    // (sonar.javascript.lcov.reportPaths=coverage/lcov.info).
    "lcovonly",
    // Resumen por consola para ver el % en local y en el log del CI.
    "console-summary"
  ],

  // Solo medimos app.js (el código de la SPA). Si llegara a ejecutarse
  // cualquier otro script en la página, queda afuera del reporte.
  entryFilter: (entry) => entry.url.includes("app.js"),

  // El archivo se sirve como "/app.js" (http.server --directory app),
  // pero SonarCloud lo espera relativo a la raíz del repo: "app/app.js".
  // Sin este mapeo, el "SF:" del lcov no matchearía con sonar.sources=app.
  sourcePath: (filePath) => {
    if (filePath.endsWith("app.js")) {
      return "app/app.js";
    }
    return filePath;
  }

};
