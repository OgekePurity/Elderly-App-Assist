import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Add a delay to ensure the server has time to start (if needed)
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Navigate to the home page
    await page.goto('http://localhost:5173/home');
  });

  test.setTimeout(60000);

  test('Navigation Links Test', async ({ page }) => {
    const links = [
      { text: 'Home', url: '/home' },
      { text: 'About', url: '/about' },
      { text: 'Doctors', url: '/doctors' },
      { text: 'Journal', url: '/journal' },
      { text: 'Blog', url: '/blog' },
      { text: 'Profile', url: '/Profile' },
      { text: 'Appointments', url: '/appointments' },
      { text: 'Community', url: '/community' },
    ];

    for (const link of links) {
      await page.click(`a[href="${link.url}"]`);
      await expect(page).toHaveURL(`http://localhost:5173${link.url}`);
      await page.goBack(); // Go back to home page
    }
  });

  test('Landing Section Test', async ({ page }) => {
    const landingText = await page.textContent('.landingText h1');
    expect(landingText).toContain('Your trusted companion for a Healthier Lifestyle.');
    
    const landingImage = await page.isVisible('.landingImage img');
    expect(landingImage).toBeTruthy();
  });

  test('About Section Test', async ({ page }) => {
    const aboutText = await page.textContent('.aboutText h1');
    expect(aboutText).toContain('Experience the utmost care and support');

    const listItems = [
      'Modern Technology',
      'Health Blogs',
      'Track your medicine',
      'Write your Journal',
      'Receive Notifications',
      'Plan your Calendar'
    ];

    for (const item of listItems) {
      const listItem = await page.textContent(`.aboutList li:has-text("${item}")`);
      expect(listItem).toBeTruthy();
    }
  });

  test('Info Section Test', async ({ page }) => {
    const infoHeader = await page.textContent('.infoHeader h1');
    expect(infoHeader).toContain('We Analyze Your Health States');
  });

  test('Card Section Test', async ({ page }) => {
    const cards = [
      'Taking care of the elderly',
      'Book your appointments',
      'Interact with our Chatbot'
    ];

    for (const card of cards) {
      const cardTitle = await page.textContent(`.e-card:has-text("${card}") .infotop`);
      expect(cardTitle).toContain(card);
    }
  });

  test('Chatbot Interaction Test', async ({ page }) => {
    // Click on the chatbot icon
    await page.click('.chat-icon');
    
    // Check if the chatbot modal is open
    const chatModal = await page.isVisible('.chat-modal');
    expect(chatModal).toBeTruthy();
  });

  test('Footer Links Test', async ({ page }) => {
    const footerLinks = [
      { text: 'HOME', url: '/home' },
      { text: 'ABOUT', url: '/about' },
      { text: 'DOCTORS', url: '/doctors' },
      { text: 'JOURNAL', url: '/journal' },
      { text: 'BLOG', url: '/blog' },
      { text: 'PROFILE', url: '/profile' }
    ];

    for (const link of footerLinks) {
      await page.click(`a[href="${link.url}"]`);
      await expect(page).toHaveURL(`http://localhost:5173${link.url}`);
      await page.goBack(); // Go back to home page
    }
  });
});
