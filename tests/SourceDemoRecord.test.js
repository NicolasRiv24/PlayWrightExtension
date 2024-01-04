import { test, expect } from '@playwright/test';

test('LoginLogoutRecorded', async ({ page }) => {
  
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    
    await page.locator('[data-test="login-button123"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('a').filter({ hasText: '2' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').press('CapsLock');
    await page.locator('[data-test="firstName"]').fill('S');
    await page.locator('[data-test="firstName"]').press('CapsLock');
    await page.locator('[data-test="firstName"]').fill('Susana');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').press('CapsLock');
    await page.locator('[data-test="lastName"]').fill('H');
    await page.locator('[data-test="lastName"]').press('CapsLock');
    await page.locator('[data-test="lastName"]').fill('Horia');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('0000');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});