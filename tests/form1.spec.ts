import { Locator, test } from '@playwright/test';

test ('logicnextgen', async({page}) =>{

   await page.goto("https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/login&language=en-gb");
   
    const email: Locator = page.locator('#input-email');
    await email.fill('mridu@gmail.com');

    const password: Locator  = page.locator('#input-password')
     await password.fill('Raje@123')

     const login: Locator  = page.locator('#login_button_kapoor1')
     await login.click()
 
   await page.waitForTimeout(50000);
1
 });

  