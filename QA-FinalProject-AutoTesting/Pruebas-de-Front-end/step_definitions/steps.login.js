const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

require('dotenv').config();

let email = process.env.ERP_EMAIL;
let password = process.env.ERP_PASSWORD;


Given('Que el usuario registrado accede al sistema ERP', async function () {

  await this.loginPage.navigate(this.parameters.baseUrl);

});

When('Ingresa el email y contraseña', async function () {

  await this.loginPage.login(email, password);

});

When('Iniciar sesión', async function () {

  await this.loginPage.clickLoginButton();

});

Then('Debe ver el mensaje {string}', async function (mensaje_bienvenida) {

  const locator = this.page.locator(this.loginPage.selectors.mensajeBienvenida);
  await locator.waitFor();
  const texto = await locator.textContent();
  expect(texto.trim()).toContain(mensaje_bienvenida);

});

When('En el menú izquierdo selecciona Entidades', async function () {

  await this.loginPage.clickEtidades();

});

When('Dentro de Entidades selecciona Artículos', async function () {

  await this.loginPage.clickArticulos();

});

Then('Validar que al menos exista un articulo', async function () {

  const cantidad = await this.loginPage.contarFilasDeTabla();
  expect(cantidad).toBeGreaterThan(0);

});


Then('Validar que la paginación esté correcta y se muestren como máximo 10 artículos', async function () {

  const cantidad = await this.loginPage.contarFilasDeTabla();
  console.log(`Cantidad de filas: ${cantidad}`);
  expect(cantidad).toBeLessThanOrEqual(10);

});

When('Ingresa el email {string} y contraseña {string}', async function (email, password) {

  await this.loginPage.login(email, password);

});


Then('El campo email debe seguir vacío', async function () {

  const campoEmail = this.page.locator('#email');
  const valor = await campoEmail.inputValue();
  expect(valor).toBe('');

});

Then('Debe permanecer en la ruta login', async function () {

  await expect(this.page).toHaveURL(/.*\/login/);

});
