import { Locator, test } from '@playwright/test';

test ('Flipkart Lunch', async({page}) =>{

   await page.goto("https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/register&language=en-gb");

   const firstName:Locator = page.locator('#input-firstname');
   await firstName.fill('Mridula');

    const lastName:Locator = page.locator('#input-lastname');
    await lastName.fill('Thakur');

    const eMail:Locator = page.locator('#input-email');
    await eMail.fill('mridula@gmail.com');

    const telephone:Locator = page.locator('#input-telephone1');
    await telephone.fill('11111111');
    
    
// Passwrodfiled
    const password:Locator = page.locator('#input-password');
    await password.fill('7890');

   await page.waitForTimeout(20000);

});