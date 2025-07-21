import BasePage from "./BasePage";

// pages/LoginPage.js
export default class LoginPage extends BasePage{
 

  get inputUser() {
    return this.driver.$('android=new UiSelector().resourceId("username_input")');
  }

  get inputPassword() {
    return this.driver.$('android=new UiSelector().resourceId("password_input")');
  }

  get btnLogin() {
    return this.driver.$('android=new UiSelector().resourceId("login_button")');
  }

  get tituloCatalogo() {
    return this.driver.$('android=new UiSelector().resourceId("home_title")');
  }

  async login(user, pass) {
    await this.inputUser.setValue(user);
    await this.inputPassword.setValue(pass);
    await this.btnLogin.click();
    await this.tituloCatalogo.waitForDisplayed({ timeout: 10000 });
  }
}
