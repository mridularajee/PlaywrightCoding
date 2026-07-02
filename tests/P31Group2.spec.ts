import { Locator, test, expect } from '@playwright/test';

// sanity aur smoke Playwright ke keywords nahi hain. 
// Ye sirf group ke naam hain jo developers/testers apni testing strategy ke hisaab se rakhte hain.
// npx playwright test --grep "smoke"
// npx playwright test --grep "sanity" 

test.describe('sanity', () => {
    test('login', async ({ page }) => {
        console.log("login")
    })

    test('logout', async ({ page }) => {
        console.log("logout")
    })

    test('dashboard', async ({ page }) => {
        console.log("dashboard")
    })
})


test.describe('smoke', () => {

    test('search', async ({ page }) => {
        console.log("search")
    })

    test('addCart', async ({ page }) => {
        console.log("addCart")
    })

})

