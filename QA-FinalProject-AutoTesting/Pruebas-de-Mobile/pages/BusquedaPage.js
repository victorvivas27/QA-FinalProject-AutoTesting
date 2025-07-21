import BasePage from "./BasePage";

export default class BusquedaPage extends BasePage{

 
    get inputBusqueda() {
        return this.driver.$('android=new UiSelector().resourceId("search_input")');
    }
    get btnTablet() {
        return  this.driver.$('android=new UiSelector().resourceId("product_item_5")');
    }

    get nombreProducto(){
         return this.driver.$('android=new UiSelector().resourceId("product_detail_name")');
    }

    async buscarProducto(producto) {

        await this.inputBusqueda.setValue(producto);

        await this.btnTablet.click();

        await this.nombreProducto.waitForDisplayed({ timeout: 10000 });
    }
}