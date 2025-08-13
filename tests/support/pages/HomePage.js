const { expect } = require('@playwright/test')

export class HomePage {

    constructor (page) {
        this.page = page

    }

    async visit() {
        await this.page.goto('https://www.automationexercise.com/')

    }

    async goHome() {
        await this.page.getByRole('link', { name: ' Home' }).click()
    }

    async goProducts() {
        await this.page.getByRole('link', { name: ' Products' }).click()
    }

}