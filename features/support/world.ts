import {
  setWorldConstructor,
  setDefaultTimeout,
  Before,
  After,
} from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "playwright";

class CustomWorld {
  page!: Page;
  browser!: Browser;
  context!: BrowserContext;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});
