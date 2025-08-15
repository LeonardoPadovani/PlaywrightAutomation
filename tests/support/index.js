const { test: base, expect } = require('@playwright/test')

const { HomePage } = require('./web/pages/HomePage')
const { ProductsPage } = require('./web/pages/ProductsPage')
const { CartPage } = require('./web/pages/CartPage')

const { ApiTest } = require('./api/helpers/api-test-helper')


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
        context['apiTest'] = new ApiTest(request)

        await use(context)

    }



})

export { test, expect }