import { Page, expect } from '@playwright/test';

export class RegistrationPage {
  constructor(private page: Page) {}

  async navigateToArticle(url: string) {
    await this.page.goto(url);
  }

  async clickGetDayPassButton(buttonText: string) {
    const iframe = this.page.frameLocator('#axate-notice');
    await iframe.locator(`a.submit-button:has-text("${buttonText}")`).waitFor({ state: 'visible', timeout: 30000 });
    await iframe.locator(`a.submit-button:has-text("${buttonText}")`).click();
  }

  async fillRandomEmail(email: string) {
    await this.page.fill('input#email', email);
  }

  async selectCountryAndEnterPostcode(country: string, postcode: string) {
    await this.page.waitForTimeout(2000);
    await this.page.selectOption('#country', { label: country });
    await this.page.waitForTimeout(2000);
    await this.page.fill('#postcode', postcode);
  }

  async selectRandomMarketingPreferences() {
    const marketingNewsPreference = Math.random() < 0.5 ? 'true' : 'false';
    const marketingOffersPreference = Math.random() < 0.5 ? 'true' : 'false';
    const axateMarketingPreference = Math.random() < 0.5 ? 'true' : 'false';

    await this.page.locator(`input[name="publisher_marketing_news"][value="${marketingNewsPreference}"]`).check();
    await this.page.locator(`input[name="publisher_marketing_offers"][value="${marketingOffersPreference}"]`).check();
    await this.page.locator(`input[name="axate_marketing"][value="${axateMarketingPreference}"]`).check();
    await this.page.click('button.global-submitButton.sign-up__button');
  }

  async clickContinueToSubmit() {
    await this.page.click('text=Continue');
  }

  async clickRedeemButton() {
    await this.page.click('input.global-submitButton[type="button"]');
  }

  async clickNextContinue() {
    await this.page.click('button.global-submitButton.sign-up__button');
  }

  async selectRandomPaymentAmount() {
    const paymentAmounts = await this.page.locator('.amount-picker-container label');
    const count = await paymentAmounts.count();
    const randomIndex = Math.floor(Math.random() * count);
    await paymentAmounts.nth(randomIndex).click();
    await this.page.click('button.global-submitButton.sign-up__button');
  }

  async selectVoucher() {
    await this.page.click('span.pl-3:has-text("Voucher")');
  }

  async fillVoucherCode(voucherCode: string) {
    await this.page.fill('#voucher', voucherCode);
  }

  async verifyConfirmationMessage(expectedMessage: string) {
    const confirmation = await this.page.locator(`text=${expectedMessage}`).textContent();
    expect(confirmation).toBe(expectedMessage);
  }
}
