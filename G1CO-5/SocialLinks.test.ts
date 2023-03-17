import {Google} from './hondaPB'
import {BasePage} from "./basePage"
import { Driver } from 'selenium-webdriver/chrome'

const fs = require('fs') //only needed if doing screenshots
const honda = new Google()

 

test('Functionality of Social Links', async () => {
    await honda.navigate()
    await honda.driver.manage().window().maximize()
    await honda.click(honda.Twitter)
    await honda.click(honda.TikTok)
    await honda.click(honda.Instagram)
    await honda.click(honda.Facebook)
    await honda.click(honda.Linkedin)
    await honda.click(honda.YouTube)
    await honda.click(honda.Pintrest)
    await honda.click(honda.Snapchat)
})