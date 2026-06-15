import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/webTables.php")
    const table: Locator = page.locator('#product');

    //1.Count row
    let row = table.locator('tr')
    let storeRowCount = await row.count()
    console.log(storeRowCount)


    //2. Count column 
    let colum = row.locator('th')
    let storColumnCount = await colum.count()
    console.log(storColumnCount)

    //3. Read it 3rd row data
    let rowData = row.nth(3).locator('td')
    let textRowData = await rowData.allInnerTexts()
    console.log(textRowData)

    for (let text of textRowData) {
        console.log(text)
    }

    //4. Read all data from table
    let allRowData = await row.all()
    console.log(allRowData)

    for (let row of allRowData) {
        const cols = await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }

   //5. Found Author Name
     const authorName: string[] = [];
    for (let row of allRowData.slice(1)) {
        const authName = await row.locator('td').nth(0).innerText();
        if (authName === 'RahulKapoor') {
            console.log("Only Print Rahul >", authName);
           authorName.push(authName);
           console.log(authorName)
        }
    }


  // calculate the price of books?
  let priceValue = 0
  const bookPrice: number[] = [];
  for(let price of allRowData.slice(1)){
    const priceB = await price.locator('td').nth(2).innerText();

    priceValue = priceValue + Number(priceB)
    console.log("total price value  ----",priceValue)
  
}
  console.log(priceValue)
    //    if (priceB === '900') {
    //         console.log("Only Print price >", 900);
    //        bookPrice.push(Number(priceB));
    //        console.log(bookPrice)
//     //     }
//   }
    await page.waitForTimeout(30000);

})