import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
    test('Verify Recent Posts count and verify the length of each list item', async ({ page }) => {

        await page.goto('https://practice.automationbro.com/blog');

        const recentPosts = page.locator('#recent-posts-3 ul li');

        for (const el of await recentPosts.elementHandles()) {
                expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10)
        }

        expect(await recentPosts.count()).toEqual(5);
    })

})