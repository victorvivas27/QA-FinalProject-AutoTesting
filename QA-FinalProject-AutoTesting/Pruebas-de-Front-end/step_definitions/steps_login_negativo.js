const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('Estoy en la página de login', async function () {
  await this.loginPage.navigate(this.parameters.baseUrl);
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