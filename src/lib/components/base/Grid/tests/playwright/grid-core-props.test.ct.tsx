import { test, expect } from '@playwright/experimental-ct-react'

import { Grid } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  sm: { width: 480, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
  xl: { width: 1280, height: 800 },
}

test.describe('Grid - core props', () => {
  test('base: display grid + core props compute', async ({ mount }) => {
    const cmp = await mount(
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="auto 1fr auto"
        gridAutoFlow="row dense"
        gridAutoRows="minmax(100px, auto)"
        gridAutoColumns="1fr"
        placeItems="center"
        placeContent="space-between"
      />
    )

    await expect(cmp).toHaveCSS('display', 'grid')
    await expect(cmp).toHaveCSS('grid-template-columns', /repeat|px/)
    await expect(cmp).toHaveCSS('grid-template-rows', '0px 0px 0px')
    await expect(cmp).toHaveCSS('grid-auto-flow', 'dense')
    await expect(cmp).toHaveCSS('grid-auto-rows', 'minmax(100px, auto)')
    await expect(cmp).toHaveCSS('grid-auto-columns', '1fr')
    await expect(cmp).toHaveCSS('place-items', 'center')
    await expect(cmp).toHaveCSS('place-content', 'space-between')
  })

  test('md: responsive overrides beat base', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)

    const cmp = await mount(
      <Grid
        gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gridTemplateRows={{ base: 'auto 1fr', md: 'auto auto' }}
        gridAutoFlow={{ base: 'row', md: 'column' }}
        gridAutoRows={{ base: 'minmax(60px, auto)', md: 'minmax(80px, auto)' }}
        gridAutoColumns={{ base: 'auto', md: 'minmax(120px, 1fr)' }}
        placeItems={{ base: 'start', md: 'end' }}
        placeContent={{ base: 'start', md: 'center' }}
      />
    )

    await expect(cmp).toHaveCSS('grid-template-columns', /repeat|px/)
    await expect(cmp).toHaveCSS('grid-template-rows', '0px 0px')
    await expect(cmp).toHaveCSS('grid-auto-flow', 'column')
    await expect(cmp).toHaveCSS('grid-auto-rows', 'minmax(80px, auto)')
    await expect(cmp).toHaveCSS('grid-auto-columns', 'minmax(120px, 1fr)')
    await expect(cmp).toHaveCSS('place-items', 'end')
    await expect(cmp).toHaveCSS('place-content', 'center')
  })

  test('xl: fallback xl→lg→md→sm→base (uses nearest lower bp)', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)

    const cmp = await mount(
      <Grid
        // only lg provided → should apply at xl
        gridTemplateColumns={{ lg: 'repeat(6, 1fr)' }}
        gridTemplateRows={{ lg: 'auto 1fr' }}
        gridAutoFlow={{ lg: 'row dense' }}
        placeItems={{ lg: 'center' }}
        // only md provided → also should apply at xl (no lg/xl)
        gridAutoRows={{ md: 'minmax(70px, auto)' }}
        gridAutoColumns={{ md: 'minmax(100px, 1fr)' }}
        placeContent={{ md: 'space-around' }}
      />
    )

    await expect(cmp).toHaveCSS('grid-template-columns', /repeat|px/) // from lg
    await expect(cmp).toHaveCSS('grid-template-rows', '0px 0px') // from lg
    await expect(cmp).toHaveCSS('grid-auto-flow', 'dense') // from lg
    await expect(cmp).toHaveCSS('place-items', 'center') // from lg
    await expect(cmp).toHaveCSS('grid-auto-rows', 'minmax(70px, auto)') // from md
    await expect(cmp).toHaveCSS('grid-auto-columns', 'minmax(100px, 1fr)') // from md
    await expect(cmp).toHaveCSS('place-content', 'space-around') // from md
  })

  test('lg: partial responsive updates don’t affect untouched props', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)

    const cmp = await mount(
      <Grid
        gridTemplateRows="auto auto"
        gridAutoFlow="row"
        placeContent="stretch"
        // change only columns & placeItems at lg
        gridTemplateColumns={{ lg: 'repeat(5, 1fr)' }}
        placeItems={{ lg: 'end' }}
      />
    )

    await expect(cmp).toHaveCSS('grid-template-columns', /repeat|px/) // changed
    await expect(cmp).toHaveCSS('place-items', 'end') // changed

    await expect(cmp).toHaveCSS('grid-template-rows', '0px 0px') // unchanged
    await expect(cmp).toHaveCSS('grid-auto-flow', 'row') // unchanged
    await expect(cmp).toHaveCSS('place-content', 'stretch') // unchanged
  })
})
