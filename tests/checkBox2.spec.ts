import { Locator, test } from '@playwright/test';

test ('Tutorial Point', async({page}) =>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/check-box.php");

    const checkbox1:Locator = page.locator('#c_bs_1');
    await checkbox1.check();


    const checkbox2:Locator = page.locator('#c_bs_2');
    await checkbox2.check();


    await page.waitForTimeout(5000);
   
   
    


});