// tests/text.responsive.spec.ts
import { test, expect } from '@playwright/experimental-ct-react'
import { Text } from 'lib/components'

test.describe('Text responsive props', () => {
  test('fontSize responds to breakpoints', async ({ page, mount }) => {
    const component = await mount(<Text fontSize={{ base: 6, md: 10 }}>sample</Text>)

    // base
    await page.setViewportSize({ width: 360, height: 640 })
    await expect(component).toHaveCSS('font-size', '12px')

    // md
    await page.setViewportSize({ width: 1024, height: 768 })
    await expect(component).toHaveCSS('font-size', '20px')
  })

  test('lineHeight responds to breakpoints', async ({ page, mount }) => {
    const component = await mount(<Text lineHeight={{ base: 1, md: 2 }}>sample</Text>)

    // base
    await page.setViewportSize({ width: 375, height: 800 })
    await expect(component).toHaveCSS('line-height', '16px')

    // md
    await page.setViewportSize({ width: 1200, height: 900 })
    await expect(component).toHaveCSS('line-height', '32px')
  })
})
