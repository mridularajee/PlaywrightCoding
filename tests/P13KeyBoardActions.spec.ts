import { expect, Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/register.php")

    // await page.locator('#firstName').fill('Thakur')
    // await expect(page.locator('#firstName')).toBeVisible()
    const fName = page.locator('#firstName');
    await fName.focus()
    await page.keyboard.insertText("Mridula Thakur")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(2000);

})