import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Local brand overrides global brand', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'parent' }} drawable variant="solid" intent="primary" blockSize="200px" padding="16px">
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" brand="green" blockSize="100px">
        Child
      </Box>
    </Box>,
    {
      hooksConfig: {
        brand: 'red',
      },
    }
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    return {
      parentBg: getComputedStyle(parent).backgroundColor,
      childBg: getComputedStyle(child).backgroundColor,

      parentCtx: getComputedStyle(parent).getPropertyValue('--neb-solid-primary-bg').trim(),

      childCtx: getComputedStyle(child).getPropertyValue('--neb-solid-primary-bg').trim(),
    }
  })

  // both must resolve to real colors
  expect(result.parentBg).toMatch(/^rgb\(/)
  expect(result.childBg).toMatch(/^rgb\(/)

  // ctx must be set on both
  expect(result.parentCtx).not.toBe('')
  expect(result.childCtx).not.toBe('')

  // child must use different ctx (brand isolation)
  expect(result.childCtx).not.toBe(result.parentCtx)

  // visual output must differ
  expect(result.childBg).not.toBe(result.parentBg)
})

test('Child Box inherits brand when no local brand is set', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'parent' }} drawable variant="solid" intent="primary" brand="green" blockSize="200px" padding="16px">
      <Box tagAttrs={{ id: 'child' }} drawable variant="solid" intent="primary" blockSize="100px">
        Child
      </Box>
    </Box>
  )

  const result = await page.evaluate(() => {
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    const parentCs = getComputedStyle(parent)
    const childCs = getComputedStyle(child)

    return {
      parentBg: parentCs.backgroundColor,
      childBg: childCs.backgroundColor,

      parentSemantic: parentCs.getPropertyValue('--neb-solid-primary-bg').trim(),
      childSemantic: childCs.getPropertyValue('--neb-solid-primary-bg').trim(),
    }
  })

  // both must resolve semantic vars
  expect(result.parentSemantic).not.toBe('')
  expect(result.childSemantic).not.toBe('')

  // both must resolve to real colors
  expect(result.parentBg).toMatch(/^rgb\(/)
  expect(result.childBg).toMatch(/^rgb\(/)

  // they must be visually identical (brand inheritance)
  expect(result.childBg).toBe(result.parentBg)
})

test('Brand survives theme islands (light → dark → light)', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'dark-parent' }} drawable variant="solid" intent="primary" theme="dark" blockSize="200px" padding="16px">
      <Box tagAttrs={{ id: 'light-child' }} drawable variant="solid" intent="primary" theme="light" blockSize="100px">
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
    const dark = document.getElementById('dark-parent')!
    const light = document.getElementById('light-child')!

    const darkCs = getComputedStyle(dark)
    const lightCs = getComputedStyle(light)

    return {
      darkBg: darkCs.backgroundColor,
      lightBg: lightCs.backgroundColor,

      darkSemantic: darkCs.getPropertyValue('--neb-solid-primary-bg').trim(),
      lightSemantic: lightCs.getPropertyValue('--neb-solid-primary-bg').trim(),
    }
  })

  // semantic vars must exist
  expect(result.darkSemantic).not.toBe('')
  expect(result.lightSemantic).not.toBe('')

  // both must resolve to real colors
  expect(result.darkBg).toMatch(/^rgb\(/)
  expect(result.lightBg).toMatch(/^rgb\(/)

  // brand survives (semantic token structure exists in both)
  expect(result.darkSemantic).not.toBe('')
  expect(result.lightSemantic).not.toBe('')

  // but rendered colors should differ because themes differ
  expect(result.lightBg).not.toBe(result.darkBg)
})
