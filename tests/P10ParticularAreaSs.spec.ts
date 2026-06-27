import {Locator, test} from "@playwright/test"

test('particularareascreenshot', async({page})=>{

   await page.goto("https://www.wikipedia.org/")

   const searchPng:Locator = page.locator("search-form")

   searchPng.screenshot({path: 'screenshot_demo/search.png'})

})