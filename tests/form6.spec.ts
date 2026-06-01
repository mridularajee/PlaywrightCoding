import { Locator, test } from '@playwright/test';

test ('logicnextgen', async({page}) =>{

   await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/textbox.php");

   const fullName:Locator = page.locator('#fullname')
   await fullName.fill('Nishi Thakur')

   const email:Locator = page.locator('#email')
   await email.fill('nishi@gmail.com')

   const currentAddress:Locator = page.locator('#address')
   await currentAddress.fill('Kanpur')

   const password:Locator = page.locator('#password')
   await password.fill('777777')

   const submit = page.locator('[value="Submit"]')
   await submit.click()

   await page.waitForTimeout(30000);
   
  
1
 });