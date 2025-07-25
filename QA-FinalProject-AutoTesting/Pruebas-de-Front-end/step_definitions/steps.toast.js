 const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('debería mostrarse un toast de tipo {string} con el texto {string}', async function (tipo, mensajeEsperado) {

  const toast = await this.basePage.getToastByType(tipo);
  await expect(toast).toContainText(mensajeEsperado);
  
});