import { Locator, test } from '@playwright/test';

test ('tutorialspoint', async({page}) =>{

   await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php");

   const fullName:Locator = page.locator('[name="fullname"]')
   await fullName.fill('Ritu Thakur')

   const email:Locator = page.locator('#email')
   await email.fill('ritu@gmail.com')

   const currentAddress:Locator = page.locator('#address')
   await currentAddress.fill('Kanpur')

   const password:Locator = page.locator('#password')
   await password.fill('121212')

   const submit = page.locator('#buttonkapoor1')
   await submit.click()

   await page.waitForTimeout(30000);
   
  
1
 });
