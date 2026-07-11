import { Locator, test, expect } from '@playwright/test';


const loginTestData: string[][] = [
    ["akanshabudhani@gmail.com", "123456"],
    ["niteshkumar123@gmail.com", "Sensational@123"],
    ["rajemridul@gmail.com", "123456"],
    ["akku01@gmail.com", "123456"],
];

for(const [email, password] of loginTestData){

test(`Login test for ${email} and ${password}`, async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/login");

    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input[value="Log in"]').click();

    await page.waitForTimeout(2000)

})

}









// akanshabudhani@gmail.com
// 123456

// niteshkumar123@gmail.com
// Sensational@123


// rajemridul@gmail.com
// 123456

// akku01@gmail.com
// 123456

// arunsinghthakur@gmail.com
// 1234567