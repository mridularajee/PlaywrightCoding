import { Locator, test, expect } from '@playwright/test';

test.describe('sanity', async () => {
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


test.describe('smoke', async () => {

    test('search', async ({ page }) => {
        console.log("search")
    })

    test('addCart', async ({ page }) => {
        console.log("addCart")
    })

})

