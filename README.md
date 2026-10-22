# DevSecOps Grupo 6 - Testing Automatizado con Playwright

[![Playwright Tests CI](https://github.com/devsecops-grupo-6-utn/devsecops-grupo-6/actions/workflows/ci.yml/badge.svg)](https://github.com/devsecops-grupo-6-utn/devsecops-grupo-6/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=devsecops-grupo-6-utn_devsecops-grupo-6&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=devsecops-grupo-6-utn_devsecops-grupo-6)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=devsecops-grupo-6-utn_devsecops-grupo-6&metric=coverage)](https://sonarcloud.io/summary/new_code?id=devsecops-grupo-6-utn_devsecops-grupo-6)

Proyecto desarrollado para las actividades de **Testing Automatizado con Playwright** y **DevSecOps**.

El objetivo es aplicar técnicas de testing End-to-End sobre una **Single Page Application (SPA)**, incorporando conceptos de QA adaptativo e inteligencia artificial generativa, e integrarlas en un pipeline de CI con análisis de calidad y seguridad (**GitHub Actions + SonarCloud + Dependabot**).

---

## 1. Descripción del proyecto

La aplicación utilizada para las pruebas es una SPA sencilla de gestión de usuarios.

La aplicación permite:

* Iniciar sesión.
* Buscar usuarios.
* Registrar nuevos usuarios.
* Cerrar sesión.

La aplicación fue creada exclusivamente para esta actividad y no depende de ningún proyecto externo.

Los tests automatizados se realizan utilizando **Playwright**.

---

## 2. Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* Node.js
* Playwright
* Playwright Test
* monocart-coverage-reports (coverage V8)
* GitHub Actions
* SonarCloud (SonarQube Cloud)
* Dependabot

---

## 3. Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

### Node.js

Se recomienda utilizar una versión LTS de Node.js.

Para comprobar si está instalado:

```bash
node --version
```

También se necesita npm:

```bash
npm --version
```

### Python

Playwright levanta la SPA con el servidor estático de Python (`python -m http.server`), así que también es necesario tener Python 3 instalado y disponible como `python`:

```bash
python --version
```

---

## 4. Instalación

Clonar el proyecto:

```bash
git clone https://github.com/devsecops-grupo-6-utn/devsecops-grupo-6.git
```

Ingresar desde una terminal a la carpeta principal:

```bash
cd devsecops-grupo-6
```

Instalar las dependencias:

```bash
npm install
```

Instalar los navegadores utilizados por Playwright:

```bash
npx playwright install
```

Una vez finalizada la instalación, el proyecto está listo para ejecutar.

---

# 5. Estructura del proyecto

```text
devsecops-grupo-6/
│
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── dependabot.yml
│
├── app/
│   ├── index.html
│   └── app.js
│
├── pages/
│   └── AppPage.js
│
├── fixtures/
│   └── test-fixtures.js
│
├── tests/
│   ├── login.spec.js
│   ├── busqueda.spec.js
│   ├── registro.spec.js
│   └── logout.spec.js
│
├── docs/
│   ├── SPEC.md
│   └── IA.md
│
├── coverage.config.js
├── coverage.teardown.js
├── sonar-project.properties
├── package.json
├── playwright.config.js
└── README.md
```

### `app/`

Contiene la SPA que será utilizada como sistema bajo prueba.

* `index.html`: estructura y estilos de la aplicación.
* `app.js`: lógica de la SPA (login, búsqueda, registro y logout). Es el archivo sobre el que se mide el coverage.

### `pages/`

Contiene el **Page Object Model**.

`AppPage.js` centraliza los elementos y acciones principales de la aplicación.

### `fixtures/`

Contiene las fixtures utilizadas por los tests.

La fixture permite crear y preparar una instancia de `AppPage` para reutilizarla en los diferentes casos de prueba. En Chromium, además, captura el coverage de `app.js` durante cada test.

### `tests/`

Contiene los casos de prueba automatizados.

Actualmente existen cuatro grupos:

* `login.spec.js`
* `busqueda.spec.js`
* `registro.spec.js`
* `logout.spec.js`

### `.github/`

* `workflows/ci.yml`: pipeline de integración continua (ver sección 21).
* `dependabot.yml`: configuración de Dependabot (ver sección 23).

### `coverage.config.js` y `coverage.teardown.js`

Configuración de monocart-coverage-reports y global teardown que genera `coverage/lcov.info` al terminar la suite (ver sección 22).

### `sonar-project.properties`

Configuración del análisis de SonarCloud: proyecto, carpetas de código y tests, ruta del reporte de coverage y exclusiones.

### `docs/`

Contiene documentación relacionada con la actividad:

* `SPEC.md`: especificación de testing.
* `IA.md`: explicación de QA adaptativo e inteligencia artificial.

### `playwright.config.js`

Contiene la configuración de Playwright:

* navegadores;
* viewport;
* servidor local;
* screenshots;
* videos;
* traces;
* reporte HTML;
* global teardown de coverage.

---

# 6. Credenciales de prueba

La aplicación posee un usuario de prueba.

```text
Correo:
admin@test.com

Contraseña:
Password123
```

Estas credenciales se utilizan en los tests automatizados.

---

# 7. Ejecutar los tests

Para ejecutar todos los tests:

```bash
npm test
```

Playwright ejecutará automáticamente los casos definidos en la carpeta `tests`.

Los tests se ejecutan utilizando los navegadores configurados en `playwright.config.js`.

Actualmente:

* Chromium
* Firefox

Para ejecutar solo en Chromium (el único navegador donde se mide coverage):

```bash
npm run test:coverage
```

---

# 8. Ejecutar los tests con el navegador visible

Para observar cómo Playwright realiza las acciones:

```bash
npm run test:headed
```

Se abrirá el navegador y podrán observar acciones como:

1. Abrir la aplicación.
2. Completar el formulario.
3. Presionar botones.
4. Buscar usuarios.
5. Registrar usuarios.
6. Verificar resultados.

Esta opción es especialmente útil para realizar la demostración durante la presentación.

---

# 9. Reporte HTML

Después de ejecutar los tests se genera un reporte HTML.

Para abrirlo:

```bash
npm run report
```

El reporte permite visualizar:

* tests exitosos;
* tests fallidos;
* duración;
* navegador utilizado;
* errores;
* screenshots;
* traces;
* videos cuando corresponda.

El reporte sirve como evidencia de ejecución para la actividad.

---

# 10. Screenshots y videos

La configuración de Playwright utiliza:

```js
screenshot: "only-on-failure"
```

Por lo tanto, se guarda una captura de pantalla cuando un test falla.

También se utiliza:

```js
video: "retain-on-failure"
```

Esto permite conservar el video de la ejecución cuando ocurre un fallo.

Los archivos generados se encuentran dentro de:

```text
test-results/
```

---

# 11. Trace Viewer

Playwright también utiliza Trace Viewer para analizar errores.

La configuración utiliza:

```js
trace: "on"
```

Por lo tanto, Playwright genera un trace para cada test, falle o no.

El trace permite analizar:

* acciones realizadas;
* elementos utilizados;
* DOM;
* screenshots;
* tiempos;
* navegación;
* errores.

Para visualizar un trace:

```bash
npx playwright show-trace ruta/al/trace.zip
```

La ruta exacta puede consultarse dentro de la carpeta `test-results`.

---

# 12. Tests implementados

## Login

Archivo:

```text
tests/login.spec.js
```

Incluye:

### Login exitoso

Utiliza:

```text
admin@test.com
Password123
```

El resultado esperado es que aparezca el:

```text
Panel principal
```

### Login incorrecto

Se utilizan credenciales incorrectas.

El resultado esperado es:

```text
Correo o contraseña incorrectos
```

---

## Búsqueda

Archivo:

```text
tests/busqueda.spec.js
```

El test inicia sesión y busca:

```text
Juan
```

El resultado esperado es:

```text
Juan - juan@test.com
```

---

## Registro

Archivo:

```text
tests/registro.spec.js
```

El test inicia sesión y registra un nuevo usuario.

Por ejemplo:

```text
Nombre: Carlos
Correo: carlos@test.com
```

El resultado esperado es:

```text
Usuario registrado correctamente
```

---

## Logout

Archivo:

```text
tests/logout.spec.js
```

El test inicia sesión, verifica que aparezca el `Panel principal` y luego cierra sesión.

El resultado esperado es volver a la pantalla con el encabezado:

```text
Iniciar sesión
```

---

# 13. Page Object Model

El proyecto utiliza el patrón **Page Object Model (POM)**.

Los elementos y acciones de la aplicación se encuentran centralizados en:

```text
pages/AppPage.js
```

Por ejemplo:

```js
async login() {

  await this.email.fill("admin@test.com");

  await this.password.fill("Password123");

  await this.loginButton.click();

}
```

Esto evita repetir los mismos selectores y acciones en diferentes tests.

Además, si cambia la interfaz, se puede modificar el selector en un único lugar.

---

# 14. Locators

Los tests utilizan los Locators de Playwright.

Por ejemplo:

```js
page.getByRole("button", {
  name: "Ingresar"
});
```

También se utilizan:

```js
page.getByLabel("Correo electrónico");
```

y:

```js
page.getByText("Panel principal");
```

Estos mecanismos permiten utilizar selectores más descriptivos y resistentes que depender únicamente de la estructura del HTML.

---

# 15. Fixtures

El proyecto utiliza una fixture personalizada:

```text
fixtures/test-fixtures.js
```

Esta fixture crea automáticamente una instancia de:

```text
AppPage
```

y navega hasta la aplicación antes de ejecutar el test.

De esta manera, los tests pueden utilizar directamente:

```js
async ({ app, page }) => {
```

sin repetir la configuración inicial.

---

# 16. QA adaptativo e inteligencia artificial

La actividad también analiza la utilización de inteligencia artificial generativa aplicada al testing.

Un LLM puede utilizarse como asistente para:

* generar casos de prueba;
* analizar errores;
* sugerir nuevos casos;
* detectar escenarios faltantes;
* adaptar selectores;
* analizar cambios en la interfaz.

Por ejemplo, si un botón cambia de:

```text
Ingresar
```

a:

```text
Acceder
```

un modelo de lenguaje podría analizar el DOM actualizado y sugerir adaptar:

```js
page.getByRole("button", {
  name: "Ingresar"
});
```

a:

```js
page.getByRole("button", {
  name: "Acceder"
});
```

La modificación debe ser revisada por el desarrollador o integrante de QA antes de incorporarla al proyecto.

---

# 17. ¿Por qué una SPA presenta desafíos?

Una SPA modifica el contenido de la página dinámicamente utilizando JavaScript.

Por este motivo:

* el DOM puede cambiar sin recargar la página;
* algunos elementos aparecen de forma asincrónica;
* las rutas pueden ser administradas del lado del cliente;
* algunos selectores pueden volverse frágiles.

Playwright permite afrontar estos problemas mediante funcionalidades como:

* Locators;
* auto-waiting;
* Page Object Model;
* fixtures;
* Trace Viewer.

---

# 18. Navegadores y viewport

Los tests se ejecutan actualmente sobre:

```text
Chromium
Firefox
```

El viewport utilizado es:

```text
1280 x 720
```

Esta configuración se encuentra en:

```text
playwright.config.js
```

---

# 19. Flujo completo de ejecución

Para ejecutar el proyecto desde cero:

```bash
npm install
```

Después:

```bash
npx playwright install
```

Ejecutar los tests:

```bash
npm test
```

Observar los tests en el navegador:

```bash
npm run test:headed
```

Abrir el reporte:

```bash
npm run report
```

---

# 20. Resultado esperado

Si todos los tests funcionan correctamente, Playwright mostrará los casos como exitosos.

Los principales flujos comprobados son:

```text
LOGIN
  ↓
Autenticación correcta/incorrecta

BÚSQUEDA
  ↓
Buscar usuario
  ↓
Mostrar resultado

REGISTRO
  ↓
Completar formulario
  ↓
Crear usuario
  ↓
Mostrar confirmación

LOGOUT
  ↓
Cerrar sesión
  ↓
Volver al login
```

De esta manera, el proyecto demuestra el uso de Playwright para testing End-to-End sobre una SPA y permite generar evidencia mediante el reporte HTML, screenshots, videos y Trace Viewer.

---

# 21. Integración continua (GitHub Actions)

El workflow `.github/workflows/ci.yml` se ejecuta al abrir, actualizar o reabrir un **Pull Request hacia `main`**.

Pasos del job `Run Playwright Tests`:

1. Checkout del repositorio con todo el historial (`fetch-depth: 0`, necesario para SonarCloud).
2. Configuración de Node.js 20.
3. Cache de las dependencias de npm.
4. `npm ci`.
5. `npx playwright install --with-deps` (Chromium y Firefox).
6. `npm test`: ejecuta la suite y genera `coverage/lcov.info`.
7. Análisis de SonarCloud, esperando el veredicto del Quality Gate.
8. Publicación del reporte HTML de Playwright como artifact (`playwright-report`, retenido 14 días), incluso si fallaron los tests o el gate.

`Run Playwright Tests` es un check requerido por la protección de la rama `main`: si falla, no se puede mergear el PR.

---

# 22. Coverage

El coverage de `app/app.js` se mide con la API de coverage V8 de Playwright y **monocart-coverage-reports**:

* La fixture (`fixtures/test-fixtures.js`) inicia la captura antes de navegar y la acumula al terminar cada test. Solo funciona en **Chromium**; en Firefox los tests corren sin instrumentar.
* El global teardown (`coverage.teardown.js`) genera el reporte final al terminar toda la suite.
* `coverage.config.js` filtra solo `app.js` y mapea su ruta a `app/app.js` para que coincida con `sonar.sources`.

Salida:

```text
coverage/lcov.info
```

Además, se imprime un resumen del porcentaje por consola (también visible en el log del CI).

---

# 23. Seguridad y calidad: SonarCloud y Dependabot

### SonarCloud

El análisis se configura en `sonar-project.properties` y se ejecuta en el CI usando el secret `SONAR_TOKEN`.

El job espera el resultado del **Quality Gate** (`sonar.qualitygate.wait=true`) y falla si no pasa, por ejemplo por:

* bugs o vulnerabilidades nuevas;
* coverage del código nuevo menor al 80%.

Como el check es requerido, un Quality Gate fallido bloquea el merge del PR.

### Dependabot

`.github/dependabot.yml` revisa semanalmente:

* las dependencias de npm (`package.json` / `package-lock.json`);
* las versiones de las GitHub Actions usadas en los workflows.

Cuando encuentra actualizaciones (incluidas las que corrigen vulnerabilidades conocidas), abre PRs automáticos, que pasan por el mismo pipeline de CI.

