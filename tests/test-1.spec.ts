import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'iPhone 14 128 GB amarillo' }).first().click();
  
});