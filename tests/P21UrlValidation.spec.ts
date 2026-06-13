import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://logicnextgen.com/projects/logiccart/upload/")

    let url = page.url()
    console.log(url)

   // await expect(page).toHaveURL("https://logicnextgen.com/projects/logiccart/uploa/");

   let expectedUrl = 

    await page.waitForTimeout(2000);

})