
import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://logicnextgen.com/projects/logiccart/upload/")

    const timestamp = Date.now();

    const section1 = page.locator("//img[@title='iPhone']");

    //     await section1.scrollIntoViewIfNeeded();  //for scroll the page
    // await section1.waitFor({ state: 'visible' });

    // await section1.waitFor({ state: 'visible' });  if ss not visible, add this line
    section1.screenshot({ path: 'screenshots/' + 'phone1' + timestamp + '.png' })

    await page.waitForTimeout(30000)

})

    test.only('flipcart', async ({ page }) => {
        await page.goto("https://www.flipkart.com/")

        const timestamp = Date.now();

        const section1 = page.locator("//img[@alt='Image'])[5]");

        //     await section1.scrollIntoViewIfNeeded();  //for scroll the page
        // await section1.waitFor({ state: 'visible' });

        // await section1.waitFor({ state: 'visible' });  if ss not visible, add this line
        section1.screenshot({ path: 'screenshots/' + 'phone1' + timestamp + '.png' })

        await page.waitForTimeout(30000)

    })