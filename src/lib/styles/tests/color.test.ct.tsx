import { expect, test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Box color prop overrides resolved brand color', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'box' }}
      drawable
      variant="solid"
      intent="primary"
      color="red"
      blockSize="200px"
    >
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
    const styles = getComputedStyle(el)

    return {
      // resolved state
      color: el.dataset.nebBoxColor,

      // token layer
      main: styles.getPropertyValue('--base-l').trim(),

      // projection
      bg: styles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.color).toBe('red')
  expect(result.color).not.toBe('green')

  // --- token layer ---
  expect(result.main).not.toBe('')

  // --- projection layer ---
  expect(result.bg).not.toBe('')
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
      <Box
        tagAttrs={{ id: 'child' }}
        drawable
        variant="solid"
        intent="primary"
        color="red"
        blockSize="100px"
      >
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

      // token layer
      parentMain: parentStyles.getPropertyValue('--base-l').trim(),
      childMain: childStyles.getPropertyValue('--base-l').trim(),

      // projection
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.parentColor).toBe('blue')
  expect(result.childColor).toBe('red')

  // --- token layer ---
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).not.toBe(result.parentMain)

  // --- projection layer ---
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
  expect(result.childBg).not.toBe(result.parentBg)
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

    const parentStyles = getComputedStyle(parent)
    const childStyles = getComputedStyle(child)

    return {
      // resolved state
      parentColor: parent.dataset.nebBoxColor,
      childColor: child.dataset.nebBoxColor,

      // token layer
      parentMain: parentStyles.getPropertyValue('--base-l').trim(),
      childMain: childStyles.getPropertyValue('--base-l').trim(),

      // projection
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.parentColor).toBe('red')

  // child must NOT inherit parent color
  expect(result.childColor).not.toBe('red')

  // --- token layer ---
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).not.toBe(result.parentMain)

  // --- projection layer ---
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
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

    const parentStyles = getComputedStyle(parent)
    const childStyles = getComputedStyle(child)

    return {
      // resolved state
      rootBrand: document.documentElement.dataset.brand,
      parentColor: parent.dataset.nebBoxColor,
      childColor: child.dataset.nebBoxColor,

      // token layer
      parentMain: parentStyles.getPropertyValue('--base-l').trim(),
      childMain: childStyles.getPropertyValue('--base-l').trim(),

      // projection
      parentBg: parentStyles.getPropertyValue('--bg').trim(),
      childBg: childStyles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.rootBrand).toBe('green')

  expect(result.parentColor).toBe('red')

  // child falls back to brand, not parent color
  expect(result.childColor).toBe('green')

  // --- token layer ---
  expect(result.parentMain).not.toBe('')
  expect(result.childMain).not.toBe('')
  expect(result.childMain).not.toBe(result.parentMain)

  // --- projection layer ---
  expect(result.parentBg).not.toBe('')
  expect(result.childBg).not.toBe('')
  expect(result.childBg).not.toBe(result.parentBg)
})

test('Explicit color overrides brand', async ({ mount, page }) => {
  await mount(
    <Box
      tagAttrs={{ id: 'box' }}
      drawable
      variant="solid"
      intent="primary"
      color="red"
      blockSize="200px"
    >
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
    const styles = getComputedStyle(el)

    return {
      rootBrand: document.documentElement.dataset.brand,
      color: el.dataset.nebBoxColor,

      main: styles.getPropertyValue('--base-l').trim(),
      bg: styles.getPropertyValue('--bg').trim(),
    }
  })

  // --- state layer ---
  expect(result.rootBrand).toBe('green')

  // explicit color overrides brand
  expect(result.color).toBe('red')

  // --- token layer ---
  expect(result.main).not.toBe('')

  // --- projection layer ---
  expect(result.bg).not.toBe('')
})
