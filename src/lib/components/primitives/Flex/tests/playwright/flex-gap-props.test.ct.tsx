import { test, expect } from '@playwright/experimental-ct-react'

import { Flex } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  sm: { width: 480, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
  xl: { width: 1280, height: 800 },
}

test.describe('Flex - gap / rowGap / columnGap precedence & responsiveness', () => {
  test('base: rowGap overrides gap for row-gap; columnGap overrides gap for column-gap', async ({
    mount,
  }) => {
    const cmp = await mount(<Flex data-testid="flex" gap="6px" rowGap="10px" columnGap="14px" />)

    await expect(cmp).toHaveCSS('row-gap', '10px') // rowGap > gap
    await expect(cmp).toHaveCSS('column-gap', '14px') // columnGap > gap
  })

  test('base: gap alone sets both row-gap and column-gap', async ({ mount }) => {
    const cmp = await mount(<Flex gap="8px" />)

    await expect(cmp).toHaveCSS('row-gap', '8px')
    await expect(cmp).toHaveCSS('column-gap', '8px')
  })

  test('md: gap@md overrides rowGap@base (breakpoint beats base specificity)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Flex gap={{ md: '24px' }} rowGap="8px" />)

    await expect(cmp).toHaveCSS('row-gap', '24px') // md wins over base rowGap
    await expect(cmp).toHaveCSS('column-gap', '24px') // shorthand applies to both
  })

  test('md: rowGap@md overrides gap@md for row-gap (side > shorthand within same bp)', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Flex gap={{ md: '24px' }} rowGap={{ md: '12px' }} />)

    await expect(cmp).toHaveCSS('row-gap', '12px') // side wins at md
    await expect(cmp).toHaveCSS('column-gap', '24px') // unaffected, from gap@md
  })

  test('lg: columnGap@lg overrides gap@lg for column-gap', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Flex gap={{ lg: '20px' }} columnGap={{ lg: '16px' }} />)

    await expect(cmp).toHaveCSS('column-gap', '16px') // side wins at lg
    await expect(cmp).toHaveCSS('row-gap', '20px') // from gap@lg
  })

  test('xl: fallback chain uses lg when xl missing (xl→lg→md→sm→base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(<Flex gap={{ lg: '10px' }} />)

    await expect(cmp).toHaveCSS('row-gap', '10px') // falls back from xl to lg
    await expect(cmp).toHaveCSS('column-gap', '10px')
  })

  test('base vs lg: base columnGap does not “lock” lg; gap@lg still overrides', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Flex columnGap="3px" gap={{ lg: '12px' }} />)

    await expect(cmp).toHaveCSS('column-gap', '12px') // bp shorthand beats base side
    await expect(cmp).toHaveCSS('row-gap', '12px') // from gap@lg
  })
})
