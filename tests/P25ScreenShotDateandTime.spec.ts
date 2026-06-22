
import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://www.flipkart.com/")


    const timestamp = Date.now();

    // console.log(timestamp)
    // const date = new Date(timestamp);
    // console.log(date);

    await page.screenshot({path:'screenshots/'+'mridula'+timestamp+'.png'});

    // await page.screenshot({ path: 'screenshots/homepage1.png' });


})