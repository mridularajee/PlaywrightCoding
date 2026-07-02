import { Locator, test, expect } from '@playwright/test';

// beforeAll → Runs once before all tests.
// beforeEach → Runs before every test.
// afterEach → Runs after every test.
// afterAll → Runs once after all tests.


//******************flow***********************//

// browser launch

// login
// this is Test1 ......
// logout

// login
// this is Test2 ......
// logout

// login
// this is Test3 ......
// logout

// login
// this is Test4 ......
// logout

// browser close

test.beforeAll(async () => {
  console.log("browser launch");
});

test.afterAll(async () => {
  console.log("browser close");
});

test.beforeEach(async () => {
  console.log("login");
});

test.afterEach(async () => {
  console.log("logout");
});

test('Test1', async ({page}) => {
    
     console.log(" this is Test1 ......")
     
});

test('Test2', async ({page}) => {
      
     console.log(" this is Test2 ......")
     
});

test('Test3', async ({page}) => {
      
     console.log(" this is Test3 ......")
     
});

test('Test4', async ({page}) => {
      
     console.log(" this is Test4 ......")
     
});