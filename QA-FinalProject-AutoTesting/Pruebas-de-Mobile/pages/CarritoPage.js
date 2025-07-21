import BasePage from "./BasePage";

export default class CarritoPage extends BasePage {
  get btnCarrito() {
    return this.driver.$('android=new UiSelector().text("Carrito (1)")');
  }

  get totalPrecio() {
    return this.driver.$('android=new UiSelector().resourceId("total_price_text")');
  }

  async abrir() {
    await (await this.btnCarrito).click();
  }

  async obtenerTotal() {

    await (await this.totalPrecio).waitForDisplayed();
    
    return await (await this.totalPrecio).getText();
  }
}