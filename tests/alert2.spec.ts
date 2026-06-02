import { test, expect, Locator } from '@playwright/test';

test('simplealert', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/alerts.php")

    const simpleAlert: Locator = page.locator('#SimpleAlerts1')

    page.on('dialog', (dialog) => {
    expect(dialog.message()).toContain("I am an alert box!")
    dialog.accept()
    });
    await simpleAlert.click()
    await page.waitForTimeout(3000);
})
