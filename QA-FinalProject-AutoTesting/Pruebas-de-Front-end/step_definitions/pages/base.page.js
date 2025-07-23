const { expect } = require("@playwright/test");

class BasePage {
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
}

module.exports = BasePage