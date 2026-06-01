import { Locator, test } from '@playwright/test';

test ('Tutorial Point', async({page}) =>{

    await page.goto("https://demo.guru99.com/test/radio.html");

    const checkbox1:Locator = page.locator('#vfb-6-0');
    await checkbox1.check();
    

    const checkbox2:Locator = page.locator('#vfb-6-1');
    await checkbox2.check();
   

    const checkbox3:Locator = page.locator('#vfb-6-2');
    await checkbox3.check();

    await page.waitForTimeout(2000);
})