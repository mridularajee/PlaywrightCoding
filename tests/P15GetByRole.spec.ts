import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/links.php")
    const getByRole = page.getByRole('link', {name:'Link Logic Cart Project'});
    getByRole.click()
    await page.waitForTimeout(2000)
})