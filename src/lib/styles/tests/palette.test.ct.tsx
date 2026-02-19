import { test, expect } from '@playwright/experimental-ct-react'
import tinycolor from 'tinycolor2'

test('Global palette token --neb-red-5 resolves to a valid RGB color', async ({ page }) => {
  const raw = await page.evaluate(() => {
    return getComputedStyle(document.documentElement).getPropertyValue('--neb-red-5').trim()
  })

  expect(raw).not.toBe('')

  const rgb = tinycolor(raw).toRgbString()
  expect(rgb).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/)
})
