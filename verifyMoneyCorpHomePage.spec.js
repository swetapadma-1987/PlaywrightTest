// @ts-check
const { test,expect } = require('@playwright/test')

test('Verify Money Corp Launch Page', async ({ page }) => {
   
await page.goto('https://www.moneycorp.com/en-gb/')
await expect(page).toHaveURL(/en-gb/);
console.log('Successfully launched  Moneycorp page')
await page.locator("//button[@id='language-dropdown-flag']").click();
console.log('Successfully clicked on flag selection')
await page.locator("//a[@aria-label='USA English']").click();
console.log('Successfully clicked on USA English')
await page.getByText("Business").click;
console.log('Successfully clicked on Business')
await page.locator("//div/a[@href='/en-us/business/foreign-exchange-solutions/']").click();
console.log('Successfully clicked on Find More link')
await page.waitForURL('https://www.moneycorp.com/en-us/business/foreign-exchange-solutions/');
await expect(page).toHaveURL(/foreign-exchange-solutions/);
console.log('Landed on foreign exchange solutions page');
//await page.getByPlaceholder("Search").type("international payments");
await page.locator("//div[@class='u-flex u-flex-align-center u-flex-justify-end']//input[@type='submit']/preceding-sibling::input[@id='nav_search']").type("international payments");
console.log('Entered text successfully');
await page.locator("//div[@class='u-flex u-flex-align-center u-flex-justify-end']//input[@type='submit']/preceding-sibling::input[@id='nav_search']").click();
console.log('Search completed successfully');
 const res = await page.locator("//div/h2[contains(text(),'Search')]".toString());
 await expect(res).toBeTruthy;
 console.log('landed on search page');
  const inputElement = await page.locator("//div/a[@class='title u-m-b2']");
  let MyMap = new Map();
  for (let index = 0; index < MyMap.size; index++) {
    const inputElement = MyMap[index];
    MyMap.set(index,inputElement);
  }
  MyMap.forEach(function(value) { console.log(value);});
  });
  
  



/*test('Verify Language Selected as USA(English)', async ({ page }) => {

    await page.goto('https://www.moneycorp.com/en-gb/');
    
    await page.locator("//button[@id='language-dropdown-flag']").click();
    await page.getByText('USA').click();
    expect(page).toHaveTitle('Foreign exchange solutions for your business');
    console.log('clicked on the Language button');
 });
 test('Verify Foreign Exchange Solutions Page ', async ({ page }) => {

    await page.goto('https://www.moneycorp.com/en-gb/');
    
    await page.locator("//button[@id='language-dropdown-flag']").click();
    await page.getByText('USA').click();
    console.log('clicked on the Language button');
});*/