const { test } = require('../../support/index.js')
const { expect, request } = require('@playwright/test')
const { Validador } = require('../../support/api/utils/validador.js')


test.describe('[@api] Produtos', () => {
    test('GET Produtos', async ({ request }) => {

        const { postProdutoSchema } = require('../../support/api/fixtures/produtos.json')

        const chaves = ['id', 'title', 'price', 'description', 'category', 'image', 'rating']

        const { response, responseBody } = await request.apiTest.getProducts(1)

        Validador.validaStatusCode(response, 200)
        Validador.validaSchema(postProdutoSchema, responseBody);

        Validador.validaConteudo(responseBody, {
            category: "men's clothing",
            id: 1,
        })

        Validador.validaConteudo(responseBody, {
            price: (v) => v > 0,
            title: (v) => typeof v === 'string' && v.length > 5,
        });

    });



});