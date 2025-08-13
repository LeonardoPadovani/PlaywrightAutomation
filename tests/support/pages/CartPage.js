const { expect } = require('@playwright/test')

export class CartPage {

    constructor (page) {
        this.page = page

    }

    async shopingCartHaveText(description,price) {
        const rows = this.page.getByRole('row')
        const prices = rows.locator('.cart_price')
        const descriptions = rows.locator('.cart_description')

        await expect(prices).toContainText(price)
        await expect(descriptions).toContainText(description)
        
    
    }

    async remove(description) {
        await this.page.getByRole('row', { name: description }).locator('.cart_quantity_delete').click() 

    }

    async clickHere() {
         await this.page.getByRole('link', { name: 'here' }).click()
    }

   

}