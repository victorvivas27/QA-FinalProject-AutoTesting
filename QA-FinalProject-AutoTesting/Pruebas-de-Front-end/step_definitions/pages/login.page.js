const BasePage = require("./base.page");
const selectores = require('../../selectors/index.selectors')


class LoginPage extends BasePage {

  constructor(page) {
    super(page);
    this.selectors = {
      ...selectores.login,
      ...selectores.articulos
    };
  }

  async enterEmail(email) {
    await this.fillByRole(this.selectors.inputEmail, email);
  }

  async enterPassword(password) {
    await this.fillByRole(this.selectors.inputPassword, password);
  }

  async clickLoginButton() {
    await this.click(this.selectors.buttonLogin);
  }

  async clickEtidades() {
    await this.click(this.selectors.btnEntidades);
  }


  async clickArticulos() {
    await this.click(this.selectors.btnArticulos);
  }


  async tituloListaArticulos() {
    await this.waitForSelector(this.selectors.tituloListaArticulos);
  }

  async contarFilasDeTabla() {
    const filas = this.page.locator(`${this.selectors.tablaArticulos} tbody tr`);
    await filas.first().waitFor({ state: 'visible', timeout: 5000 });
    return await filas.count();
  }
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = LoginPage;