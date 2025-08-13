const { test } = require('../support')
const { expect, request } = require('@playwright/test')


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

test('POST cria novo recurso e valida resposta', async ({ request }) => {
  const newPost = {
    username: 'leonardo@teste',
    password: '123456',
    
  };

  const response = await request.api.setToken(newPost)
  // Valida status 201 (Created)
  expect(response.status()).toBe(401);

  // Converte resposta para JSON
 // const responseBody = await response.json();

  // Valida se os dados retornados batem com os enviados
  //expect(responseBody).toMatchObject(newPost);

  // Valida se um ID foi gerado
  expect(response).toHaveProperty('token');
});