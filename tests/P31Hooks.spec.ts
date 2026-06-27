import { Locator, test, expect } from '@playwright/test';


test.beforeAll('beforeAll', async () => {
    
     console.log("browser launch")  
});
test.afterAll('afterAll', async () => {
    
     console.log("browser close")   
});


test.beforeEach('beforeeach', async () => {
    
     console.log(" login")   
});
test.afterEach('afterEach', async () => {
    
     console.log("logout")    
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