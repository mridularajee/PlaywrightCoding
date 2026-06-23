import { expect, test } from "@playwright/test";

test('sceenshot', async({page})=>{
    await page.goto("https://www.amazon.in/")

    await  expect(page).toHaveURL("https://www.amazon.in/");

    await expect(page.locator("nav-logo-sprites")).toBeVisible();

    await expect (page).toHaveTitle(/Amazon/)

    await page.screenshot({path: 'screenshot_demo/amazon.png'})

    await page.waitForTimeout(2000)

})