import {Google} from './hondaPB'
import {BasePage} from "./basePage"
import { Driver } from 'selenium-webdriver/chrome'
import { WebDriver } from 'selenium-webdriver'
const fs = require('fs') //only needed if doing screenshots
const honda = new Google()

 

test('Functionality of language swap', async () => {
    await honda.navigate()
    await honda.driver.manage().window().maximize()
    await honda.click(honda.englishDrop)
    await honda.click(honda.changeChinese)
})