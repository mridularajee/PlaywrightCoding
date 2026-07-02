
import { Locator, test, expect } from '@playwright/test';

test.describe('group1', () => {
    test('test1', async ({ page }) => {
        console.log("test1")
    })


    test('test2', async ({ page }) => {
        console.log("test2")
    })
})


test.describe('group2', () => {

    test('test3', async ({ page }) => {
        console.log("test3")
    })


    test('test4', async ({ page }) => {
        console.log("test4")
    })

})

// test.describe() is a Playwright function used to group related test cases together. 
// It helps organize tests and allows common hooks like beforeEach, afterEach, beforeAll, 
// and afterAll to be applied to the entire group.
// Note: async ki zarurat test.describe() ke callback me generally nahi hoti.


// sirf group1 run karne ke liye:
// npx playwright test --grep "group1

// Sirf group2:
// npx playwright test --grep "group2"

// Sirf ek test run karne ke liye
// npx playwright test --grep "test1"
