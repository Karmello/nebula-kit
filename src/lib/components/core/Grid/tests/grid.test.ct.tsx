import { expect,test } from '@playwright/experimental-ct-react'

import { Grid } from 'lib/components'

test.describe('Grid responsive props', () => {
  test('gridTemplateColumns switches by breakpoint', async ({ mount, page }) => {
    await mount(
      <Grid gridTemplateColumns={{ base: '100px', md: '200px 300px' }} tagAttrs={{ 'data-testid': 'grid' }}>
        <div />
        <div />
      </Grid>
    )

    const grid = page.getByTestId('grid')

    await page.setViewportSize({ width: 360, height: 640 }) // base
    await expect(grid).toHaveCSS('grid-template-columns', '100px')

    await page.setViewportSize({ width: 1024, height: 768 }) // md+
    await expect(grid).toHaveCSS('grid-template-columns', '200px 300px')
  })

  test('gap switches by breakpoint', async ({ mount, page }) => {
    await mount(
      <Grid gap={{ base: '4px', md: '16px' }} tagAttrs={{ 'data-testid': 'grid' }}>
        <div />
        <div />
      </Grid>
    )

    const grid = page.getByTestId('grid')

    await page.setViewportSize({ width: 360, height: 640 }) // base
    await expect(grid).toHaveCSS('gap', '4px')

    await page.setViewportSize({ width: 1024, height: 768 }) // md+
    await expect(grid).toHaveCSS('gap', '16px')
  })
})
