const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const InventoryPage = require('../Pages/InventoryPage');
const CartPage = require('../Pages/CartPage');
const CheckOutComplete = require('../Pages/CheckOutComplete');
const CheckOutPage = require('../Pages/CheckoutPage');
const CheckOutPageTwo = require('../Pages/CheckOutPageTwo');
const SideBar = require('../Pages/SideBar');

test('LoginLogoutTest', async ({ page }) => {
  // Crear instancias de las páginas
  const loginPage = new LoginPage(page);
  const invetonryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);  
  const checkOutComplete = new CheckOutComplete(page); 
  const checkOutPage = new CheckOutPage(page);
  const checkOutPageTwo = new CheckOutPageTwo(page);
  const sideBar = new SideBar(page);
  
  // Navigate to the Login Page
  await page.goto('https://www.saucedemo.com/');
  // Expect | For the login URL
  expect(page.url()).toBe('https://www.saucedemo.com/');  

  // Login Page 
  await loginPage.setTextInUsernameBox('standard_user');
  await loginPage.setTextInPasswordBox('secret_sauce');
  await loginPage.clickLoginButton();
    
  // Expect | For the InventoryPage URL
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
  // InventoryPage | Buying things
  await invetonryPage.clickBuyButtonOne();
  await invetonryPage.clickBuyButtonTwo();
  // InventoryPage | Go to the cart
  await invetonryPage.clickCartButton();

  // Cart Page | CheckOut the buy
  await cartPage.clickCheckOut();

  // CheckOutPage | filling the form
  await checkOutPage.setTextFirstName('Primera');
  await checkOutPage.setTextLastName('Chamba');
  await checkOutPage.setTextPostalCode('0000');
  // CheckOutPage | Continue with the buy
  await checkOutPage.clickContinue();

  // CheckOutPageTwo | Finishing the buy
  await checkOutPageTwo.clickFinish();

  // CheckOutComplete | Buying and return to the Inventory Page
  await checkOutComplete.clickBuy();

  // SideBar | Open the SideBar
  await sideBar.clickSideBar();
  // SideBar | LogOut
  await sideBar.clickLogOut();


 
});
