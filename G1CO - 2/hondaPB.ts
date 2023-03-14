import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    location: By = By.xpath('(//span[@class="global-nav-zipcode"])[2]')
    zipcode: By = By.xpath('(//input[@class="input"])[2]')
    submit: By = By.xpath('//button[@class="m_cta is-on-light is-secondary "]')
    constructor() {
        super({url: "https://automobiles.honda.com/"});
    }
    
}