import { Locator, test, expect } from '@playwright/test';



const loginTestData: string[][] = [
    ["rajemridul@gmail.com", "123456"],
];


for(const [email, password] of loginTestData){
test(`Login test for ${email} and ${password}`, async ({ page }) => {


    await page.goto("https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/login&language=en-gb");

    const email1 = page.locator("#input-email")
    await email1.fill(email)
     await page.waitForTimeout(2000)

    const password1 = page.locator("#input-password")
    await password1.fill(password)
     await page.waitForTimeout(2000)

    const loginButton = page.locator("#login_button_kapoor1").click()

    await page.waitForTimeout(2000)



})
}