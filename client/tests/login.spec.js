import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  console.log('Starting Login Test');

  // Add a delay to ensure the server has time to start (if needed)
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Navigate to the login page
  try {
    await page.goto('http://localhost:5173/');
    console.log('Successfully navigated to the page');
  } catch (error) {
    console.error('Failed to navigate to the page:', error);
  }

  // Switch to the login form
  /* try {
    await page.click('#login');
    console.log('Clicked on the login button');
  } catch (error) {
    console.error('Failed to click on the login button:', error);
  }
 */
  // Fill out the login form
  try {
    await page.fill('input#login-email', 'purity@gmail.com'); // Use the email used in sign up
    await page.fill('input#login-password', 'purity123'); // Use the password used in sign up
    console.log('Filled out the login form');
  } catch (error) {
    console.error('Failed to fill out the login form:', error);
  }

  // Submit the login form
  try {
    await page.click('button.loginbtn');
    console.log('Clicked on the login button');
  } catch (error) {
    console.error('Failed to click on the login button:', error);
  }

  // Check for successful login, e.g., by checking for navigation to the home page
  try {
    await expect(page).toHaveURL('http://localhost:5173/home');
    console.log('Successfully navigated to the home page');
  } catch (error) {
    console.error('Failed to navigate to the home page:', error);
  }
});
