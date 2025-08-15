const { expect } = require('@playwright/test')

export class ProductsPage {

    constructor (page) {
        this.page = page

    }

    async goWomen() {
        await this.page.getByRole('link', { name: ' Women' }).click()

    }

    async goDress() {
        await this.page.getByRole('link', { name: 'Dress', exact: true }).click()
    }

    async viewProduct() {
        await this.page.getByRole('link', { name: ' View Product' }).first().click()
    }

    async addToCart() {
        await this.page.getByRole('button', { name: ' Add to cart' }).click()
    }

    async viewCart() {
         await this.page.getByRole('link', { name: 'View Cart' }).click()
    }

   

}