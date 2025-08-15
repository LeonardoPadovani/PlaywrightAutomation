const { test } = require('../../support/index.js')
const { expect, request } = require('@playwright/test')
const { Validador } = require('../../support/api/utils/validador.js')


test('GET Produtos', async ({ request }) => {

    const chaves = ['id', 'title', 'price', 'description', 'category', 'image', 'rating']

    const produtoSchema = {
        id: expect.any(Number),
        title: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        category: expect.any(String),
        image: expect.any(String),
        rating: {
            rate: expect.any(Number),
            count: expect.any(Number),
        },
    }

    const { response, responseBody } = await request.apiTest.getProducts(1)

    Validador.validaStatusCode(response, 200)
    Validador.validaChaves(responseBody, Object.keys(produtoSchema))
    Validador.validaChaves(responseBody.rating, ['rate', 'count'])
    Validador.validaTiposDoSchema(responseBody, produtoSchema)
    Validador.validaObjetoComSchema(responseBody, produtoSchema)

    Validador.validaConteudo(responseBody, {
        category: "men's clothing",
        id: 1,
    })

    Validador.validaConteudo(responseBody, {
        price: (v) => v > 0,
        title: (v) => typeof v === 'string' && v.length > 5,
    });








    // Valida tipos dos campos principais
    expect(typeof responseBody.id).toBe('number')
    expect(typeof responseBody.title).toBe('string')
    expect(typeof responseBody.price).toBe('number')
    expect(typeof responseBody.description).toBe('string')
    expect(typeof responseBody.category).toBe('string')
    expect(typeof responseBody.image).toBe('string')

    // Valida subcampos de rating
    expect(responseBody.rating).toMatchObject({
        rate: expect.any(Number),
        count: expect.any(Number),
    })

})