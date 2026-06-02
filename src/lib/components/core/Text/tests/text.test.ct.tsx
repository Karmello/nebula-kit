import { expect, test } from '@playwright/experimental-ct-react'

import { Text } from 'lib/components'

test.describe('Text responsive props', () => {
  test('textAlign responds to breakpoints', async ({ page, mount }) => {
    const component = await mount(<Text textAlign={{ base: 'end', md: 'center' }}>sample</Text>)

    // base
    await page.setViewportSize({ width: 360, height: 640 })
    await expect(component).toHaveCSS('text-align', 'end')

    // md
    await page.setViewportSize({ width: 1024, height: 768 })
    await expect(component).toHaveCSS('text-align', 'center')
  })
})
