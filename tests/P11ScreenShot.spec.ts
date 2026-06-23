import { test } from "@playwright/test";

test('sceenshot', async({page})=>{
    await page.goto("https://logicnextgen.com/projects/logiccart/upload/")

    await page.screenshot({path: 'screenshot_demo/logicnextgen2.png'})
    
    await page.screenshot({path: 'screenshot_demo/logicnextgen3.png'})

    await page.waitForTimeout(2000)

})
