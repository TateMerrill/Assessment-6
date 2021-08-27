import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(3000)
    driver.navigate().refresh()
    
}),

test('Clicking top left square adds an X', async () => {
    let button = await (await driver).findElement(By.id('start-game'))
    await button.click()
    let topleft = await (await driver).findElement(By.id('cell-0'))
    await topleft.click()
    await driver.sleep(3000)
    driver.navigate().refresh()
}),

test('Clicking top right square add an X', async () => {
    let button = await (await driver).findElement(By.id('start-game'))
    await button.click()
    let topright = await (await driver).findElement(By.id('cell-2'))
    await topright.click()
    await driver.sleep(3000)
    driver.navigate().refresh();
}),

test('Clicking bottom right square adds an X', async () =>{
    let button = await (await driver).findElement(By.id('start-game'))
    await button.click()
    let bottomright = await (await driver).findElement(By.id('cell-8'))
    await bottomright.click()
    await driver.sleep(3000)
    driver.navigate().refresh();
})