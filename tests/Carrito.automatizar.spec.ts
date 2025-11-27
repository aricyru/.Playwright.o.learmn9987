import { test, expect } from '@playwright/test';
test('website', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

 /* una opcion es hacerlo asi. Yo lo hice con cloude.
 await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();*/

// Esperar a que la navegación complete o que aparezca un elemento de la página siguiente

await page.getByRole('textbox', {name: 'username'}).fill('standard_user');
await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();


await page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Backpack' }).click();
await page.locator('[data-test="add-to-cart"]').click();
await page.locator('[data-test="shopping-cart-badge"]').click();
await page.locator('[name="checkout"]').click();

await page.getByRole('textbox', {name: 'First Name'}).fill('Gorrion');
await page.getByRole('textbox', {name: 'Last Name'}).fill('Jr');
await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('1111');
await page.getByRole('button', {name: 'Continue'}).click();
await page.getByRole('button', {name: 'Finish'}).click();
await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();

});