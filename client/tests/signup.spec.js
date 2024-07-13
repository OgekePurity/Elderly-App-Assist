// tests/signup.test.js
import { test, expect } from '@playwright/test';

test('Sign Up Test', async ({ page }) => {
  // Navigate to the signup page
  await page.goto('http://localhost:5173'); // Adjust URL to your setup

  // Fill out the signup form
  //await page.fill('input[name="name"]', 'Purity');
  await page.fill('input[name="email"]', 'purity@gmail.com');
  await page.fill('input[name="password"]', 'purity123');

  // Submit the form
  await page.click('button[type="submit"]');

  // Check for successful signup, e.g., by checking for navigation to the home page
  await expect(page).toHaveURL('http://localhost:5173/home');
});
