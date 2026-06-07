import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/upload-download.php")

    const downloadPromise = page.waitForEvent('download');  // put wait for download

    const downloadFile = page.locator('#downloadButton') 
    downloadFile.click();
    
    const download = await downloadPromise;  // Capture download

    await download.saveAs('downloads/sample1.jpg');  // Save file into project folder
    await download.saveAs('downloads/sample2.jpg');

    await page.waitForTimeout(20000)

})