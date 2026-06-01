import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice");

    const state:Locator = page.locator('#state')
    await page.locator('#state').selectOption('Uttar Pradesh');

    const city:Locator = page.locator('#city')
    await page.locator('#city').selectOption('Lucknow');

    await page.waitForTimeout(30000);
})