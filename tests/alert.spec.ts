import { Locator, expect, test } from '@playwright/test';

test('simplealert', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php");

    const simpleAlert = page.locator('#SimpleAlerts1')

    page.on('dialog', (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("Dialog Text:", dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();


    });

    await simpleAlert.click()

    await page.waitForTimeout(2000)

})

test('confirmbox', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php");

    const confirmBox = page.locator('#ConfirmBox1')

    page.on('dialog', (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("Dialog Text:", dialog.message());
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept();
        //  dialog.dismiss();

    });

    await confirmBox.click()

    const text: string = await page.locator("#demo2").innerText();
    console.log("Output text:", text);
    // await expect(page.locator("#demo2")).toHaveText("You pressed Cancel!");
      await expect(page.locator("#demo2")).toHaveText("You pressed OK!");

    await page.waitForTimeout(2000)
})

test.only('promptalert', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php");

    const promptBox1 = page.locator('#PromptBox1')

    page.on('dialog', (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("Dialog Text:", dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        dialog.accept('suraj');
    });

    await promptBox1.click()
    const text: string = await page.locator("#demo3").innerText();
    console.log("Output text:", text);
    await expect(page.locator("#demo3")).toHaveText("Hello suraj! How are you today?");

    await page.waitForTimeout(2000)

})
