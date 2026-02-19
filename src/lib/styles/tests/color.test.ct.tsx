import { test, expect } from '@playwright/experimental-ct-react'
import tinycolor from 'tinycolor2'

import { Box } from 'lib/components'

test('Box color prop overrides ctx primary solid color', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" color="red" blockSize="200px">
      Box
    </Box>
  )

  const result = await page.locator('#box').evaluate(el => {
    const cs = getComputedStyle(el)
    return {
      bg: cs.backgroundColor,
      palette: getComputedStyle(document.documentElement).getPropertyValue('--neb-red-5').trim(),
      ctx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-solid-primary').trim(),
    }
  })

  // sanity: both sources exist
  expect(result.palette).not.toBe('')
  expect(result.ctx).not.toBe('')

  // painted color must match palette red, not ctx
  expect(result.bg).toBe(tinycolor(result.palette).toRgbString())
})

test('Child Box color overrides parent color', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'parent' }}
      drawable
      variant="solid"
      intent="primary"
      color="blue"
      blockSize="200px"
      padding="16px"
    >
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" color="red" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.locator('#child').evaluate(el => {
    const cs = getComputedStyle(el)
    return {
      bg: cs.backgroundColor,
      red: getComputedStyle(document.documentElement).getPropertyValue('--neb-red-5').trim(),
    }
  })

  expect(result.red).not.toBe('')
  expect(result.bg).toBe(tinycolor(result.red).toRgbString())
})

test('Parent color does not leak into child Box without color', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'parent' }}
      drawable
      variant="solid"
      intent="primary"
      color="red"
      blockSize="200px"
      padding="16px"
    >
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!
    const parentBg = getComputedStyle(parent).backgroundColor
    const childBg = getComputedStyle(child).backgroundColor

    const ctxPrimary = getComputedStyle(document.documentElement)
      .getPropertyValue('--neb-ctx-solid-primary')
      .trim()

    return { parentBg, childBg, ctxPrimary }
  })

  // parent is explicitly red
  const red8 = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--neb-red-5').trim()
  )
  expect(result.parentBg).toBe(tinycolor(red8).toRgbString())

  // child uses ctx, not parent color
  expect(result.ctxPrimary).not.toBe('')
  expect(result.childBg).toBe(tinycolor(result.ctxPrimary).toRgbString())

  // optional sanity: they differ (proves no leak)
  expect(result.childBg).not.toBe(result.parentBg)
})

test('Color does not inherit to child Box', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'parent' }}
      drawable
      variant="solid"
      intent="primary"
      color="red"
      blockSize="200px"
      padding="16px"
    >
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" blockSize="100px">
        Child
      </Box>
    </Box>,
    {
      hooksConfig: {
        brand: 'green',
      },
    }
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    const parentCs = getComputedStyle(parent)
    const childCs = getComputedStyle(child)

    return {
      parentBg: parentCs.backgroundColor,
      childBg: childCs.backgroundColor,

      parentSemantic: parentCs.getPropertyValue('--neb-solid-primary').trim(),
      childSemantic: childCs.getPropertyValue('--neb-solid-primary').trim(),

      brandCtx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-solid-primary').trim(),
    }
  })

  // parent paints from color override
  expect(result.parentBg).toBe(tinycolor(result.parentSemantic).toRgbString())

  // child paints from brand/theme, NOT parent color
  expect(result.childBg).toBe(tinycolor(result.childSemantic).toRgbString())

  // child must not inherit parent color
  expect(result.childBg).not.toBe(result.parentBg)

  // child should resolve from brand ctx
  expect(tinycolor(result.childSemantic).toRgbString()).toBe(tinycolor(result.brandCtx).toRgbString())
})

test('Explicit color overrides brand', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" color="red" blockSize="200px">
      Box
    </Box>,
    {
      hooksConfig: {
        brand: 'green',
      },
    }
  )

  const result = await page.locator('#box').evaluate(el => {
    const cs = getComputedStyle(el)

    return {
      bg: cs.backgroundColor,

      // color override path
      colorSemantic: cs.getPropertyValue('--neb-solid-primary').trim(),

      // brand ctx (should be ignored)
      brandCtx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-solid-primary').trim(),
    }
  })

  // semantic var must exist
  expect(result.colorSemantic).not.toBe('')

  // box paints from color-derived semantic var
  expect(result.bg).toBe(tinycolor(result.colorSemantic).toRgbString())

  // color must override brand
  expect(tinycolor(result.colorSemantic).toRgbString()).not.toBe(tinycolor(result.brandCtx).toRgbString())
})
