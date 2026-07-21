import { Locator, test } from "@playwright/test";

const loginData: string[][] = [
    ["mridu101@gmial.com", "123456"],
    ["mridu102@gmial.com", "123456"],
    ["mridu103@gmial.com", "123456"]
]

for (const [email, password] of loginData) {
    test(`Login test for ${email} ${password}`, async ({ page }) => {

        await page.goto("https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/login&language=en-gb")

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