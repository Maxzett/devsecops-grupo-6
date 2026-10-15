// app.js - Lógica de la SPA de gestión de usuarios (extraída de index.html)

/*
 * Base de datos simulada.
 * En una aplicación real estos datos
 * podrían venir de una API.
 */

let users = [
  {
    name: "Juan",
    email: "juan@test.com"
  },
  {
    name: "Maria",
    email: "maria@test.com"
  },
  {
    name: "Pedro",
    email: "pedro@test.com"
  }
];


const loginSection =
  document.getElementById("loginSection");

const panelSection =
  document.getElementById("panelSection");


/*
 * LOGIN
 */

document
  .getElementById("loginButton")
  .addEventListener("click", () => {

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const message =
      document.getElementById("loginMessage");


    if (
      email === "admin@test.com" &&
      password === "Password123"
    ) {

      loginSection.classList.add("hidden");

      panelSection.classList.remove("hidden");

      message.textContent = "";

    } else {

      message.textContent =
        "Correo o contraseña incorrectos";

      message.className = "error";
    }

  });


/*
 * LOGOUT
 */

document
  .getElementById("logoutButton")
  .addEventListener("click", () => {

    panelSection.classList.add("hidden");

    loginSection.classList.remove("hidden");

  });


/*
 * ABRIR BUSQUEDA
 */

document
  .getElementById("searchTab")
  .addEventListener("click", () => {

    document
      .getElementById("searchSection")
      .classList.remove("hidden");

    document
      .getElementById("registerSection")
      .classList.add("hidden");

  });


/*
 * BUSCAR
 */

document
  .getElementById("searchButton")
  .addEventListener("click", () => {

    const value =
      document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const results =
      document.getElementById("searchResults");

    results.innerHTML = "";

    const filtered =
      users.filter(user =>
        user.name.toLowerCase().includes(value)
      );


    if (filtered.length === 0) {

      results.innerHTML =
        "<p>No se encontraron usuarios</p>";

      return;
    }


    filtered.forEach(user => {

      const div =
        document.createElement("div");

      div.className = "user";

      div.textContent =
        user.name + " - " + user.email;

      results.appendChild(div);

    });

  });


/*
 * ABRIR REGISTRO
 */

document
  .getElementById("registerTab")
  .addEventListener("click", () => {

    document
      .getElementById("registerSection")
      .classList.remove("hidden");

    document
      .getElementById("searchSection")
      .classList.add("hidden");

  });


/*
 * REGISTRAR
 */

document
  .getElementById("registerButton")
  .addEventListener("click", () => {

    const name =
      document.getElementById("nameInput").value;

    const email =
      document.getElementById("registerEmail").value;

    const message =
      document.getElementById("registerMessage");


    if (!name || !email) {

      message.textContent =
        "Todos los campos son obligatorios";

      message.className = "error";

      return;
    }


    users.push({
      name: name,
      email: email
    });


    message.textContent =
      "Usuario registrado correctamente";

    message.className = "success";


    document.getElementById("nameInput").value = "";

    document.getElementById("registerEmail").value = "";

  });


/*
 * ---------------------------------------------------------------------------
 * CODE SMELL INTRODUCIDO A PROPOSITO - SOLO PARA LA DEMO DEL VIDEO
 * ---------------------------------------------------------------------------
 * Este bloque rompe el Quality Gate de SonarCloud en el "new code":
 *   - variableSinUsar: variable declarada que no se usa (code smell).
 *   - buscarUsuariosDuplicado(): funcion que NUNCA se llama y que DUPLICA
 *     (> 20 lineas) la logica de busqueda de mas arriba. Al no estar
 *     referenciada ni testeada, baja el coverage del codigo nuevo y
 *     SonarCloud la marca como duplicacion.
 * El fix de la demo elimina todo este bloque.
 * ---------------------------------------------------------------------------
 */

const variableSinUsar = "esto no se usa en ningun lado";

function buscarUsuariosDuplicado() {

  const value =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const results =
    document.getElementById("searchResults");

  results.innerHTML = "";

  const filtered =
    users.filter(user =>
      user.name.toLowerCase().includes(value)
    );

  if (filtered.length === 0) {

    results.innerHTML =
      "<p>No se encontraron usuarios</p>";

    return;
  }

  filtered.forEach(user => {

    const div =
      document.createElement("div");

    div.className = "user";

    div.textContent =
      user.name + " - " + user.email;

    results.appendChild(div);

  });
}
