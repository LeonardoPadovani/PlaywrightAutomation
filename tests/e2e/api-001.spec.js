const { test } = require('../support')
const { expect, request } = require('@playwright/test')

test('GET Produtos', async ({ request }) => {

    const response = await request.api.getProducts(1)
    const responseBody = await response.json();

    // Verifica se a resposta foi recebida
    expect(response).toBeDefined();

    // Valida o status HTTP
    expect(response.status()).toBe(200);

    // Valida que não há campos inesperados (opcional)
    const expectedKeys = ['id', 'title', 'price', 'description', 'category', 'image', 'rating'];
    expect(Object.keys(responseBody).sort()).toEqual(expectedKeys.sort());

    // Valida tipos dos campos principais
    expect(typeof responseBody.id).toBe('number');
    expect(typeof responseBody.title).toBe('string');
    expect(typeof responseBody.price).toBe('number');
    expect(typeof responseBody.description).toBe('string');
    expect(typeof responseBody.category).toBe('string');
    expect(typeof responseBody.image).toBe('string');

    // Valida subcampos de rating
    expect(responseBody.rating).toMatchObject({
        rate: expect.any(Number),
        count: expect.any(Number),
    });

});