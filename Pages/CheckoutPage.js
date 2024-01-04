const { text } = require('stream/consumers');
const CheckOutPageLocators = require ('../Locators/CheckOutPageLocators');

class CheckOutPage{
    constructor(page) {
        this.page = page;
    }

    async setTextFirstName(text){
        await this.page.fill(CheckOutPageLocators.FIRST_NAME_FIELD, text);
    }
    async setTextLastName(text){
        await this.page.fill(CheckOutPageLocators.LAST_NAME_FIELD, text);
    }
    async setTextPostalCode(text){
        await this.page.fill(CheckOutPageLocators.POSTAL_CODE_FIELD, text);
    }
    async clickContinue(){
        await this.page.click(CheckOutPageLocators.CONTINUE_BUTTON);
    }
}

module.exports = CheckOutPage;