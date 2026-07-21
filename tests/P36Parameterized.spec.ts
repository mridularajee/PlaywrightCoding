import { Locator, test, expect } from '@playwright/test';

test('tutorialspoint', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const login = page.locator(".ico-login")
    await login.click()

    const email = page.locator("#Email")
    await email.fill("laura.taylor1234@example.com")

    const password = page.locator("#Password")
    await password.fill("test123")

    await page.waitForTimeout(2000)
})



// https://demowebshop.tricentis.com/login
//laura.taylor1234@example.com
// test123
