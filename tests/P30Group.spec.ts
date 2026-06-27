
import { Locator, test, expect } from '@playwright/test';


test.describe('group1', async () => {
    test('test1', async ({ page }) => {
        console.log("test1")
    })


    test('test2', async ({ page }) => {
        console.log("test2")
    })
})


test.describe('group2', async () => {

    test('test3', async ({ page }) => {
        console.log("test3")
    })


    test('test4', async ({ page }) => {
        console.log("test4")
    })

})

