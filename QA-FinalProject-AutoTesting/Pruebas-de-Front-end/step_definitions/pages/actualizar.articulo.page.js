const BasePage = require("./base.page");
const selectores = require("../../selectors/index.selectors");
class ActualizarArticuloPage extends BasePage {
constructor(page) {
    super(page);
    this.selectors = {
      ...selectores.actualizarArticulo,
        ...selectores.nuevoArticulo,
    };
  }

  
async clickActualizarArticulo() {

  const xpath = `//tr[td[contains(., "iPhone 16")]]//button[contains(@class, "text-indigo-600")]`;
  const botonLapiz = this.page.locator(`xpath=${xpath}`);
  await botonLapiz.waitFor({ state: 'visible' }); 
  await botonLapiz.click();

}

async cambiarSoloPrecio(nuevoPrecio) {

  await this.page.fill(this.selectors.inputPrecio, ''); 
  await this.page.type(this.selectors.inputPrecio, nuevoPrecio);
}
async cambiarSoloCodigo(nuevoCodigo) {
  
  await this.page.fill(this.selectors.inputCodigo, ''); 
  await this.page.type(this.selectors.inputCodigo, nuevoCodigo);
}


}

module.exports = ActualizarArticuloPage