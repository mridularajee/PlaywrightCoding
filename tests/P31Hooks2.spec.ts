import { test, expect, Locator  , Page} from '@playwright/test'
test.describe.configure({ mode: 'serial' });  //Is file ke saare tests ek ke baad ek chalenge.(Agar Test1 fail ho gaya, to Test2 aur Test3 skip ho jayenge.Iska use tab hota hai jab tests ek dusre par depend karte hain.)

let page:Page;  //global variable

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/index.html")
    console.log(' browser open');

})
test.afterAll('Closing App', async () => {
    await page.close();
    console.log('browser closed');

});


test.beforeEach('login App', async () => {
    await page.locator('#login2').click();
    await page.waitForTimeout(2000);
    await page.locator('#loginusername').fill('Shiba');
    await page.locator('#loginpassword').fill('Shiba@1234');
    await page.waitForTimeout(2000);
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(2000);
    console.log('login');
});

test.afterEach('logout App', async () => {
    await page.waitForTimeout(2000);
    await page.locator('#logout2').click();
    await page.waitForTimeout(4000);

    console.log('logout');
});



test('Find No Of products', async () => {
const products = page.locator('#tbodyid .hrefch');
    const count = await products.count();
    console.log('Number of products:', count);
    await expect(products.first()).toBeVisible();
    await expect(products).toHaveCount(9);
    await page.waitForTimeout(2000);
    // console.log("Find Products");

    
})

test('add to cart', async () => {
await page.waitForTimeout(2000);
    await page.locator("text='Samsung galaxy s6'").click();

    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(2000);
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

 await page.waitForTimeout(2000);

 await page.locator('.btn.btn-success.btn-lg').click();

    await page.waitForTimeout(2000);



  

});