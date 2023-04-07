import { test, expect } from '@playwright/test'
import { resolve, join } from 'path'


const ROOT_PATH = resolve(__dirname, '..', 'screenshots')
test('should display the home page', async ({ page }) => {
    test.slow();
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
    await expect(page).toHaveURL("/")
    //await expect(page.getByRole('heading', { name: 'Hi! This is a simple Nuxt 3 app.' })).toBeVisible()

    var logo= page.locator('.nuxt-logo')
  // Step 1 - Ensure It is in home page after login
   // await page.screenshot({ path: join(ROOT_PATH, 'meow.png')})
    // The new page should contain an h3 with "You can deploy..."
    await expect(logo).toBeVisible()
    //await expect(page.locator('h1')).toContainText('Hi! This is a simple Nuxt 3 app.')
})


test('should go to new page and display time', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About Page' and click on it
  await page.getByRole('link', { name: 'the Microsoft documentation' }).click()
  // The new url should be "/project/facebook-react/" (baseURL is used there)
  await expect(page).toHaveURL('https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nuxtjs')
  // The new page should contain an h3 with "You can deploy..."
  await expect(page.getByRole('heading', { name: 'Deploy Nuxt 3 sites with universal rendering on Azure Static Web Apps' })).toBeVisible()
})