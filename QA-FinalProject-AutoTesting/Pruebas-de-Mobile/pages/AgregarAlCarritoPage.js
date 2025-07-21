import BasePage from "./BasePage";

export default class AgregarAlCarritoPage extends BasePage {
    get btnAddToCart() {
        return this.driver.$('android=new UiSelector().resourceId("add_to_cart_button")');
    }

    get message() {
        return this.driver.$('android=new UiSelector().resourceId("android:id/message")');
    }

    get btnOk() {
        return this.driver.$('android=new UiSelector().resourceId("android:id/button1")');
    }
    async agregar() {

        await (await this.btnAddToCart).click();

        await (await this.message).waitForDisplayed({ timeout: 10000 });

        const texto = await (await this.message).getText();
        
        await (await this.btnOk).click();

        return texto;
    }
}   