import { test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto('https://logicnextgen.com/projects/AutomationTestingPractice');

    // Name
    await page.locator('#name').fill('Mridula');
    await expect(page.locator('#name')).toHaveValue('Mridula');

    // Email
    await page.getByPlaceholder('name@example.com').fill('mridu@gmail.com');
    await expect(page.getByPlaceholder('name@example.com'))
        .toHaveValue('mridu@gmail.com');

    // Gender
    await page.locator('#Male').click();
    await expect(page.locator('#Male')).toBeChecked();

    // Mobile
    await page.locator('input[name="mobile"]').fill('9992999999');
    await expect(page.locator('input[name="mobile"]'))
        .toHaveValue('9992999999');

    // Subject
    await page.locator('#subjects').fill('Math');
    await expect(page.locator('#subjects')).toHaveValue('Math');

    // Hobbies
    await page.locator('#Sports').check();
    await page.locator('#Reading').check();
    await page.locator('#Music').check();

    await expect(page.locator('#Sports')).toBeChecked();
    await expect(page.locator('#Reading')).toBeChecked();
    await expect(page.locator('#Music')).toBeChecked();

    // File Upload
    await page.locator('#picture').setInputFiles('uploads/sample1.txt');

    // Address
    await page.locator('#address1').fill('NAN');
    await expect(page.locator('#address1')).toHaveValue('NAN');

    // State
    await page.locator('#state').selectOption('Delhi');
    await expect(page.locator('#state')).toHaveValue('Delhi');

    // City
    await page.locator('#city').selectOption('Agra');
    await expect(page.locator('#city')).toHaveValue('Agra');

    // Submit Button
    await expect(page.locator('#buttonkapoor1')).toBeVisible();
    await expect(page.locator('#buttonkapoor1')).toBeEnabled();

    await page.locator('#buttonkapoor1').click();

    await page.waitForTimeout(5000);
});