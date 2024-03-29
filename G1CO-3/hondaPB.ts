import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    searchBar: By = By.name("q");
    englishDrop: By = By.xpath('(//i[@class="mi-chevron-down"])[5]')
    changeChinese: By = By.css('[data-attribute="global_nav:language:chinese"]');
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