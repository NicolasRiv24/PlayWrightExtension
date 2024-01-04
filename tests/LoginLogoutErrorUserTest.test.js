const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');

test('LoginLogoutErrorUserTest', async ({ page }) => {
  // Crear instancias de las páginas
  const loginPage = new LoginPage(page);
  
  // Navigate to the Login Page
  await page.goto('https://www.saucedemo.com/');
  // Expect | For the login URL
  expect(page.url()).toBe('https://www.saucedemo.com/');  
  expect(page.locator('svg.').nth(1)).toBeHidden;
  expect(page.locator('svg.').first()).toBeHidden;
  expect(page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.$/ })).toBeHidden;
    

  // Login Page 
  await loginPage.setTextInUsernameBox('locked_out_user');
  await loginPage.setTextInPasswordBox('secret_sauce');
  await loginPage.clickLoginButton();
  // Expect | Error icons and message
  expect(page.locator('svg.').nth(1)).toBeVisible;
  expect(page.locator('svg.').first()).toBeVisible;
  expect(page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.$/ })).toBeVisible;
  expect(page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.$/ })).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  
  // Clicking on [x] Button to close the error messages
  await page.locator('[data-test="error"]').getByRole('button').click();
  // Expect | For verifying the Hidden of the error messages
  expect(page.locator('svg.').nth(1)).toBeHidden;
  expect(page.locator('svg.').first()).toBeHidden;
  expect(page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.$/ })).toBeHidden;

});