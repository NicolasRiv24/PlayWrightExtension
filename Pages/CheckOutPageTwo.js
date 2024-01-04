const CheckOutPageTwoLocators = require('../Locators/CheckOutPageTwoLocators');

class CheckOutPageTwo{
    constructor(page){
        this.page = page;
    }

    async clickFinish(){
        await this.page.click(CheckOutPageTwoLocators.FINISH_BUTTON);
    }
}

module.exports = CheckOutPageTwo;