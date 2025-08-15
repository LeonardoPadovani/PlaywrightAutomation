const { expect } = require('@playwright/test')

export class HomePage {

    constructor (page) {
        this.page = page
        this.baseUrl = process.env.BASE_URL

    }

    async visit() {
        await this.page.goto(this.baseUrl + '/')

    }

    async goHome() {
        await this.page.getByRole('link', { name: ' Home' }).click()
    }

    async goProducts() {
        await this.page.getByRole('link', { name: ' Products' }).click()
    }

}