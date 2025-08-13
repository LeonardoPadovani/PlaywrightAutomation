const { test: base, expect } = require('@playwright/test')

const { HomePage } = require('./pages/HomePage')
const { ProductsPage } = require('./pages/ProductsPage')
const { CartPage } = require('./pages/CartPage')

const { Api } = require('./api')


const test = base.extend({
    page: async ({ page }, use) => {
        const context = page
        context['home'] = new HomePage(page)
        context['products'] = new ProductsPage(page)
        context['cart'] = new CartPage(page)

        await use(context)
    },
    request: async ({ request }, use) => {
        const context = request
        context['api'] = new Api(request)

        await use(context)

    }

     

})

export { test, expect }