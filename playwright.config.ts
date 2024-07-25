import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    baseURL: 'https://yrk.branch-master.axate.io',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
