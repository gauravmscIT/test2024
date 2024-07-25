import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

const randomEmail = `test${Date.now()}@example.com`;
let registrationPage: RegistrationPage;

Given('the user is on the article page at {string}', async function (url: string) {
  registrationPage = new RegistrationPage(this.page);
  await registrationPage.navigateToArticle(url);
});

When('the user clicks on the {string} button', async function (buttonText: string) {
  await registrationPage.clickGetDayPassButton(buttonText);
  await registrationPage.clickContinueToSubmit();
});

When('the user fills in a random email address', async function () {
  await registrationPage.fillRandomEmail(randomEmail);
});

When('the user selects {string} as the country and enters a valid UK postcode', async function (country: string) {
  await registrationPage.selectCountryAndEnterPostcode(country, 'MK10 7HH');
});

When('the user selects a random preference for marketing preferences', async function () {
  await registrationPage.selectRandomMarketingPreferences();
});

When('the user clicks "Continue"', async function () {
  await registrationPage.clickRedeemButton();
});

When('the user selects any payment amount', async function () {
  await registrationPage.selectRandomPaymentAmount();
});

When('the user selects Voucher', async function () {
  await registrationPage.selectVoucher();
});

When('the user fills in {string}', async function (voucherCode: string) {
  await registrationPage.fillVoucherCode(voucherCode);
});

Then('the user should see confirmation {string}', async function (confirmationMessage: string) {
  await registrationPage.verifyConfirmationMessage(confirmationMessage);
});
