class AppPage {

  constructor(page) {

    this.page = page;

    this.email =
      page.getByLabel("Correo electrónico");

    this.password =
      page.getByLabel("Contraseña");

    this.loginButton =
      page.getByRole("button", {
        name: "Ingresar"
      });

    this.searchTab =
      page.getByRole("button", {
        name: "Buscar usuarios"
      });

    this.searchInput = 
    page.locator("#searchInput");

    this.searchButton = page.getByRole("button", {
      name: "Buscar",
      exact: true
    });

    this.registerTab =
      page.getByRole("button", {
        name: "Registrar usuario"
      });

    this.nameInput = 
    page.locator("#nameInput");

    this.registerEmail = 
    page.locator("#registerEmail");

    this.registerButton = page.getByRole("button", {
    name: "Registrar",
    exact: true
    });

    this.logoutButton =
      page.getByRole("button", {
        name: "Cerrar sesión"
      });
  }


  async login() {

    await this.email.fill("admin@test.com");

    await this.password.fill("Password123");

    await this.loginButton.click();
  }


  async buscar(nombre) {

    await this.searchTab.click();

    await this.searchInput.fill(nombre);

    await this.searchButton.click();
  }


  async registrar(nombre, email) {

    await this.registerTab.click();

    await this.nameInput.fill(nombre);

    await this.registerEmail.fill(email);

    await this.registerButton.click();
  }


  async logout() {

    await this.logoutButton.click();
  }

}


module.exports = {
  AppPage
};