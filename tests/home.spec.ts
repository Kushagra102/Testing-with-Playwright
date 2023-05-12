import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');

        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    test('Open AboutPage and verify title', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/about');

        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get started button using CSS selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');

        await page.locator('#get-started').click();

        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading Text is visible using text selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');

        const headingText = page.locator('text=Think different. Make different.')

        await expect(headingText).toBeVisible();
    })

    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');

        // const homeText = await page.locator('#primary-menu >> text=Home')
        const homeText = page.locator('#primary-menu:has-text("Home")')

        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is enabled using xpath selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');

        // const homeText = await page.locator('#primary-menu >> text=Home')
        const searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]')

        await expect(searchIcon).toBeVisible();
    })

    test('Verify the test for all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        await page.goto('https://practice.automationbro.com/');

        // const navLinks = page.locator('#primary-menu li[id*=menu]')
        const navLinks = page.locator('#primary-menu li[id*=menu]')

        for(const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }

        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        // expect(await navLinks.textContent()).toEqual("Blog");
        // expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
    })


})
