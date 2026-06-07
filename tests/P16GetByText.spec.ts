import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/links.php")
    const getByText = page.getByText('Open New Tab')
    getByText.click()
    await page.waitForTimeout(2000)
})