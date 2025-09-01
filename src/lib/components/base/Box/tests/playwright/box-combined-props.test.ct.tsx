import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from '../..'

const vp = {
  base: { width: 375, height: 800 },
  md: { width: 768, height: 800 },
  lg: { width: 1024, height: 800 },
}

test.describe('Box - combined props smoke tests', () => {
  test('display + overflow axes + padding/margin mix compute together', async ({ mount }) => {
    const cmp = await mount(
      <Box
        display="block"
        overflowX="auto"
        overflowY="scroll"
        padding="6px"
        paddingBlock="8px"
        paddingLeft="12px"
        margin="4px"
        marginBlock="10px"
        marginRight="2px"
      />
    )

    // display / overflow
    await expect(cmp).toHaveCSS('display', 'block')
    await expect(cmp).toHaveCSS('overflow-x', 'auto')
    await expect(cmp).toHaveCSS('overflow-y', 'scroll')

    // padding: side > axis > all per edge
    await expect(cmp).toHaveCSS('padding-top', '8px') // py > p
    await expect(cmp).toHaveCSS('padding-bottom', '8px') // py > p
    await expect(cmp).toHaveCSS('padding-left', '12px') // pl > py > p
    await expect(cmp).toHaveCSS('padding-right', '6px') // p

    // margin: side > axis > all per edge
    await expect(cmp).toHaveCSS('margin-top', '10px') // my > m
    await expect(cmp).toHaveCSS('margin-bottom', '10px') // my > m
    await expect(cmp).toHaveCSS('margin-right', '2px') // mr > mx > m
    await expect(cmp).toHaveCSS('margin-left', '4px') // m
  })

  test('sizes + position + borderRadius', async ({ mount }) => {
    const cmp = await mount(
      <Box
        variant="solid"
        borderRadius="10px"
        position="relative"
        top="5px"
        left="7px"
        blockSize="120px"
        minBlockSize="100px"
        maxBlockSize="200px"
        inlineSize="240px"
        minInlineSize="180px"
        maxInlineSize="300px"
        textAlign="end"
      />
    )

    await expect(cmp).toHaveCSS('border-radius', '10px')
    await expect(cmp).toHaveCSS('position', 'relative')
    await expect(cmp).toHaveCSS('top', '5px')
    await expect(cmp).toHaveCSS('left', '7px')

    await expect(cmp).toHaveCSS('block-size', '120px')
    await expect(cmp).toHaveCSS('min-block-size', '100px')
    await expect(cmp).toHaveCSS('max-block-size', '200px')
    await expect(cmp).toHaveCSS('inline-size', '240px')
    await expect(cmp).toHaveCSS('min-inline-size', '180px')
    await expect(cmp).toHaveCSS('max-inline-size', '300px')

    await expect(cmp).toHaveCSS('text-align', 'end')
  })

  test('responsive mix: display/overflow at md, paddings remain intact', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box
        // base paddings that should remain unless overridden at bp
        padding="5px"
        paddingBlock="9px"
        paddingLeft="13px"
        // responsive display/overflow
        display={{ base: 'block', md: 'inline-block' }}
        overflowY={{ md: 'hidden' }}
      />
    )

    // md overrides
    await expect(cmp).toHaveCSS('display', 'inline-block')
    await expect(cmp).toHaveCSS('overflow-y', 'hidden')

    // paddings preserved at md
    await expect(cmp).toHaveCSS('padding-top', '9px')
    await expect(cmp).toHaveCSS('padding-bottom', '9px')
    await expect(cmp).toHaveCSS('padding-left', '13px')
    await expect(cmp).toHaveCSS('padding-right', '5px')
  })

  test('at lg: paddings', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(
      <Box
        padding="5px"
        paddingBlock="9px"
        paddingLeft="13px"
        display={{ base: 'block', md: 'inline-block' }}
        overflowY={{ md: 'hidden' }}
      />
    )

    // display/overflow: md override still valid at lg unless changed again
    await expect(cmp).toHaveCSS('display', 'inline-block')
    await expect(cmp).toHaveCSS('overflow-y', 'hidden')

    // paddings unchanged
    await expect(cmp).toHaveCSS('padding-top', '9px')
    await expect(cmp).toHaveCSS('padding-bottom', '9px')
    await expect(cmp).toHaveCSS('padding-left', '13px')
    await expect(cmp).toHaveCSS('padding-right', '5px')
  })

  test('display none at base → block at md (revert-less strategy works)', async ({ mount, page }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(<Box display={{ base: 'none', md: 'block' }} />)
    await expect(cmp).toHaveCSS('display', 'block')
  })
})
