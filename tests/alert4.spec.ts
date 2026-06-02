import { Locator, expect, test } from '@playwright/test';
test('promptBox', async({page})=>{

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php")

    const promptBox = page.locator('#PromptBox1')
    page.on('dialog', (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("Dialog Text:", dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        // dialog.accept('suraj');
        dialog.dismiss()
    });

    await promptBox.click()
    const text: string = await page.locator("#demo3").innerText();
    console.log("Output text:", text);
    // await expect(page.locator("#demo3")).toHaveText("Hello suraj! How are you today?");
  await expect(page.locator("#demo3")).toHaveText("User cancelled the prompt.");
    await page.waitForTimeout(2000)


    await page.waitForTimeout(3000)

})