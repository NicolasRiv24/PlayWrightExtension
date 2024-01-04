const SideBarLocators = require('../Locators/SideBarLocators');

class SideBar {
    constructor(page){
        this.page = page;
    }

    async clickSideBar(){
        await this.page.click(SideBarLocators.SIDE_BAR_BUTTON);
    }
    async clickLogOut(){
        await this.page.click(SideBarLocators.LOG_OUT_BUTTON);
    }
}

module.exports = SideBar;