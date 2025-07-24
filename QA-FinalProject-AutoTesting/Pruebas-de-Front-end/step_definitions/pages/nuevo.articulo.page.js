const BasePage = require("./base.page");
const selectores = require("../../selectors/index.selectors");

class NuevoArticuloPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...selectores.nuevoArticulo,
    };
  }
  async completarFormulario({ codigo, stock, precio, descripcion, costo, unidad_medida }) {
    if (codigo !== undefined) {
      await this.page.fill(this.selectors.inputCodigo, codigo);
    }
    await this.page.fill(this.selectors.inputStock, stock.toString());
    await this.page.fill(this.selectors.inputPrecio, precio.toString());
    if (descripcion !== undefined) {
      await this.page.fill(this.selectors.inputDescripcion, descripcion);
    }
    await this.page.fill(this.selectors.inputCosto, costo.toString());
    await this.page.selectOption(this.selectors.select, { label: unidad_medida });
  }

  async obtenerToastConfirmacion() {

    const toast = this.page.locator(this.selectors.toastConfirmacion);
    await toast.waitFor({ state: 'visible', timeout: 5000 });
    return toast;

  }
}

module.exports = NuevoArticuloPage;