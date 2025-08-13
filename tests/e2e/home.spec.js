const { test } = require('../support')
const { expect, request } = require('@playwright/test')
const data_login = require('../support/fixtures/login.json')



test('deve acessar a pagina home do sistem', async ({ page }) => {

    await page.home.visit()
    await page.home.goHome()
    await page.home.goProducts()

    await page.products.goWomen()
    await page.products.goDress()
    await page.products.viewProduct()
    await page.products.addToCart()
    await page.products.viewCart()

    await page.cart.shopingCartHaveText('Sleeveless Dress','Rs. 1000')
    await page.cart.remove('Sleeveless Dress')
    await page.cart.clickHere()



});

test('POST com login valido', async ({ request }) => {
  const requestBody = data_login.valido

  const response = await request.api.setToken(requestBody)
  // Valida status 201 (Created)
  expect(response.status()).toBe(401);

  // Valida se os dados retornados batem com os enviados
  //expect(responseBody).toMatchObject(newPost);

  // Valida se um ID foi gerado
  expect(response).toHaveProperty('token');
});

test('POST com login sem senha', async ({ request }) => {
  const requestBody = data_login.semSenha

  const response = await request.api.setToken(requestBody)
  // Valida status 201 (Created)
  expect(response.status()).toBe(401);

  // Valida se os dados retornados batem com os enviados
  //expect(responseBody).toMatchObject(newPost);

  // Valida se um ID foi gerado
  expect(response).toHaveProperty('token');
});

test('POST com login sem User', async ({ request }) => {
  const requestBody = data_login.semUser

  const response = await request.api.setToken(requestBody)
  // Valida status 201 (Created)
  expect(response.status()).toBe(401);

  // Valida se os dados retornados batem com os enviados
  //expect(responseBody).toMatchObject(newPost);

  // Valida se um ID foi gerado
  expect(response).toHaveProperty('token');
});