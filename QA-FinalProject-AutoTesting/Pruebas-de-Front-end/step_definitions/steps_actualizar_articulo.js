const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


When('voy al ícono del lápiz con el codigo {string}', async function (codigo) {

  await this.actualizarArticuloPage.clickActualizarArticuloPorCodigo(codigo);

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

When('modifica el campo Stock Actual a {string}', async function (stock) {

  await this.actualizarArticuloPage.cambiarSoloStock(stock);

});