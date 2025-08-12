const { test: base, expect } = require('@playwright/test')

const { HomePage } = require('../pages/HomePage')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')

const test = base.extend({
    page: async ({page}, use) => {
        await use({
            ...page,
            home: new HomePage(page),
            products: new ProductsPage(page),
            cart: new CartPage(page)

            
        })
    }

})

export { test, expect }