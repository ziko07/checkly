import { test, expect } from '@playwright/test'

test('webshop homepage', async ({ page, baseURL }) => {
  const response = await page.goto(baseURL)

  expect(response?.status()).toBeLessThan(400)
  console.log("this is the test data check");
  await expect(page).toHaveTitle(/Danube WebShop/)
  await page.screenshot({ path: 'homepage.jpg' })
})
