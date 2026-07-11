import { Locator, test, expect } from '@playwright/test';

//testdata
// const searchItems: string[] = ['laptop', 'smartphone', 'monitor', 'Gift Card'];

const searchItems: string[] = ['laptop', 'smartphone', 'book', 'computer'];

// test('tutorialspoint', async ({ page }) => {

//     await page.goto("https://demowebshop.tricentis.com/");

//     const searchBox = page.locator("//input[@id='small-searchterms']").fill("laptop")
//     await page.waitForTimeout(2000);

//     const searchBox1: Locator = page.locator("//input[@id='small-searchterms']")
//     await searchBox1.click()
//     await page.waitForTimeout(2000);

//     await expect(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true })
//     await page.waitForTimeout(2000);


// })



// Dynamic ways
// for (const item of searchItems) {  // for of loop

//     test(`Paramitizatrion ${item}`, async ({ page }) => {

//         await page.goto("https://demowebshop.tricentis.com/");
//         await page.waitForTimeout(2000)

//         const searchBox: Locator = page.locator("//input[@id='small-searchterms']");
//         await page.waitForTimeout(2000)
//         await searchBox.fill(item);
//         await page.waitForTimeout(2000);

//         const searchBtn: Locator = page.locator("//input[@class='button-1 search-box-button']");
//         await searchBtn.click();
//         await page.waitForTimeout(2000);

//         await expect(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
//         await page.waitForTimeout(1000);

//     })

// }


searchItems.forEach((item)=>{

    test(`Paramitizatrion ${item}`, async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/");
        await page.waitForTimeout(2000)

        const searchBox: Locator = page.locator("//input[@id='small-searchterms']");
        await page.waitForTimeout(2000)
        await searchBox.fill(item);
        await page.waitForTimeout(2000);

        const searchBtn: Locator = page.locator("//input[@class='button-1 search-box-button']");
        await searchBtn.click();
        await page.waitForTimeout(2000);

        await expect(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
        await page.waitForTimeout(1000);

    })
})

