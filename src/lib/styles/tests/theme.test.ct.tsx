import { expect, test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Box resolves default primary solid styling', async ({ mount, page }) => {
  await mount(
    <Box tagAttrs={{ id: 'box' }} drawable variant="solid" intent="primary" blockSize="200px">
      Box
    </Box>
  )

  const result = await page.evaluate(() => {
    const el = document.getElementById('box')!
    const styles = getComputedStyle(el)

    return {
      theme: el.dataset.nebBoxTheme,
      color: el.dataset.nebBoxColor,
      variant: el.dataset.nebBoxVariant,
      intent: el.dataset.nebBoxIntent,
      main: styles.getPropertyValue('--l').trim(),
      bg: styles.getPropertyValue('--bg').trim(),
    }
  })

  expect(result.theme).toBe('light')
  expect(result.color).not.toBe('')
  expect(result.variant).toBe('solid')
  expect(result.intent).toBe('primary')

  expect(result.main).not.toBe('')
  expect(result.bg).not.toBe('')
})

test('Nested Box resolves same primary solid styling as parent', async ({ mount, page }) => {
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
    const parent = document.getElementById('parent')!
    const child = document.getElementById('child')!

    const parentStyles = getComputedStyle(parent)
    const childStyles = getComputedStyle(child)

    return {
      // resolved state
      parentColor: parent.dataset.nebBoxColor,
      childColor: child.dataset.nebBoxColor,

      parentTheme: parent.dataset.nebBoxTheme,
      childTheme: child.dataset.nebBoxTheme,

      // token layer
      parentMain: parentStyles.getPropertyValue('--l').trim(),
      childMain: childStyles.getPropertyValue('--l').trim(),

      // projection
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.parentColor).toBe(result.childColor)
  expect(result.parentTheme).toBe(result.childTheme)

  // --- token layer ---
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).toBe(result.parentMain)

  // --- projection layer ---
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
  expect(result.childBg).toBe(result.parentBg)
})

test('Local dark theme produces same result as global dark theme', async ({ mount, page }) => {
  await mount(
    <>
      <Box
        tagAttrs={{ id: 'local-dark' }}
        drawable
        variant="solid"
        intent="primary"
        theme="dark"
        blockSize="200px"
      >
        Local Dark
      </Box>

      <Box
        tagAttrs={{ id: 'global-dark' }}
        drawable
        variant="solid"
        intent="primary"
        blockSize="200px"
      >
        Global Dark
      </Box>
    </>,
    {
      hooksConfig: {
        theme: 'dark',
      },
    }
  )

  const result = await page.evaluate(() => {
    const local = document.getElementById('local-dark')!
    const global = document.getElementById('global-dark')!

    const localStyles = getComputedStyle(local)
    const globalStyles = getComputedStyle(global)

    return {
      // state
      localTheme: local.dataset.nebBoxTheme,
      globalTheme: global.dataset.nebBoxTheme,

      // tokens
      localMain: localStyles.getPropertyValue('--l').trim(),
      globalMain: globalStyles.getPropertyValue('--l').trim(),

      // projection
      localBg: localStyles.getPropertyValue('--bg').trim(),
      globalBg: globalStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.localTheme).toBe('dark')
  expect(result.globalTheme).toBe('dark')

  // --- token layer ---
  expect(result.localMain).not.toBe('')
  expect(result.globalMain).not.toBe('')
  expect(result.localMain).toBe(result.globalMain)

  // --- projection layer ---
  expect(result.localBg).not.toBe('')
  expect(result.globalBg).not.toBe('')
  expect(result.localBg).toBe(result.globalBg)
})

test('Nested theme islands reset correctly (dark → light)', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'dark-parent' }}
      drawable
      variant="solid"
      intent="secondary"
      theme="dark"
      blockSize="200px"
      padding="16px"
    >
      <Box
        tagAttrs={{ id: 'light-child' }}
        drawable
        variant="solid"
        intent="secondary"
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

    const darkStyles = getComputedStyle(dark)
    const lightStyles = getComputedStyle(light)

    return {
      // state
      darkTheme: dark.dataset.nebBoxTheme,
      lightTheme: light.dataset.nebBoxTheme,

      darkColor: dark.dataset.nebBoxColor,
      lightColor: light.dataset.nebBoxColor,

      // tokens
      darkMain: darkStyles.getPropertyValue('--l').trim(),
      lightMain: lightStyles.getPropertyValue('--l').trim(),

      // projection
      darkBg: darkStyles.getPropertyValue('--bg').trim(),
      lightBg: lightStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.darkTheme).toBe('dark')
  expect(result.lightTheme).toBe('light')

  // brand/color should remain consistent (no leakage issue)
  expect(result.darkColor).toBe(result.lightColor)

  // --- token layer ---
  expect(result.darkMain).not.toBe('')
  expect(result.lightMain).not.toBe('')

  // IMPORTANT: theme reset → tokens differ
  expect(result.lightMain).not.toBe(result.darkMain)

  // --- projection layer ---
  expect(result.darkBg).not.toBe('')
  expect(result.lightBg).not.toBe('')

  // child must not visually match parent
  expect(result.lightBg).not.toBe(result.darkBg)
})

test('Nested theme islands rebind correctly across multiple boundaries (dark → light → dark)', async ({
  mount,
  page,
}) => {
  await mount(
    <Box
      tagAttrs={{ id: 'dark-1' }}
      drawable
      variant="solid"
      intent="secondary"
      theme="dark"
      blockSize="300px"
      padding="16px"
    >
      <Box
        tagAttrs={{ id: 'light-1' }}
        drawable
        variant="solid"
        intent="secondary"
        theme="light"
        blockSize="220px"
        padding="16px"
      >
        <Box
          tagAttrs={{ id: 'dark-2' }}
          drawable
          variant="solid"
          intent="secondary"
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

    const dark1Styles = getComputedStyle(dark1)
    const light1Styles = getComputedStyle(light1)
    const dark2Styles = getComputedStyle(dark2)

    return {
      // state
      dark1Theme: dark1.dataset.nebBoxTheme,
      light1Theme: light1.dataset.nebBoxTheme,
      dark2Theme: dark2.dataset.nebBoxTheme,

      // tokens
      dark1Main: dark1Styles.getPropertyValue('--l').trim(),
      light1Main: light1Styles.getPropertyValue('--l').trim(),
      dark2Main: dark2Styles.getPropertyValue('--l').trim(),

      // projection
      dark1Bg: dark1Styles.getPropertyValue('--bg').trim(),
      light1Bg: light1Styles.getPropertyValue('--bg').trim(),
      dark2Bg: dark2Styles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.dark1Theme).toBe('dark')
  expect(result.light1Theme).toBe('light')
  expect(result.dark2Theme).toBe('dark')

  // --- token layer ---
  expect(result.dark1Main).not.toBe('')
  expect(result.light1Main).not.toBe('')
  expect(result.dark2Main).not.toBe('')

  // light island must differ from dark
  expect(result.light1Main).not.toBe(result.dark1Main)
  expect(result.light1Main).not.toBe(result.dark2Main)

  // dark islands must match each other
  expect(result.dark2Main).toBe(result.dark1Main)

  // --- projection layer ---
  expect(result.dark1Bg).not.toBe('')
  expect(result.light1Bg).not.toBe('')
  expect(result.dark2Bg).not.toBe('')

  // light island visually different
  expect(result.light1Bg).not.toBe(result.dark1Bg)
  expect(result.light1Bg).not.toBe(result.dark2Bg)

  // dark islands visually consistent
  expect(result.dark2Bg).toBe(result.dark1Bg)
})

test('Global dark theme resolves primary solid styling consistently', async ({ mount, page }) => {
  await mount(
    <>
      <Box tagAttrs={{ id: 'box-1' }} drawable variant="solid" intent="primary" blockSize="200px">
        One
      </Box>

      <Box tagAttrs={{ id: 'box-2' }} drawable variant="solid" intent="primary" blockSize="200px">
        Two
      </Box>
    </>,
    {
      hooksConfig: {
        theme: 'dark',
      },
    }
  )

  const result = await page.evaluate(() => {
    const one = document.getElementById('box-1')!
    const two = document.getElementById('box-2')!

    const oneStyles = getComputedStyle(one)
    const twoStyles = getComputedStyle(two)

    return {
      // state
      oneTheme: one.dataset.nebBoxTheme,
      twoTheme: two.dataset.nebBoxTheme,

      // tokens
      oneMain: oneStyles.getPropertyValue('--l').trim(),
      twoMain: twoStyles.getPropertyValue('--l').trim(),

      // projection
      oneBg: oneStyles.getPropertyValue('--bg').trim(),
      twoBg: twoStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.oneTheme).toBe('dark')
  expect(result.twoTheme).toBe('dark')

  // --- token layer ---
  expect(result.oneMain).not.toBe('')
  expect(result.twoMain).not.toBe('')
  expect(result.oneMain).toBe(result.twoMain)

  // --- projection layer ---
  expect(result.oneBg).not.toBe('')
  expect(result.twoBg).not.toBe('')
  expect(result.oneBg).toBe(result.twoBg)
})
