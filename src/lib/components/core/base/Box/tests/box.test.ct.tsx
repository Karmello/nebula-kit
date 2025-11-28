import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test.describe('<Box /> responsive props', () => {
  test('applies scale token when number is passed', async ({ mount }) => {
    const box = await mount(<Box blockSize={8} />)
    const blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('var(--neb-scale-8)')
  })

  test('applies raw css value when string is passed', async ({ mount }) => {
    const box = await mount(<Box blockSize="10rem" />)
    const blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('10rem')
  })

  test('uses base value at mobile and md value at wider viewport', async ({ mount, page }) => {
    const box = await mount(<Box blockSize={{ base: 8, md: 16 }} />)

    // narrow screen (mobile)
    await page.setViewportSize({ width: 375, height: 800 })
    let blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('var(--neb-scale-8)')

    // jump to md breakpoint
    await page.setViewportSize({ width: 1024, height: 800 })
    await page.waitForTimeout(50)

    blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('var(--neb-scale-16)')
  })
})
