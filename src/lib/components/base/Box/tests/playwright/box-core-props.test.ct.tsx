import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  sm: { width: 480, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
  xl: { width: 1280, height: 800 },
}

test.describe('Box - core props', () => {
  test('display / opacity (base)', async ({ mount }) => {
    const cmp = await mount(<Box display="block" opacity={0.6} />)
    await expect(cmp).toHaveCSS('display', 'block')
    // JSDOM sometimes normalizes opacity to "0.6" string; Playwright returns computed value
    await expect(cmp).toHaveCSS('opacity', '0.6')
  })

  test('display responsive override (md beats base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box display={{ base: 'block', md: 'inline-block' }} />)
    await expect(cmp).toHaveCSS('display', 'inline-block')
  })

  test('position + offsets', async ({ mount }) => {
    const cmp = await mount(<Box position="relative" top="5px" left="7px" right="9px" bottom="11px" />)
    await expect(cmp).toHaveCSS('position', 'relative')
    await expect(cmp).toHaveCSS('top', '5px')
    await expect(cmp).toHaveCSS('left', '7px')
    await expect(cmp).toHaveCSS('right', '9px')
    await expect(cmp).toHaveCSS('bottom', '11px')
  })

  test('fontSize / lineHeight / textAlign (base)', async ({ mount }) => {
    const cmp = await mount(<Box fontSize="18px" lineHeight="1.4" textAlign="center" />)
    await expect(cmp).toHaveCSS('font-size', '18px')
    await expect(cmp).toHaveCSS('line-height', '25.2px')
    await expect(cmp).toHaveCSS('text-align', 'center')
  })

  test('fontSize responsive override (lg beats base), lineHeight fallback', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(<Box fontSize={{ base: '14px', lg: '20px' }} lineHeight="1.2" />)
    await expect(cmp).toHaveCSS('font-size', '20px')
    await expect(cmp).toHaveCSS('line-height', '24px')
  })

  test('block/inline sizes (width/height) + min/max', async ({ mount }) => {
    const cmp = await mount(
      <Box
        blockSize="120px"
        minBlockSize="100px"
        maxBlockSize="200px"
        inlineSize="240px"
        minInlineSize="180px"
        maxInlineSize="300px"
      />
    )
    await expect(cmp).toHaveCSS('block-size', '120px')
    await expect(cmp).toHaveCSS('min-block-size', '100px')
    await expect(cmp).toHaveCSS('max-block-size', '200px')
    await expect(cmp).toHaveCSS('inline-size', '240px')
    await expect(cmp).toHaveCSS('min-inline-size', '180px')
    await expect(cmp).toHaveCSS('max-inline-size', '300px')
  })

  test('sizes responsive override + fallback (xl missing → uses lg)', async ({ mount, page }) => {
    await page.setViewportSize(vp.xl)
    const cmp = await mount(
      <Box
        blockSize={{ lg: '160px' }} // no xl provided → should use lg at xl
        inlineSize={{ md: '260px' }} // no lg/xl → should use md at xl
      />
    )
    await expect(cmp).toHaveCSS('block-size', '160px') // xl→lg
    await expect(cmp).toHaveCSS('inline-size', '260px') // xl→md
  })

  test('overflow axes', async ({ mount }) => {
    const cmp = await mount(<Box overflowX="auto" overflowY="hidden" />)
    await expect(cmp).toHaveCSS('overflow-x', 'auto')
    await expect(cmp).toHaveCSS('overflow-y', 'hidden')
  })

  test('overflow responsive override (md beats base)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box overflowX="hidden" overflowY={{ md: 'scroll' }} />)
    await expect(cmp).toHaveCSS('overflow-x', 'hidden')
    await expect(cmp).toHaveCSS('overflow-y', 'scroll')
  })

  test('borderRadius applied only when variant !== "ghost"', async ({ mount }) => {
    const cmp = await mount(<Box variant="solid" borderRadius="10px" />)
    await expect(cmp).toHaveCSS('border-radius', '10px')
  })

  test('text alignment responsive override', async ({ mount, page }) => {
    await page.setViewportSize(vp.sm)
    const cmp = await mount(<Box textAlign={{ base: 'left', sm: 'right' }} />)
    await expect(cmp).toHaveCSS('text-align', 'right')
  })
})
