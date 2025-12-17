import { test, expect } from '@playwright/experimental-ct-react'
import { Box } from 'lib/components'

test('responsive inline style is applied on initial mount', async ({ mount, page }) => {
  await page.setViewportSize({ width: 375, height: 800 }) // base

  await mount(
    <Box tagAttrs={{ id: 'box' }} padding="12px">
      Box
    </Box>
  )

  const box = page.locator('#box')

  // style is applied
  await expect(box).toHaveCSS('padding', '12px')
})

test('responsive inline styles update with breakpoint changes', async ({ mount, page }) => {
  // base
  await page.setViewportSize({ width: 375, height: 800 })

  await mount(
    <Box tagAttrs={{ id: 'box' }} padding={{ base: '8px', md: '16px' }}>
      Responsive
    </Box>
  )

  const box = page.locator('#box')

  // base → base value applied
  await expect(box).toHaveCSS('padding', '8px')

  // md → override applied
  await page.setViewportSize({ width: 800, height: 800 })
  await expect(box).toHaveCSS('padding', '16px')

  // lg → md override persists (no responsive unsetting)
  await page.setViewportSize({ width: 1200, height: 800 })
  await expect(box).toHaveCSS('padding', '16px')
})
