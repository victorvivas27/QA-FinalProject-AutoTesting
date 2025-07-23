const { expect } = require("@playwright/test");

class BasePage{
  constructor(page) {
        this.page = page;
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

    // Método adicional útil para esperas
    async waitForSelector(selector, options) {
        await this.page.locator(selector).waitFor(options);
    }

   async validarQueExistaAlMenosUnArticulo() {
    const filas = this.page.locator(`${this.selectors.tablaArticulos} tbody tr`);
    const cantidad = await filas.count();
    expect(cantidad).toBeGreaterThan(0);
}
}

module.exports = BasePage