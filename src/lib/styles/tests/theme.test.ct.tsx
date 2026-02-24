import { test, expect } from '@playwright/experimental-ct-react'
import tinycolor from 'tinycolor2'

import { Box } from 'lib/components'

test('Box paints ctx primary solid color by default', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" blockSize="200px">
      Box
    </Box>
  )

  const result = await page.evaluate(() => {
    const el = document.getElementById('box')!
    const bg = getComputedStyle(el).backgroundColor
    return { bg }
  })

  // must resolve to a real color
  expect(result.bg).toMatch(/^rgb\(/)

  // resolve ctx primary via browser
  const ctxResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.style.backgroundColor = 'var(--neb-ctx-color-5)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  expect(result.bg).toBe(ctxResolved)
})

test('Nested Box inherits ctx primary solid color', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'parent' }}
      drawable
      variant="solid"
      intent="primary"
      blockSize="200px"
      padding="16px"
    >
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const child = document.getElementById('child')!
    const bg = getComputedStyle(child).backgroundColor
    return { bg }
  })

  // must resolve to a real color
  expect(result.bg).toMatch(/^rgb\(/)

  // resolve ctx primary via browser
  const ctxResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.style.backgroundColor = 'var(--neb-ctx-color-5)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  expect(result.bg).toBe(ctxResolved)
})

test('Box with dark theme uses dark ctx colors inside light app', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" theme="dark" blockSize="200px">
      Dark Box
    </Box>
  )

  const result = await page.evaluate(() => {
    const el = document.getElementById('box')!
    const bg = getComputedStyle(el).backgroundColor
    return { bg }
  })

  // must resolve to a real color
  expect(result.bg).toMatch(/^rgb\(/)

  // resolve ctx primary *within dark theme scope*
  const darkResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.setAttribute('data-theme', 'dark')
    el.style.backgroundColor = 'var(--neb-ctx-color-5)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  expect(result.bg).toBe(darkResolved)
})

test('Nested theme islands reset correctly (light → dark → light)', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'dark-parent' }}
      drawable
      variant="solid"
      intent="inverse"
      theme="dark"
      blockSize="200px"
      padding="16px"
    >
      <Box
        tagAttrs={{ id: 'light-child' }}
        drawable
        variant="solid"
        intent="inverse"
        theme="light"
        blockSize="100px"
      >
        Light Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const dark = document.getElementById('dark-parent')!
    const light = document.getElementById('light-child')!

    return {
      darkBg: getComputedStyle(dark).backgroundColor,
      lightBg: getComputedStyle(light).backgroundColor,
      lightCtx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-color-9').trim(),
    }
  })

  // light child must resolve from light ctx
  expect(result.lightCtx).not.toBe('')
  expect(result.lightBg).toBe(tinycolor(result.lightCtx).toRgbString())

  // and must NOT inherit dark parent visuals
  expect(result.lightBg).not.toBe(result.darkBg)
})

test('Nested theme islands reset correctly (light → dark → light → dark)', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'dark-1' }}
      drawable
      variant="solid"
      intent="inverse"
      theme="dark"
      blockSize="300px"
      padding="16px"
    >
      <Box
        tagAttrs={{ id: 'light-1' }}
        drawable
        variant="solid"
        intent="inverse"
        theme="light"
        blockSize="220px"
        padding="16px"
      >
        <Box
          tagAttrs={{ id: 'dark-2' }}
          drawable
          variant="solid"
          intent="inverse"
          theme="dark"
          blockSize="140px"
        >
          Dark Again
        </Box>
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const dark1 = document.getElementById('dark-1')!
    const light1 = document.getElementById('light-1')!
    const dark2 = document.getElementById('dark-2')!

    return {
      dark1Bg: getComputedStyle(dark1).backgroundColor,
      light1Bg: getComputedStyle(light1).backgroundColor,
      dark2Bg: getComputedStyle(dark2).backgroundColor,

      lightCtx: getComputedStyle(document.documentElement).getPropertyValue('--neb-ctx-color-9').trim(),
    }
  })

  // light island must resolve from light ctx
  expect(result.lightCtx).not.toBe('')
  expect(result.light1Bg).toBe(tinycolor(result.lightCtx).toRgbString())

  // dark islands must not inherit light visuals
  expect(result.dark1Bg).not.toBe(result.light1Bg)
  expect(result.dark2Bg).not.toBe(result.light1Bg)

  // sanity: both dark islands should match each other
  expect(result.dark2Bg).toBe(result.dark1Bg)
})

test('Global dark theme paints primary solid correctly', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" blockSize="200px">
      Dark Root
    </Box>,
    {
      hooksConfig: {
        theme: 'dark',
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

  // resolve dark ctx primary via browser
  const darkResolved = await page.evaluate(() => {
    const el = document.createElement('div')
    el.setAttribute('data-theme', 'dark')
    el.style.backgroundColor = 'var(--neb-ctx-color-5)'
    document.body.appendChild(el)
    const value = getComputedStyle(el).backgroundColor
    document.body.removeChild(el)
    return value
  })

  expect(result.bg).toBe(darkResolved)
})
