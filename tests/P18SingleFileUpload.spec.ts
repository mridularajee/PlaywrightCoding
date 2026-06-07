import { Locator, test , expect} from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/upload-download.php")
    const uploadFile = await page.locator('#uploadFile1')
    uploadFile.setInputFiles('uploads/sample1.txt');

    // Validation
    await expect(page.locator('#uploadFile1')).toHaveValue(/sample10.txt/);


    await page.waitForTimeout(20000);
})