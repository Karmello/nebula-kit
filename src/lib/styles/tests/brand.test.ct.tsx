import { expect,test } from '@playwright/experimental-ct-react'

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

    const parentStyles = getComputedStyle(parent)
    const childStyles = getComputedStyle(child)

    return {
      rootBrand: document.documentElement.dataset.brand,

      // FINAL resolved state (this is the truth)
      parentColor: parent.dataset.nebBoxColor,
      childColor: child.dataset.nebBoxColor,

      // tokens
      parentMain: parentStyles.getPropertyValue('--main-l').trim(),
      childMain: childStyles.getPropertyValue('--main-l').trim(),

      // projection
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // input
  expect(result.rootBrand).toBe('red')

  // resolved output
  expect(result.parentColor).toBe('red')
  expect(result.childColor).toBe('green')

  // token divergence (core guarantee)
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).not.toBe(result.parentMain)

  // visual divergence
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
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

    const parentStyles = getComputedStyle(parent)
    const childStyles = getComputedStyle(child)

    return {
      // resolved state (truth)
      parentColor: parent.dataset.nebBoxColor,
      childColor: child.dataset.nebBoxColor,

      // token layer
      parentMain: parentStyles.getPropertyValue('--main-l').trim(),
      childMain: childStyles.getPropertyValue('--main-l').trim(),

      // projection layer
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.parentColor).toBe('green')
  expect(result.childColor).toBe('green')

  // --- token layer ---
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).toBe(result.parentMain)

  // --- projection layer ---
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
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

    const darkStyles = getComputedStyle(dark)
    const lightStyles = getComputedStyle(light)

    return {
      rootBrand: document.documentElement.dataset.brand,

      darkColor: dark.dataset.nebBoxColor,
      lightColor: light.dataset.nebBoxColor,

      darkTheme: dark.dataset.nebBoxTheme,
      lightTheme: light.dataset.nebBoxTheme,

      darkMain: darkStyles.getPropertyValue('--main-l').trim(),
      lightMain: lightStyles.getPropertyValue('--main-l').trim(),

      darkBg: darkStyles.getPropertyValue('--bg').trim(),
      lightBg: lightStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.rootBrand).toBe('green')
  expect(result.darkColor).toBe('green')
  expect(result.lightColor).toBe('green')

  expect(result.darkTheme).toBe('dark')
  expect(result.lightTheme).toBe('light')

  // --- token layer ---
  expect(result.darkMain).not.toBe('')
  expect(result.lightMain).not.toBe('')

  // --- projection layer ---
  expect(result.darkBg).not.toBe('')
  expect(result.lightBg).not.toBe('')
})
