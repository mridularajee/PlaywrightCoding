import { Locator, test } from '@playwright/test';

test ('guru99', async({page}) =>{

        await page.goto("https://demo.guru99.com/test/newtours/register.php");

       const firstName:Locator =  page.locator('[name="firstName"]')
       await firstName.fill("Mridula")

       const lastName:Locator = page.locator('[name="lastName"]')
       await lastName.fill("Singh")

       const phoneNumber:Locator = page.locator('[name="phone"]')
       await phoneNumber.fill('7888383833')

        const emailId:Locator = page.locator('[name="userName"]')
        await emailId.fill('name="userName"')

        const address:Locator = page.locator('[name="address1" ]')
        await address.fill('New Ashok Nagr')

        const city:Locator = page.locator('[name="city"]')
        await city.fill('New Delhi')

        const state:Locator = page.locator('[name="state"]')
        await state.fill('Delhi')

        const postalCode:Locator = page.locator('[name="postalCode"]')
        await postalCode.fill('110097')

        const country:Locator = page.locator('[name="country"]')
        await country.fill('India')

        const userId:Locator = page.locator('#email')
        await userId.fill('mridularaje')

        const password:Locator = page.locator('[name="password"]')
        await password.fill('1357')

        const confirmPassword:Locator =  page.locator('[name="confirmPassword"]')
        await confirmPassword.fill('1357')

        // name="submit"
        const submitBtn = page.locator('[name="submit"]');
        await submitBtn.click();


        await page.waitForTimeout(1500000);


})