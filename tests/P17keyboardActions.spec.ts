import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/register.php")
    const input1=page.locator('#firstName');
    await input1.focus(); //await input1.click();
    await page.keyboard.insertText("Logic NextGen Automation Practice");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
     await page.keyboard.press('Control+V');

    await page.waitForTimeout(20000)

})