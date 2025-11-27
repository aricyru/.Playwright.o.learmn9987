import { test, expect } from '@playwright/test';
import { LoginPage } from './Pageobjects/Loginpage';

test('flujo completo de login', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://www.saucedemo.com/');
  
  // Crear instancia del Page Object
  const loginPage = new LoginPage(page);
  
  // Ejecutar login
  await loginPage.fillUsername();
  await loginPage.Password();
  await loginPage.clickOnlogin();
  
  await page.screenshot({ path: 'Screenshots/login-success.png', fullPage: true });
  console.log('Login exitoso');
});