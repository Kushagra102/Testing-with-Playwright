import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
    test('Fill contact form and verify success message', async ({ page }) => {

        await page.goto('https://practice.automationbro.com/contact');

        await page.locator('.contact-name input').fill('Test Name');
        await page.locator('.contact-email input').fill('test@email.com');
        await page.locator('.contact-phone input').fill('987654321');
        await page.locator('.contact-message textarea').fill('This is a test message');

        await page.locator('button[type=submit]').click();

        const successMessage = page.locator('div[role=alert]')
        await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})