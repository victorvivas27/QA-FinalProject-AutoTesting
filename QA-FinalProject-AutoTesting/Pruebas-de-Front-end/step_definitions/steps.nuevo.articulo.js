
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('vamos a {string}', async function (nombreBoton) {

  await this.nuevoArticuloPage.clickBotonPorNombre(nombreBoton);

});

When('completa el formulario con los siguientes datos:', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.nuevoArticuloPage.completarFormulario({
    codigo: data['Código (SKU)'],
    stock: data['Stock Actual'],
    precio: data['Precio de venta'],
    descripcion: data['Descripción'],
    costo: data['Costo'],
    unidad_medida: data['Unidad de Medida'],
  });
});

When('Campos correctos {string}', async function (nombreBoton) {

  await this.nuevoArticuloPage.clickBotonPorNombre(nombreBoton);

});

Then('debería redirigirse al listado de artículos', async function () {
  await expect(this.page).toHaveURL(/.*\/articulos/);
});

Then('debería aparecer un modal con el mensaje {string}', async function (mensajeEsperado) {

  const toast = await this.nuevoArticuloPage.obtenerToastConfirmacion();
  await expect(toast).toContainText(mensajeEsperado);
});


Then('deberia permanecer en la ruta articulos nuevo', async function () {
  await expect(this.page).toHaveURL(/\/articulos\/nuevo$/);
});

Then('deberían mostrarse errores de validación requeridos', async function () {
  const errores = this.page.locator('.Mui-error, .text-red-500');
  await expect(errores.count()).resolves.toBeGreaterThan(0);
});

Then('NO debería guardarse el artículo', async function () {

  const urlAntes = this.page.url();
  await this.page.waitForTimeout(1000);
  const urlDespues = this.page.url();
  expect(urlAntes).toBe(urlDespues);
});

Then(/^⚠️  (.+)$/, async function (comentario) {
  this.attach(`⚠️  ${comentario}`, 'text/plain');
});

