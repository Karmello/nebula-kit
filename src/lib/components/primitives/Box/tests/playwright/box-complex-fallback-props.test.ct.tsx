import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  sm: { width: 480, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
  xl: { width: 1280, height: 800 },
}

test.describe('Box - padding precedence & responsive behavior', () => {
  test('base: pb > py > p; pt uses py > p; left/right use px > p', async ({ mount }) => {
    const cmp = await mount(<Box p="5px" px="7px" py="9px" pb="20px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-bottom', '20px') // pb > py > p
    await expect(cmp).toHaveCSS('padding-top', '9px') // py > p
    await expect(cmp).toHaveCSS('padding-right', '7px') // px > p
    await expect(cmp).toHaveCSS('padding-left', '7px')
  })

  test('base: side-only props set the expected edges', async ({ mount }) => {
    const cmp = await mount(<Box pt="1px" pr="2px" pb="3px" pl="4px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '1px')
    await expect(cmp).toHaveCSS('padding-right', '2px')
    await expect(cmp).toHaveCSS('padding-bottom', '3px')
    await expect(cmp).toHaveCSS('padding-left', '4px')
  })

  test('base: px does not affect top/bottom; py does not affect left/right', async ({ mount }) => {
    const cmp = await mount(<Box px="10px" py="6px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-left', '10px')
    await expect(cmp).toHaveCSS('padding-right', '10px')
    await expect(cmp).toHaveCSS('padding-top', '6px')
    await expect(cmp).toHaveCSS('padding-bottom', '6px')
  })

  test('md: py@md overrides pb@base (breakpoint wins over base specificity)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box p="5px" pb="20px" py={{ md: '10px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-bottom', '10px') // md value beats base pb
    await expect(cmp).toHaveCSS('padding-top', '10px')
  })

  test('md: pb@md beats py@md (side > axis within same bp)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box pb={{ md: '14px' }} py={{ md: '10px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-bottom', '14px') // side beats axis at md
  })

  test('md: fallback from sm when md missing (py@sm overrides p@base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box p="6px" py={{ sm: '11px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '11px')
    await expect(cmp).toHaveCSS('padding-bottom', '11px')
  })

  test('xl: pb@lg should apply at xl when xl missing (xl→lg→md→sm→base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(<Box p="4px" pb={{ lg: '18px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-bottom', '18px') // falls back from xl to lg
    await expect(cmp).toHaveCSS('padding-top', '4px')
  })

  test('lg: explicit p@lg should override base p for all sides not set more specifically', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Box p={{ lg: '12px' }} pl="1px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '12px')
    await expect(cmp).toHaveCSS('padding-right', '12px')
    await expect(cmp).toHaveCSS('padding-bottom', '12px')
    await expect(cmp).toHaveCSS('padding-left', '12px')
  })
})

test.describe('Box - margin precedence & responsive behavior', () => {
  test('base: mb > my > m; mt uses my > m; left/right use mx > m', async ({ mount }) => {
    const cmp = await mount(<Box m="4px" mx="8px" my="10px" mb="20px" data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-bottom', '20px') // mb > my > m
    await expect(cmp).toHaveCSS('margin-top', '10px') // my > m
    await expect(cmp).toHaveCSS('margin-right', '8px') // mx > m
    await expect(cmp).toHaveCSS('margin-left', '8px')
  })

  test('base: side-only margins', async ({ mount }) => {
    const cmp = await mount(<Box mt="1px" mr="2px" mb="3px" ml="4px" data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-top', '1px')
    await expect(cmp).toHaveCSS('margin-right', '2px')
    await expect(cmp).toHaveCSS('margin-bottom', '3px')
    await expect(cmp).toHaveCSS('margin-left', '4px')
  })

  test('md: my@md overrides mb@base (bp wins over base specificity)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box m="4px" mb="20px" my={{ md: '10px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-bottom', '10px')
    await expect(cmp).toHaveCSS('margin-top', '10px')
  })

  test('md: mb@md beats my@md (side > axis within same bp)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box my={{ md: '10px' }} mb={{ md: '14px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-bottom', '14px')
  })

  test('lg: fallback chain picks sm over base when md/lg missing', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Box m="6px" my={{ sm: '12px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-top', '12px')
    await expect(cmp).toHaveCSS('margin-bottom', '12px')
  })

  test('xl: m@lg applies at xl if no xl override', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(<Box m={{ lg: '13px' }} ml="1px" data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-top', '13px')
    await expect(cmp).toHaveCSS('margin-right', '13px')
    await expect(cmp).toHaveCSS('margin-bottom', '13px')
    await expect(cmp).toHaveCSS('margin-left', '13px')
  })
})

test.describe('Box - mixed padding + margin (no cross-bleed)', () => {
  test('padding props don’t affect margins and vice versa', async ({ mount }) => {
    const cmp = await mount(<Box p="5px" pb="9px" m="7px" mb="11px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '5px')
    await expect(cmp).toHaveCSS('padding-bottom', '9px')
    await expect(cmp).toHaveCSS('margin-top', '7px')
    await expect(cmp).toHaveCSS('margin-bottom', '11px')
  })
})
