const { test, expect } = require('@playwright/test');

test('LoginLogoutTest', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await page.click('#shopping_cart_container');
    await page.click('#checkout');
    await page.fill('#first-name', 'Susana');
    await page.fill('#last-name', 'Horia');
    await page.fill('#postal-code', '0000');
    await page.click('#continue');
    await page.click('#finish');
    await page.click('#back-to-products');
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

});