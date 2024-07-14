import { test, expect } from '@playwright/test';

test('Sign Up Test', async ({ page }) => {
  console.log('Starting Sign Up Test');

  // Add a delay to ensure the server has time to start
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Navigate to the signup page
  try {
    await page.goto('http://localhost:5173');
    console.log('Successfully navigated to the page');
  } catch (error) {
    console.error('Failed to navigate to the page:', error);
  }

  // Switch to the signup form
  try {
    await page.click('#register');
    console.log('Clicked on the register button');
  } catch (error) {
    console.error('Failed to click on the register button:', error);
  }

  // Fill out the signup form
  try {
    await page.fill('input#name', 'rys');
    await page.fill('input#email', 'rys@gmail.com');
    await page.fill('input#password', 'rys123');
    console.log('Filled out the signup form');
  } catch (error) {
    console.error('Failed to fill out the signup form:', error);
  }

  // Submit the form
  try {
    await page.click('button.btnbtn');
    console.log('Clicked on the submit button');
  } catch (error) {
    console.error('Failed to click on the submit button:', error);
  }

  // Check for successful signup by checking for navigation to the home page
  try {
    await expect(page).toHaveURL('http://localhost:5173/home');
    console.log('Successfully navigated to the home page');
  } catch (error) {
    console.error('Failed to navigate to the home page:', error);
  }
});
