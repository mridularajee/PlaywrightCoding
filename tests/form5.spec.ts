import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice");

    const name: Locator = page.locator('#name')
    await name.fill("Mridula")

    const emailId: Locator = page.locator('#email')
    await emailId.fill('mridu@gamil.com')

    //GENDER
    const male = page.locator('#Male');
    await male.click();

    const female = page.locator('#Female');
    await female.click();

    const other = page.locator('#Other');
    await other.click();


    const mobile: Locator = page.locator('#mobile')
    await mobile.fill('5655555555')

    // const dob: Locator = page.locator('#dob')
    // await dob.fill('30/05/2025')

    const subjects: Locator = page.locator('#subjects')
    await subjects.fill('Playwright')

    //HOBBIES 
    const reading = page.locator('#Reading');
    await reading.click();

    const music = page.locator('#Music');
    await music.click();

    const sports = page.locator('#Sports');
    await sports.click();

    const currentAddress: Locator = page.locator('#address1')
    await currentAddress.fill('New Ashok Nagar')

    //DROPDOWNS
    const state:Locator = page.locator('#state')
    await page.locator('#state').selectOption('Haryana')

    const city:Locator = page.locator('#city')
    await page.locator('#city').selectOption('Agra')

    const submit:Locator = page.locator('#buttonkapoor1')
    await submit.click()

    await page.waitForTimeout(500000);


})  