const BasePage = require("./base.page");
const selectores = require("../../selectors/index.selectors");
class ActualizarArticuloPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...selectores.actualizarArticulo,
      ...selectores.nuevoArticulo,
      ...selectores.articulos
    };
  }


  async clickActualizarArticuloPorCodigo(codigo) {
    const selector = this.selectors.getBtnEditarPorCodigo(codigo);
    const botonLapiz = this.page.locator(selector);
    await botonLapiz.waitFor({ state: 'visible', timeout: 5000 });
    await botonLapiz.click();
  }



  async cambiarSoloPrecio(nuevoPrecio) {

    await this.page.fill(this.selectors.inputPrecio, '');
    await this.page.type(this.selectors.inputPrecio, nuevoPrecio);
  }
  async cambiarSoloStock(nuevoStock) {

    await this.page.fill(this.selectors. inputStock, '');
    await this.page.type(this.selectors. inputStock, nuevoStock);
  }
}

module.exports = ActualizarArticuloPage