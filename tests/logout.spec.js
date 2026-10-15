const {
  test,
  expect
} = require("../fixtures/test-fixtures");


test(
  "Logout vuelve a la pantalla de login",
  async ({ app, page }) => {

    await app.login();

    await expect(
      page.getByText("Panel principal")
    ).toBeVisible();

    await app.logout();

    await expect(
      page.getByRole("heading", {
        name: "Iniciar sesión"
      })
    ).toBeVisible();

  }
);
