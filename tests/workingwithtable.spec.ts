import { test, expect } from '@playwright/test';

test('test table', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable/');

  // Esperar que la tabla esté presente
  const table = page.locator('table');
  await expect(table).toBeVisible();

  // Obtener todas las filas de la tabla
  const rows = await page.locator('table tbody tr').all();
  console.log(`Total de filas: ${rows.length}`);

  // Imprimir cada fila
  for (let i = 0; i < rows.length; i++) {
    const cells = await rows[i].locator('td').all();
    const rowData: (string | null)[] = [];

    for (let j = 0; j < cells.length; j++) {
      const text = await cells[j].textContent();
      rowData.push(text?.trim() ?? null);
    }

    console.log(`Fila ${i + 1}:`, rowData);
  }

  // Imprimir todo el HTML de la tabla (opcional)
  const tableHtml = await page.locator('table').innerHTML();
  console.log('HTML tabla:', tableHtml);
});