import { test, expect } from '@playwright/experimental-ct-react'

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
      palette: getComputedStyle(document.documentElement).getPropertyValue('--neb-red-6').trim(),
      ctx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-light-solid-primary-bg').trim(),
    }
  })

  // sanity: both sources exist
  expect(result.palette).not.toBe('')
  expect(result.ctx).not.toBe('')

  // must resolve to a real color
  expect(result.bg).toMatch(/^rgb\(/)

  // must NOT equal ctx primary color
  const ctxResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.style.backgroundColor = 'var(--neb-ctx-light-solid-primary-bg)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  expect(result.bg).not.toBe(ctxResolved)
})

test('Child Box color overrides parent color', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'parent' }} drawable variant="solid" intent="primary" color="blue" blockSize="200px" padding="16px">
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" color="red" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    const parentBg = getComputedStyle(parent).backgroundColor
    const childBg = getComputedStyle(child).backgroundColor

    return { parentBg, childBg }
  })

  // both must resolve to real colors
  expect(result.parentBg).toMatch(/^rgb\(/)
  expect(result.childBg).toMatch(/^rgb\(/)

  // child must not match parent (override)
  expect(result.childBg).not.toBe(result.parentBg)
})

test('Parent color does not leak into child Box without color', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'parent' }} drawable variant="solid" intent="primary" color="red" blockSize="200px" padding="16px">
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    return {
      parentBg: getComputedStyle(parent).backgroundColor,
      childBg: getComputedStyle(child).backgroundColor,
    }
  })

  expect(result.parentBg).toMatch(/^rgb\(/)
  expect(result.childBg).toMatch(/^rgb\(/)

  // child must not visually inherit parent color
  expect(result.childBg).not.toBe(result.parentBg)
})

test('Color does not inherit to child Box', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'parent' }} drawable variant="solid" intent="primary" color="red" blockSize="200px" padding="16px">
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

    const parentBg = getComputedStyle(parent).backgroundColor
    const childBg = getComputedStyle(child).backgroundColor

    return { parentBg, childBg }
  })

  // both must resolve to real colors
  expect(result.parentBg).toMatch(/^rgb\(/)
  expect(result.childBg).toMatch(/^rgb\(/)

  // child must NOT inherit parent color
  expect(result.childBg).not.toBe(result.parentBg)
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

  const result = await page.evaluate(() => {
    const el = document.getElementById('box')!
    const bg = getComputedStyle(el).backgroundColor
    return { bg }
  })

  // must resolve to a real color
  expect(result.bg).toMatch(/^rgb\(/)

  // resolve brand ctx to a computed color
  const brandResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.style.backgroundColor = 'var(--neb-ctx-solid-primary)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  // explicit color must override brand
  expect(result.bg).not.toBe(brandResolved)
})
