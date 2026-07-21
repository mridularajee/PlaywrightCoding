import { Locator, test, expect } from '@playwright/test';
import fs from 'fs';

const jsonPath="testdata/logindata.json";

const loginTestData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

console.log(loginTestData);
console.log(Array.isArray(loginTestData));

for(const {email, password} of loginTestData){
test(`Login test for ${email} and ${password}`, async ({ page }) => {


    await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('#Email').fill(email);
            await page.locator('#Password').fill(password);
            await page.locator('input[value="Log in"]').click();

    await page.waitForTimeout(2000)

})
}