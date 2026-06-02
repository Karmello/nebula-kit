import { expect,test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Box does not write semantic dataset attribute when prop is absent', async ({ mount, page }) => {
  await mount(<Box tagAttrs={{ id: 'box' }}>Test</Box>)

  const box = page.locator('#box')
  await expect(box).not.toHaveAttribute('data-neb-box-intent')
})

test('Box writes semantic dataset attribute to DOM', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} intent="primary">
      Test
    </Box>
  )

  const box = page.locator('#box')

  // Assert the data attribute exists
  await expect(box).toHaveAttribute('data-neb-box-intent', 'primary')
})

test('responsive semantic dataset updates with breakpoint changes', async ({ mount, page }) => {
  await page.setViewportSize({ width: 375, height: 800 }) // base

  await mount(
    <Box tagAttrs={{ id: 'box' }} intent={{ base: 'primary', md: 'secondary' }}>
      Responsive
    </Box>
  )

  const box = page.locator('#box')

  // base
  await expect(box).toHaveAttribute('data-neb-box-intent', 'primary')

  // md
  await page.setViewportSize({ width: 800, height: 800 })
  await expect(box).toHaveAttribute('data-neb-box-intent', 'secondary')

  // lg (override persists)
  await page.setViewportSize({ width: 1200, height: 800 })
  await expect(box).toHaveAttribute('data-neb-box-intent', 'secondary')
})
