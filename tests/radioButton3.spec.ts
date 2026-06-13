import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/Radiobutton.php")

    //GENDER
    const male = page.locator('#Male');
    await male.click();

    const female = page.locator('#Female');
    await female.click();

    const other = page.locator('#Other');
    await other.click();

    //DEGREE

    const btech: Locator = page.locator('#btech')
    await btech.click()

    const bca: Locator = page.locator('bca')
    await bca.click()

    const mca: Locator = page.locator('#mca')
    await mca.click()

    const mba: Locator = page.locator('#mba')
    await mba.click()

    await page.waitForTimeout(90000)
})
