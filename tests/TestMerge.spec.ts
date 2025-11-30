import { test, expect } from '@playwright/test';

test('01_verificacion_basica_google', async ({ page }) => {
    // Definimos el timeout para que este test no tarde mucho
    test.setTimeout(30000); 

    // 1. Navegar a una página conocida y estable
    await page.goto('https://www.google.com/');

    // 2. Expects: Verificamos que el título contenga la palabra "Google"
    await expect(page).toHaveTitle(/Google/);

    // 3. Verificamos que el campo de búsqueda principal esté visible
    await expect(page.locator('[aria-label="Buscar"]')).toBeVisible();

    console.log("¡TEST SIMPLE PASADO! Google Home cargó correctamente.");
});