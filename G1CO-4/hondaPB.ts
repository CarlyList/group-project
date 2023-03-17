import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    searchBar: By = By.name("q");
    shoppingDrop: By = By.xpath('(//i[@class="mi-chevron-down"])[2]')
    changeChinese: By = By.css('[data-attribute="global_nav:language:chinese"]');

    searchInventoy: By = By.css('[href="/tools/search-inventory"]')
    zipCodeEnter: By = By.css('[class="input"]')
    zipCodeButton: By = By.css('[data-tap-element-id="geolocation-submit"]')

    results: By = By.id('rso')
    constructor() {
        super({url: "https://automobiles.honda.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }

    
}