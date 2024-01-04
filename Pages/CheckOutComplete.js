const CheckOutCompleteLocators = require('../Locators/CheckOutCompleteLocators');

class CheckOutComplete {
    constructor(page){
        this.page = page;
    }

    async clickBuy(){
        await this.page.click(CheckOutCompleteLocators.BACK_HOME_BUTTON);
    }
}

module.exports = CheckOutComplete;