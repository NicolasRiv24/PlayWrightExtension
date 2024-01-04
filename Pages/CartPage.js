const CartPageLocators = require('../Locators/CartPageLocators');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCheckOut() {
    await this.page.click(CartPageLocators.CHECKOUT_BUTTON);
  }
}

module.exports = CartPage;
