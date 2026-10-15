const {
  test,
  expect
} = require("../fixtures/test-fixtures");


test(
  "Buscar usuario existente",
  async ({ app, page }) => {

    await app.login();

    await app.buscar("Juan");

    await expect(
      page.getByText("Juan - juan@test.com")
    ).toBeVisible();

  }
);


test(
  "Buscar usuario inexistente muestra mensaje vacío",
  async ({ app, page }) => {

    await app.login();

    await app.buscar("UsuarioQueNoExiste");

    await expect(
      page.getByText("No se encontraron usuarios")
    ).toBeVisible();

  }
);