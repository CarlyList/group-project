import { Google } from "./hondaPB";
const fs = require('fs')
// fs is for screenshots stands for file system
const honda = new Google()

test("Zip Code Functionality on Home Scree", async() => {
    await honda.navigate()
    await honda.driver.manage().window().maximize()
    await honda.click(honda.location)
    await honda.setInput(honda.zipcode, "90805")
    await honda.click(honda.submit)
})