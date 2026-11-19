import { test, expect } from '@playwright/test'

test('home mostra o título', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  await expect(page.locator('#stack')).toBeVisible()
})

test('abre o detalhe de uma tecnologia', async ({ page }) => {
  await page.goto('/')
  await page.locator('.tech', { hasText: 'Redis' }).first().click()
  await expect(page.getByRole('dialog')).toContainText('Redis')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})
