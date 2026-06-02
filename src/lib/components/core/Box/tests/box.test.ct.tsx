import { expect,test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test.describe('<Box /> responsive props', () => {
  test('applies raw css value when string is passed', async ({ mount }) => {
    const box = await mount(<Box blockSize="10rem" />)
    const blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('10rem')
  })

  test('uses base value at mobile and md value at wider viewport', async ({ mount, page }) => {
    const box = await mount(<Box blockSize={{ base: '8px', md: '16px' }} />)

    // narrow screen (mobile)
    await page.setViewportSize({ width: 375, height: 800 })
    let blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('8px')

    // jump to md breakpoint
    await page.setViewportSize({ width: 1024, height: 800 })
    await page.waitForTimeout(50)

    blockSize = await box.evaluate(el => el.style.blockSize)
    expect(blockSize).toBe('16px')
  })
})
