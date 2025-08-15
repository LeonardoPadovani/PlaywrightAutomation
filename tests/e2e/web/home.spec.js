const { test } = require('../../support/index.js')
const { expect, request } = require('@playwright/test')
const data_login = require('../../support/web/fixtures/login.json')


test.describe('[@web] Home', () => {
    test('deve acessar a pagina home do sistem', async ({ page }) => {

        await page.home.visit()
        await page.home.goHome()
        await page.home.goProducts()

        await page.products.goWomen()
        await page.products.goDress()
        await page.products.viewProduct()
        await page.products.addToCart()
        await page.products.viewCart()

        await page.cart.shopingCartHaveText('Sleeveless Dress', 'Rs. 1000')
        await page.cart.remove('Sleeveless Dress')
        await page.cart.clickHere()



    });

});