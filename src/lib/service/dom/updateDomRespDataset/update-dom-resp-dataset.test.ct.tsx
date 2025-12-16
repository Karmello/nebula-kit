import { test, expect } from '@playwright/experimental-ct-react'
import { Box } from 'lib/components'

test.describe('<Box /> dataset props', () => {
  test('applies dataset attributes responsively', async ({ mount, page }) => {
    const box = await mount(<Box intent={{ base: 'primary', lg: 'secondary' }} />)

    // base
    await page.setViewportSize({ width: 375, height: 800 })
    let intent = await box.evaluate(el => el.dataset.nebBoxIntent)
    expect(intent).toBe('primary')

    // lg
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.waitForTimeout(50)
    intent = await box.evaluate(el => el.dataset.nebBoxIntent)
    expect(intent).toBe('secondary')
  })
})
