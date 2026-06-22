import { Locator, test, expect } from '@playwright/test';

test('logicnextgen', async ({ page }) => {
    await page.goto("https://logicnextgen.com/projects/AutomationTestingPractice/webTables.php")
    const table: Locator = page.locator('#LogicWebsTable1');
    await expect(table).toBeVisible();


    //1. count rows in table 
    
    const rows: Locator = table.locator("tr");
    const rowCount: number = await rows.count();
    console.log("Number of rows in a table: ", rowCount);
    expect(rowCount).toBe(8);


    //2. Count columns in table
    const columns: Locator = rows.locator("th");
    const columnCount: number = await columns.count();
    console.log("Number of columns/headers: ", columnCount);
    expect(columnCount).toBe(6);

    //3. Read it all data from second row
    const secondRowCells: Locator = rows.nth(2).locator('td');
    const secondRowTexts: string[] = await secondRowCells.allInnerTexts();
    console.log("2nd Row data: ", secondRowTexts);

    await expect(secondRowCells).toHaveText(['Keshav', 'Kapoor', '45', 'Keshav@gmail.com', '12000', 'Compliance']);

    console.log("printing 2nd row data......")
    for (let text of secondRowTexts) {
        console.log("2nd row data in column > ", text);
    }

    //4. Read all data from table
    const allRowData = await rows.all();
    console.log(allRowData)

    for (let row of allRowData) {
        const cols = await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }

    //5. Found that person whose name is keshav in table
    const EmployeeFirstName: string[] = [];
    for (let row of allRowData.slice(1)) {
        const EmpFirstName = await row.locator('td').nth(0).innerText();
        if (EmpFirstName === 'Kundan') {
            console.log("Only Print Keshav >", EmpFirstName);
            EmployeeFirstName.push(EmpFirstName);
        }
    }
 
    expect(EmployeeFirstName).toHaveLength(2);


    await page.waitForTimeout(20000)

})