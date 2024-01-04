const InventoryPageLocators = require('../Locators/InventoryPageLocators');

class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async clickBuyButtonOne() {
    await this.page.click(InventoryPageLocators.ADD_BACKPACK_BUTTON);
  }

  async clickBuyButtonTwo() {
    await this.page.click(InventoryPageLocators.ADD_BIKE_LIGHT_BUTTON);
  }

  async clickCartButton() {
    await this.page.click(InventoryPageLocators.CART_BUTTON);
  }
}

module.exports = InventoryPage;
