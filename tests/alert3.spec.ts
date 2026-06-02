import { Locator, expect, test } from '@playwright/test';
test('comfirmbox', async({page})=>{

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php")

    const confirmBox = page.locator('#ConfirmBox1')

    page.on('dialog', (dialog) =>{
        console.log("Dialog Type is : ", dialog.type())
        console.log("Dialog Text is :  ", dialog.message())
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept();
        //  dialog.dismiss();
    })
    await confirmBox.click();

    const text = page.locator('#demo2').innerText()
    console.log(text)
    await expect(page.locator("#demo2")).toHaveText("You pressed OK!");
    await page.waitForTimeout(30000);
})