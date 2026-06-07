import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/upload-download.php")
    const uploadFile = await page.locator('#uploadMultipleFile1')
    uploadFile.setInputFiles(['uploads/sample1.txt', 'uploads/sample2.txt']);

    // const fileCount = await page.locator('#uploadMultipleFile1').evaluate( (input: any) => input.files.length);
    // console.log(fileCount)

  await page.waitForTimeout(2000);
    const fileCount = await page.locator('#uploadMultipleFile1').evaluate((input: any) => input.files.length);

    await page.waitForTimeout(2000);
    console.log(fileCount);

    expect(fileCount).toBe(10);

    await page.waitForTimeout(20000);


})