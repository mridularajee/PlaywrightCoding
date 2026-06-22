
import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://www.flipkart.com/")

    const timestamp = Date.now();
    
    await page.screenshot({ path: 'screenshots/' + 'homepage1' + timestamp + '.png', fullPage: true });
})