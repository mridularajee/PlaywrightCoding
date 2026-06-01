import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/checkbox.php");


    //CITIES
    const checkbox1: Locator = page.locator('#mumbai');
    await checkbox1.check();


    const checkbox2: Locator = page.locator('#delhi');
    await checkbox2.check();


    const checkbox3: Locator = page.locator('#noida');
    await checkbox3.check();

    //WEEKDAYS
    const monday: Locator = page.locator('#monday');
    await monday.check();

    const tuesday: Locator = page.locator('#tuesday');
    await tuesday.check();

    const wednesday: Locator = page.locator('#wednesday');
    await wednesday.check();

    const thursday: Locator = page.locator('#thursday');
    await thursday.check();

    const friday: Locator = page.locator('#friday');
    await friday.check();

    const saturday: Locator = page.locator('#saturday');
    await saturday.check();


    const sunday: Locator = page.locator('#sunday');
    await sunday.check();

    await page.waitForTimeout(2000);
})