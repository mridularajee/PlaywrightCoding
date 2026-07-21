import { Locator, test, expect } from "@playwright/test";
import fs from 'fs';
import * as XLSX from 'xlsx';
//load data from excel sheet
const excelPath="testdata/data.xlsx";
const workbook=XLSX.readFile(excelPath);
const sheetNames=workbook.SheetNames[0];
const worksheet=workbook.Sheets[sheetNames];

//convert excel sheet to JSON
const loginTestData:any=XLSX.utils.sheet_to_json(worksheet);
console.log(loginTestData);


for (const { email, password } of loginTestData) {

   test(`Login test for ${email} and ${password}`, async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');
        await page.locator('#Email').fill(email);
        await page.locator('#Password').fill(password);
        await page.locator('input[value="Log in"]').click()
        await page.waitForTimeout(2000)

        
    })
}