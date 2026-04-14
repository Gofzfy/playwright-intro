import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // const username = page.locator('#username');
  // const email = page.getByPlaceholder('Enter your email');
  // const btn = page.locator('#submit-order');

  // await username.fill('1234')
  // await email.fill('awsedkawodkwao@mail.wkqoe')
  // await expect(btn).toBeEnabled();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const link = page.getByRole('link', { name: 'Get started' });
  await link.click();

  console.log(123)

  // Expects page to have a heading with the name of Installation.
  const heading = page.getByRole('heading', { name: 'Installation' })
  await expect(heading).toBeVisible();
});

// Homework 15
test('GitHub button', async ({ page}) => {
  await page.goto('https://playwright.dev/');

  // Find GitHub button: easy approach
  const gitHubButton = page.locator('[class="navbar__item navbar__link header-github-link"]')
  await expect(gitHubButton).toBeVisible();
})

test('Discord button', async ({ page}) => {
  await page.goto('https://playwright.dev/');

  // Find Discord button: more unique approach
  const discordButton = page.locator('[href*="discord"][class*="discord-link"]')
  await expect(discordButton).toBeVisible();
})

test('Dark theme selection button', async ({ page}) => {
  await page.goto('https://playwright.dev/');

  //Find Dark theme button: tree navigation approach
  const darkThemeButton = page.locator('[class*="theme-layout"]')
      .locator('[class*="items--right"]').locator('[class*="toggleButton"]');
  await expect(darkThemeButton).toBeVisible();
})