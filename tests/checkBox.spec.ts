
import { Locator, test } from '@playwright/test';

test ('Tutorial Point', async({page}) =>{

    await page.goto("https://demo.guru99.com/test/radio.html");
   
    const option1: Locator = page.locator('#vfb-7-1');
    await option1.check();

    await page.waitForTimeout(2000);

    const option2:Locator = page.locator('#vfb-7-2');
    option2.check();

    await page.waitForTimeout(2000);

    const option3:Locator = page.locator('#vfb-7-3');
    option3.check();

    await page.waitForTimeout(2000);

    const checkbox1:Locator = page.locator('#vfb-6-0');
    checkbox1.check();
    await page.waitForTimeout(2000);

    const checkbox2:Locator = page.locator('#vfb-6-1');
    checkbox2.check();
    await page.waitForTimeout(2000);

    const checkbox3:Locator = page.locator('#vfb-6-2');
    checkbox3.check();
    await page.waitForTimeout(2000);

    

    







   




});