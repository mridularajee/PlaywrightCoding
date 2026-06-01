import { Locator, test } from '@playwright/test';

test ('Tutorial Point', async({page}) =>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/radio-button.php")

    const radioButton:Locator =  page.locator('[value="igottwo"]')
    await radioButton.check()

      const radioButton2:Locator =  page.locator('[value="igotthree"]')
    await radioButton2.check()

    await page.waitForTimeout(9000) 

})