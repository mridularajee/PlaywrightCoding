

import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://logicnextgen.com/projects/logiccart/upload/")

    await page.screenshot({path:'screenshots/homepage1.png'});


})