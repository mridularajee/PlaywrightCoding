
import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://www.flipkart.com/")


    const timestamp = Date.now();  //JavaScript ka ek built-in method hai. Iska kaam current date aur time ko milliseconds me return karna hota hai.

    // console.log(timestamp)
    // const date = new Date(timestamp);
    // console.log(date);

    await page.screenshot({path:'screenshots/'+'mridula'+timestamp+'.png'});  //Ye line dynamic filename ke saath screenshot save karti hai.

    // await page.screenshot({ path: 'screenshots/homepage1.png' });


})