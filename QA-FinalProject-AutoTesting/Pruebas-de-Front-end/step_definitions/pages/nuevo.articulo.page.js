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

 
}

module.exports = NuevoArticuloPage;