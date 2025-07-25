const { expect } = require("@playwright/test");
const selectores = require("../../selectors/index.selectors");

class BasePage {
  constructor(page) {
    this.page = page;
     this.selectors = {
     
        ...selectores.articulos
    };
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fillByRole(roleObj, value) {
    await this.page.getByRole(roleObj.role, { name: roleObj.name }).fill(value);
  }

  async clickBotonPorNombre(nombreBoton) {
    const boton = this.page.getByRole('button', { name: nombreBoton });
    await boton.waitFor({ state: 'visible', timeout: 5000 });
    await boton.click();
  }

  async validarMensajeErrorEsperado(mensajeEsperado) {
    const toast = this.page.locator(this.selectors.toastError);
    await toast.waitFor({ state: 'visible', timeout: 5000 });
    await expect(toast).toContainText(mensajeEsperado);
  }

  /**
    * Espera y devuelve un toast por tipo: 'info', 'error', etc.
    * @param {'info'|'error'|'success'} tipo 
    * @returns Locator del toast
    */
  async getToastByType(tipo = 'info') {
    const selector = `.Toastify__toast--${tipo}[role="alert"]`;
    const toast = this.page.locator(selector);
    await toast.waitFor({ state: 'visible', timeout: 5000 });
    return toast;

  }

  async eliminarArticulo(valor) {

    const selector = this.selectors.getBtnEliminarPorValor(valor);
    const botonPapelera = this.page.locator(selector);
    await botonPapelera.waitFor({ state: 'visible', timeout: 5000 });
    await botonPapelera.click();
    await this.page.waitForTimeout(3000);

  }
}

module.exports = BasePage