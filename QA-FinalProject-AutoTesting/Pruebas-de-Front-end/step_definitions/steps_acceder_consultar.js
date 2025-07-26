const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

require('dotenv').config();

let email = process.env.ERP_EMAIL;
let password = process.env.ERP_PASSWORD;


Given('Que el usuario registrado accede al sistema ERP', async function () {

  await this.loginPage.navigate(this.parameters.baseUrl);

  await this.loginPage.login(email, password);

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



Then('Debe mostrarse el título {string}', async function (tituloEsperado) {

  const titulo = this.page.locator('h1', { hasText: tituloEsperado });
  await expect(titulo).toBeVisible();

});

Then('Validar que la paginación esté correcta y se muestren como máximo 10 artículos', async function () {

  const cantidad = await this.loginPage.contarFilasDeTabla();
  console.log(`Cantidad de filas: ${cantidad}`);
  expect(cantidad).toBeLessThanOrEqual(10);

});


