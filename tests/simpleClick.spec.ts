import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/buttons.php")

    const simpleButton = page.locator('#singleBtn')
    await simpleButton.click()

    await page.waitForTimeout(30000)
})

test('logicnextgen1', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/buttons.php")


    const dubbleClick = page.locator('#doubleBtn')

    await page.waitForTimeout(5000)
    await dubbleClick.dblclick()

    await page.waitForTimeout(2000)
})

test.only('logicnextgen3', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/buttons.php")

    await page.waitForTimeout(5000);
    const rightBtn1 = await page.locator('#rightBtn');
    rightBtn1.click({button:'right'});

    await page.waitForTimeout(20000)
})

