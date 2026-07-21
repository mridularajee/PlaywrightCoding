import { Locator, test, expect } from '@playwright/test';
import fs from 'fs';

const jsonPath = "testdata/registerdata.json";

const registerTestData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

console.log(registerTestData);
console.log(Array.isArray(registerTestData));

for (const { fname, lname, email, password, cpassword } of registerTestData) {
    test(`Register test for ${fname} and  ${lname} ${email} and ${password} and ${cpassword}`, async ({ page }) => {


        await page.goto('https://demowebshop.tricentis.com/register');

        const male = page.locator('#gender-male')
        await male.check()

        const female = page.locator('#gender-female')
        await female.check()

        await page.locator('#FirstName').fill(fname);
        await page.locator('#LastName').fill(lname);
        await page.locator('#Email').fill(email);
        await page.locator('#Password').fill(password);
        await page.locator('#ConfirmPassword').fill(cpassword);
        await page.locator('#register-button').click();

        await page.waitForTimeout(2000)

    })
}