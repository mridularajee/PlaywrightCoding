
import { Locator, test, expect } from '@playwright/test';


test('logicnextgen', async ({ page }) => {
await page.goto('https://logicnextgen.com/projects/AutomationTestingPractice/textbox.php');



    // Fill textboxes
    await page.waitForTimeout(2000);
    await page.locator('#fullname').fill('Kundan Kapoor');
    await page.waitForTimeout(2000);
    await page.locator('#email').fill('kundan@test.com');
    await page.waitForTimeout(2000);
    await page.locator('#address').fill('Greater Noida');
    await page.waitForTimeout(2000);
    await page.locator('#password1').fill('12345678');
    await page.waitForTimeout(2000);

})