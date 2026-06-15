import { Locator, test , expect} from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/upload-download.php")

    const heading = page.getByText('Select a File (Single File) to Upload')
    await expect(page.getByText('Select a File (Single File) to Upload')).toBeVisible()

    // const heading = page.locator('h5')
    // await expect(page.locator('h5')).toHaveText('Select a File (Single File) to Upload')

    const singleFileUpload = page.locator('#uploadFile1')
    await singleFileUpload.setInputFiles('uploads/sample1.txt')   //.txt kyu krna pad rh hai jab file jpg me hai

    await expect (page.locator('#uploadFile1')).toHaveValue('/sample1.txt/')
    

    const multipleFiles = page.locator('#uploadMultipleFile1')
    await multipleFiles.setInputFiles(['uploads/sample1.txt', 'uploads/sample2.txt'])

    await page.waitForTimeout(20000)

})