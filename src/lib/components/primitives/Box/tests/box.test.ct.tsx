import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from '../box'

test('pb > py > p at base', async ({ mount }) => {
  const cmp = await mount(<Box p="5px" py="9px" pb="20px" />)
  await expect(cmp).toHaveCSS('padding-bottom', '20px')
  await expect(cmp).toHaveCSS('padding-top', '9px')
})

test('py@md overrides pb@base at md', async ({ mount, page }) => {
  await page.setViewportSize({ width: 800, height: 700 }) // ≥768 = md in your scale
  const cmp = await mount(<Box p="5px" pb="20px" py={{ md: '10px' }} />)
  await expect(cmp).toHaveCSS('padding-bottom', '10px')
})
