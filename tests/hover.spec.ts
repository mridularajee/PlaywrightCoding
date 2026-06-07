import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/mousehover.php")
    const hoverButton = page.locator('#MouserHover1')
    await hoverButton.hover()

    await page.waitForTimeout(20000)
})