import {Google} from './hondaPB'
import {BasePage} from "./basePage"
import { Driver } from 'selenium-webdriver/chrome'

const fs = require('fs') //only needed if doing screenshots
const honda = new Google()



test('Functionality of Search Invnentory', async () => {
    await honda.navigate()
    await honda.driver.manage().window().maximize()
    await honda.click(honda.shoppingDrop)
    await honda.click(honda.searchInventoy)
    await honda.click(honda.zipCodeButton)


})