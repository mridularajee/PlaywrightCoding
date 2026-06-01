import { Locator, test } from '@playwright/test';

test('guru99' , async({page})=>{

    await page.goto("https://demo.guru99.com/test/radio.html")

    const radioButton:Locator = page.locator('#vfb-7-1')
    await radioButton.click()

    const radioButton2:Locator = page.locator('#vfb-7-2')
    await radioButton2.click()

    const radioButton3:Locator = page.locator('#vfb-7-3')
    await radioButton3.click()

    await page.waitForTimeout(90000)

})
