import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    searchBar: By = By.name("q");
    results: By = By.id('rso');

    Twitter: By = By.css('[href="https://twitter.com/Honda"]');
    TikTok: By = By.css('[href="https://www.tiktok.com/@honda?lang=en"]');
    Instagram: By = By.css('[href="https://instagram.com/honda/"]');
    Facebook: By = By.css('[href="https://www.facebook.com/Honda"]');
    Linkedin: By = By.css('[href="https://www.linkedin.com/company/american-honda-motor-company-inc-"]');
    YouTube: By = By.css('[href="https://www.youtube.com/user/Honda"]');
    Pintrest: By = By.css('[href="https://www.pinterest.com/honda/"]');
    Snapchat: By = By.css('[href="https://www.snapchat.com/add/officialhonda"]')

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