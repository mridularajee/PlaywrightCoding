import { Locator, test } from '@playwright/test';

test('logicnextgen', async ({ page }) => {

    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/register.php");

    const firstName: Locator = page.locator('#firstName')
    await firstName.fill("Mridula")

    const lastName: Locator = page.locator('#lastName')
    await lastName.fill("Thakur")

    const emailId: Locator = page.locator('#email')
    await emailId.fill('mridu@gamil.com')

    const userId: Locator = page.locator('#username')
    await userId.fill('mridularaje')

    const address: Locator = page.locator('#address')
    await address.fill('New Ashok Nagar')

    const address2: Locator = page.locator('#address2')
    await address2.fill('New Ashok Nagar2')

    //DROPDOWNS
    const country: Locator = page.locator('#country')
    await page.locator('#country').selectOption('INDIA');

    const state: Locator = page.locator('#state')
    await page.locator('#state').selectOption('Rajasthan');

    const zip: Locator = page.locator('#zip')
    await zip.fill('110097')

    const shippingAddressKapoor1 = page.locator('#ShippingAddressKapoor1');
    await shippingAddressKapoor1.check();

    const billingAddressKapoor2 = page.locator('#BillingAddressKapoor2');
    await billingAddressKapoor2.check();

    const creditcard1 = page.locator('#Creditcard1');
    await creditcard1.check();

    const debitcard1 = page.locator('#Debitcard1');
    await debitcard1.check();

    const paypal1 = page.locator('#Paypal1');
    await paypal1.check();

    const ccname: Locator = page.locator('#cc-name')
    await ccname.fill('Mridu')

    const ccnumber: Locator = page.locator('#cc-number')
    await ccnumber.fill('1234567890')

    const ccexpiration: Locator = page.locator('#cc-expiration')
    await ccexpiration.fill('30/05/2026')

    const cccvv: Locator = page.locator('#cc-cvv')
    await cccvv.fill('1234')
    
    await page.waitForTimeout(30000);

    const Checkout1 = page.locator('#Checkout1')
    await Checkout1.click()


    await page.waitForTimeout(30000);


})