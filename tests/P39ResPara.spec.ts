import { Locator, test, expect } from '@playwright/test';

const resData: string[][] = [
    ["Mridu1", "Singh1", "mridu101@gmial.com", "9999999991", "123456"],
    ["Mridu2", "Singh2", "mridu102@gmial.com", "9999999992", "123456"],
    ["Mridu3", "Singh3", "mridu103@gmial.com", "9999999993", "123456"],
    ["Mridu4", "Singh4", "mridu104@gmial.com", "9999999994", "123456"],
    ["Mridu5", "Singh5", "mridu105@gmial.com", "9999999995", "123456"],
]



for(const[name, lastname, gmail, number, password] of resData){
    test(`Reg test for ${name} and ${lastname} ${gmail} ${number} ${password}`, async({page})=> {

        await page.goto("https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/register&language=en-gb")

        const name1 = page.locator('[name="firstname"]')
        await name1.fill(name)
         await page.waitForTimeout(2000)

        const lastname1 = page.locator('[name="lastname"]')
        await lastname1.fill(lastname)
         await page.waitForTimeout(2000)

        const gmail1 = page.locator('[name="email"]')
        await gmail1.fill(gmail)
         await page.waitForTimeout(2000)

        const number1 = page.locator('[name="telephone"]')
        await number1.fill(number)
         await page.waitForTimeout(2000)

        const password1 = page.locator('[name="password"]')
        await password1.fill(password)
         await page.waitForTimeout(2000)

        const newsLetter  = page.locator('#newsletter-yes')
        await newsLetter.check()
         await page.waitForTimeout(2000)

        const newsLetter1 = page.locator('#newsletter-no')
        await newsLetter1.check()
         await page.waitForTimeout(2000)
      
         const privacyPolicy1 = page.locator('#k_kapoor_check_box')
        await privacyPolicy1.check()
         await page.waitForTimeout(2000)

        const continueButton = page.locator('#k_kapoor_developer_button')
        await continueButton.click()
         await page.waitForTimeout(2000)

        await page.waitForTimeout(2000)
    }
)}