import { expect,test } from '@playwright/experimental-ct-react'

import { Flex } from 'lib/components'

test.describe('Flex responsive props', () => {
  test('flexDirection switches by breakpoint', async ({ mount, page }) => {
    await mount(
      <Flex flexDirection={{ base: 'column', md: 'row' }} tagAttrs={{ 'data-testid': 'flex' }}>
        <div />
      </Flex>
    )

    const flex = page.getByTestId('flex')

    await page.setViewportSize({ width: 360, height: 640 }) // base
    await expect(flex).toHaveCSS('flex-direction', 'column')

    await page.setViewportSize({ width: 1024, height: 768 }) // md+
    await expect(flex).toHaveCSS('flex-direction', 'row')
  })

  test('gap switches by breakpoint', async ({ mount, page }) => {
    await mount(
      <Flex gap={{ base: '0px', md: '16px' }} tagAttrs={{ 'data-testid': 'flex' }}>
        <div />
        <div />
      </Flex>
    )

    const flex = page.getByTestId('flex')

    await page.setViewportSize({ width: 360, height: 640 }) // base
    await expect(flex).toHaveCSS('gap', '0px')

    await page.setViewportSize({ width: 1024, height: 768 }) // md+
    await expect(flex).toHaveCSS('gap', '16px')
  })
})

test('Flex.Item flex property changes at breakpoint', async ({ mount, page }) => {
  await mount(
    <Flex>
      <Flex.Item flex={{ base: '0 1 auto', md: '1 1 0%' }} tagAttrs={{ 'data-testid': 'item' }}>
        A
      </Flex.Item>
    </Flex>
  )

  const item = page.getByTestId('item')

  await page.setViewportSize({ width: 360, height: 640 }) // base
  await expect(item).toHaveCSS('flex', '0 1 auto')

  await page.setViewportSize({ width: 1024, height: 768 }) // md+
  await expect(item).toHaveCSS('flex', '1 1 0%')
})
