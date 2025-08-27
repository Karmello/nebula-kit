import { test, expect } from '@playwright/experimental-ct-react'

import { Flex } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  sm: { width: 480, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
  xl: { width: 1280, height: 800 },
}

test.describe('Flex - core props (direction, wrap, justify, align)', () => {
  test('base: renders as display:flex', async ({ mount }) => {
    const cmp = await mount(<Flex />)
    await expect(cmp).toHaveCSS('display', 'flex')
  })

  test('base: direction / wrap / justify / align set computed styles', async ({ mount }) => {
    const cmp = await mount(
      <Flex direction="row" wrap="wrap" justify="space-between" align="center" data-testid="flex" />
    )

    await expect(cmp).toHaveCSS('flex-direction', 'row')
    await expect(cmp).toHaveCSS('flex-wrap', 'wrap')
    await expect(cmp).toHaveCSS('justify-content', 'space-between')
    await expect(cmp).toHaveCSS('align-items', 'center')
  })

  test('base: direction column + nowrap + start/start', async ({ mount }) => {
    const cmp = await mount(<Flex direction="column" wrap="nowrap" justify="flex-start" align="flex-start" />)

    await expect(cmp).toHaveCSS('flex-direction', 'column')
    await expect(cmp).toHaveCSS('flex-wrap', 'nowrap')
    await expect(cmp).toHaveCSS('justify-content', 'flex-start')
    await expect(cmp).toHaveCSS('align-items', 'flex-start')
  })

  test('md: responsive override takes precedence over base', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Flex
        // responsive overrides at md
        justify={{ md: 'center' }}
        align={{ md: 'flex-end' }}
        direction={{ md: 'column' }}
        wrap={{ md: 'wrap' }}
      />
    )

    await expect(cmp).toHaveCSS('flex-direction', 'column')
    await expect(cmp).toHaveCSS('flex-wrap', 'wrap')
    await expect(cmp).toHaveCSS('justify-content', 'center')
    await expect(cmp).toHaveCSS('align-items', 'flex-end')
  })

  test('xl: fallback chain xl→lg→md→sm→base: uses lg when xl missing', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(
      <Flex
        // only lg provided
        direction={{ lg: 'column' }}
        justify={{ lg: 'space-around' }}
        align={{ lg: 'center' }}
      />
    )

    await expect(cmp).toHaveCSS('flex-direction', 'column') // from lg
    await expect(cmp).toHaveCSS('justify-content', 'space-around')
    await expect(cmp).toHaveCSS('align-items', 'center')
  })

  test('lg: base does not “lock”; bp override wins (even if base had different values)', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(
      <Flex
        // overrides at lg
        direction={{ lg: 'row' }}
        justify={{ lg: 'space-between' }}
        align={{ lg: 'stretch' }}
      />
    )

    await expect(cmp).toHaveCSS('flex-direction', 'row')
    await expect(cmp).toHaveCSS('justify-content', 'space-between')
    await expect(cmp).toHaveCSS('align-items', 'stretch')
  })

  test('md: partial responsive values only affect the overridden properties', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Flex
        direction="row"
        wrap="nowrap"
        align="center"
        // only override justify at md
        justify={{ md: 'space-evenly' }}
      />
    )

    await expect(cmp).toHaveCSS('justify-content', 'space-evenly') // overridden
    await expect(cmp).toHaveCSS('flex-direction', 'row') // unchanged
    await expect(cmp).toHaveCSS('flex-wrap', 'nowrap') // unchanged
    await expect(cmp).toHaveCSS('align-items', 'center') // unchanged
  })
})
