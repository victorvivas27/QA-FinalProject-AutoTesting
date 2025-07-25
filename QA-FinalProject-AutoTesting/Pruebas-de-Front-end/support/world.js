// support/world.js
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
setDefaultTimeout(10000);
class PlaywrightWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.context = null;
    this.page = null;
    this.testData = {};

    // Configuración desde variables de entorno
    this.browserName = process.env.BROWSER || 'chromium';
    this.headless = process.env.HEADLESS !== 'false';
    this.baseURL = process.env.BASE_URL || options.parameters.baseUrl;
  }

  async init() {
    // Seleccionar browser dinámicamente
    const browsers = { chromium, firefox, webkit };
    const browserType = browsers[this.browserName];

    this.browser = await browserType.launch({
      headless: this.headless,
      slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0
    });

    this.context = await this.browser.newContext({
      baseURL: this.baseURL,
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      recordVideo: {
        dir: 'reports/videos/',
        size: { width: 1280, height: 720 }
      }
    });

    this.page = await this.context.newPage();

    // Configurar timeouts
    this.page.setDefaultTimeout(30000);
    this.page.setDefaultNavigationTimeout(30000);
  }

  async cleanup() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(PlaywrightWorld);
