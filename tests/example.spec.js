// @ts-check
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress', exact: true }).click();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress', exact: true }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(1).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();

  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByRole('row', { name: 'Sleeveless Dress' }).locator('.cart_quantity_delete').click(); 
  await page.getByRole('row', { name: 'Stylish Dress' }).locator('.cart_quantity_delete').click(); 
  //await page.locator('#product-3 .cart_quantity_delete').click();
  await page.getByRole('link', { name: 'here' }).click();
});

