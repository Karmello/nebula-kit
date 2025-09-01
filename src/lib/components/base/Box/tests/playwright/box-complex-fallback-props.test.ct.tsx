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
    const cmp = await mount(
      <Box padding="5px" paddingInline="7px" paddingBlock="9px" paddingBottom="20px" data-testid="box" />
    )

    await expect(cmp).toHaveCSS('padding-bottom', '20px') // pb > py > p
    await expect(cmp).toHaveCSS('padding-top', '9px') // py > p
    await expect(cmp).toHaveCSS('padding-right', '7px') // px > p
    await expect(cmp).toHaveCSS('padding-left', '7px')
  })

  test('base: side-only props set the expected edges', async ({ mount }) => {
    const cmp = await mount(
      <Box paddingTop="1px" paddingRight="2px" paddingBottom="3px" paddingLeft="4px" data-testid="box" />
    )

    await expect(cmp).toHaveCSS('padding-top', '1px')
    await expect(cmp).toHaveCSS('padding-right', '2px')
    await expect(cmp).toHaveCSS('padding-bottom', '3px')
    await expect(cmp).toHaveCSS('padding-left', '4px')
  })

  test('base: px does not affect top/bottom; py does not affect left/right', async ({ mount }) => {
    const cmp = await mount(<Box paddingInline="10px" paddingBlock="6px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-left', '10px')
    await expect(cmp).toHaveCSS('padding-right', '10px')
    await expect(cmp).toHaveCSS('padding-top', '6px')
    await expect(cmp).toHaveCSS('padding-bottom', '6px')
  })

  test('md: py@md overrides pb@base (breakpoint wins over base specificity)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box padding="5px" paddingBottom="20px" paddingBlock={{ md: '10px' }} data-testid="box" />
    )

    await expect(cmp).toHaveCSS('padding-bottom', '10px') // md value beats base pb
    await expect(cmp).toHaveCSS('padding-top', '10px')
  })

  test('md: pb@md beats py@md (side > axis within same bp)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box paddingBottom={{ md: '14px' }} paddingBlock={{ md: '10px' }} data-testid="box" />
    )

    await expect(cmp).toHaveCSS('padding-bottom', '14px') // side beats axis at md
  })

  test('md: fallback from sm when md missing (py@sm overrides p@base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box padding="6px" paddingBlock={{ sm: '11px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '11px')
    await expect(cmp).toHaveCSS('padding-bottom', '11px')
  })

  test('xl: pb@lg should apply at xl when xl missing (xl→lg→md→sm→base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(<Box padding="4px" paddingBottom={{ lg: '18px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-bottom', '18px') // falls back from xl to lg
    await expect(cmp).toHaveCSS('padding-top', '4px')
  })

  test('lg: explicit p@lg should override base p for all sides not set more specifically', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Box padding={{ lg: '12px' }} paddingLeft="1px" data-testid="box" />)

    await expect(cmp).toHaveCSS('padding-top', '12px')
    await expect(cmp).toHaveCSS('padding-right', '12px')
    await expect(cmp).toHaveCSS('padding-bottom', '12px')
    await expect(cmp).toHaveCSS('padding-left', '12px')
  })
})

test.describe('Box - margin precedence & responsive behavior', () => {
  test('base: mb > my > m; mt uses my > m; left/right use mx > m', async ({ mount }) => {
    const cmp = await mount(
      <Box margin="4px" marginInline="8px" marginBlock="10px" marginBottom="20px" data-testid="box" />
    )

    await expect(cmp).toHaveCSS('margin-bottom', '20px') // mb > my > m
    await expect(cmp).toHaveCSS('margin-top', '10px') // my > m
    await expect(cmp).toHaveCSS('margin-right', '8px') // mx > m
    await expect(cmp).toHaveCSS('margin-left', '8px')
  })

  test('base: side-only margins', async ({ mount }) => {
    const cmp = await mount(
      <Box marginTop="1px" marginRight="2px" marginBottom="3px" marginLeft="4px" data-testid="box" />
    )

    await expect(cmp).toHaveCSS('margin-top', '1px')
    await expect(cmp).toHaveCSS('margin-right', '2px')
    await expect(cmp).toHaveCSS('margin-bottom', '3px')
    await expect(cmp).toHaveCSS('margin-left', '4px')
  })

  test('md: my@md overrides mb@base (bp wins over base specificity)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box margin="4px" marginBottom="20px" marginBlock={{ md: '10px' }} data-testid="box" />
    )

    await expect(cmp).toHaveCSS('margin-bottom', '10px')
    await expect(cmp).toHaveCSS('margin-top', '10px')
  })

  test('md: mb@md beats my@md (side > axis within same bp)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box marginBlock={{ md: '10px' }} marginBottom={{ md: '14px' }} data-testid="box" />
    )

    await expect(cmp).toHaveCSS('margin-bottom', '14px')
  })

  test('lg: fallback chain picks sm over base when md/lg missing', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Box margin="6px" marginBlock={{ sm: '12px' }} data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-top', '12px')
    await expect(cmp).toHaveCSS('margin-bottom', '12px')
  })

  test('xl: m@lg applies at xl if no xl override', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(<Box margin={{ lg: '13px' }} marginLeft="1px" data-testid="box" />)

    await expect(cmp).toHaveCSS('margin-top', '13px')
    await expect(cmp).toHaveCSS('margin-right', '13px')
    await expect(cmp).toHaveCSS('margin-bottom', '13px')
    await expect(cmp).toHaveCSS('margin-left', '13px')
  })
})

test.describe('Box - mixed padding + margin (no cross-bleed)', () => {
  test('padding props don’t affect margins and vice versa', async ({ mount }) => {
    const cmp = await mount(
      <Box padding="5px" paddingBottom="9px" margin="7px" marginBottom="11px" data-testid="box" />
    )

    await expect(cmp).toHaveCSS('padding-top', '5px')
    await expect(cmp).toHaveCSS('padding-bottom', '9px')
    await expect(cmp).toHaveCSS('margin-top', '7px')
    await expect(cmp).toHaveCSS('margin-bottom', '11px')
  })
})
