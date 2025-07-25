
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


When('voy al ícono de la papelera con el codigo {string}', async function (codigo) {

await this.basePage.eliminarArticulo(codigo);

});



Then('El artículo {string} ya no debería estar en la lista', async function (codigo) {

  const filaArticulo = this.page.locator(`xpath=//tr[td[text()="${codigo}"]]`);
  await expect(filaArticulo).toHaveCount(0);

});
