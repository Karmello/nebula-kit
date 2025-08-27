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
        p="6px"
        py="8px"
        pl="12px"
        m="4px"
        my="10px"
        mr="2px"
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

  test('sizes + position + borderRadius + typography co-exist', async ({ mount }) => {
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
        fontSize="16px"
        lineHeight={1.5}
        textAlign="right"
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

    await expect(cmp).toHaveCSS('font-size', '16px')
    await expect(cmp).toHaveCSS('line-height', '24px') // 1.5 * 16px
    await expect(cmp).toHaveCSS('text-align', 'right')
  })

  test('responsive mix: display/overflow at md, typography at lg, paddings remain intact', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize(vp.md)
    const cmp = await mount(
      <Box
        // base paddings that should remain unless overridden at bp
        p="5px"
        py="9px"
        pl="13px"
        // responsive display/overflow
        display={{ base: 'block', md: 'inline-block' }}
        overflowY={{ md: 'hidden' }}
        // responsive typography (only at lg)
        fontSize={{ lg: '20px' }}
        lineHeight={1.2}
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

    // typography still at base on md
    await expect(cmp).toHaveCSS('font-size', '16px') // default base (if your base differs, adjust)
    await expect(cmp).toHaveCSS('line-height', '19.2px') // 1.2 * 16px (adjust if base font size differs)
  })

  test('at lg: typography override kicks in; paddings still unchanged', async ({ mount, page }) => {
    await page.setViewportSize(vp.lg)
    const cmp = await mount(
      <Box
        p="5px"
        py="9px"
        pl="13px"
        display={{ base: 'block', md: 'inline-block' }}
        overflowY={{ md: 'hidden' }}
        fontSize={{ lg: '20px' }}
        lineHeight={1.2}
      />
    )

    // display/overflow: md override still valid at lg unless changed again
    await expect(cmp).toHaveCSS('display', 'inline-block')
    await expect(cmp).toHaveCSS('overflow-y', 'hidden')

    // typography: lg override applied
    await expect(cmp).toHaveCSS('font-size', '20px')
    await expect(cmp).toHaveCSS('line-height', '24px') // 1.2 * 20px

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
