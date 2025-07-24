const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


When('voy al icono de lápiz del artículo', async function () {

  await this.actualizarArticuloPage.clickActualizarArticulo();

});


Then('no debería estar en la ruta de edición', async function () {

  await expect(this.page).not.toHaveURL(/\/articulos\/\d+\/editar/);

});


When('modifica el campo Precio de venta a {string}', async function (precio) {

  await this.actualizarArticuloPage.cambiarSoloPrecio(precio);

});

When('podemos {string} la actualización', async function (nombreBoton) {

  await this.actualizarArticuloPage.clickBotonPorNombre(nombreBoton);

});

Then('debería ver que el artículo {string} aún tiene el precio original {string}', async function (titulo, precioEsperado) {

  const fila = this.page.locator(`//tr[td[contains(., "${titulo}")]]`);
  const celdaPrecio = fila.locator('td').nth(4);
  await expect(celdaPrecio).toBeVisible();
  await expect(celdaPrecio).toContainText(precioEsperado);

});

When('modifica el campo Código a {string}', async function (codigo) {

  await this.actualizarArticuloPage.cambiarSoloCodigo(codigo);

});


Then('debería mostrarse un toast de tipo {string} con el texto {string}', async function (tipo, mensajeEsperado) {

  const toast = await this.actualizarArticuloPage.getToastByType(tipo);

  await expect(toast).toContainText(mensajeEsperado);
});