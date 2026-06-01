import { Locator, test, expect} from '@playwright/test';

test ('Tutorial Point', async({page}) =>{

    await page.goto("https://logicnextgen.com/projects/logiccart/upload/");
   
    let websitetitle = await page.title();
    
    console.log(websitetitle); 

   await page.waitForTimeout(2000);

    await expect(page).toHaveTitle("Your Store");





   
    


});