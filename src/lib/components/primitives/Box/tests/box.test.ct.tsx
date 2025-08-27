import { test, expect } from '@playwright/experimental-ct-react'

import { Box } from '../box'

test('pb > py > p at base', async ({ mount }) => {
  const cmp = await mount(<Box data-testid="box" p="5px" py="9px" pb="20px" />)

  await expect(cmp).toHaveAttribute('data-testid', 'box')
  await expect(cmp).toHaveClass(/neb-box/)
  await expect(cmp).toHaveAttribute('style', /--neb-box-pb-base:\s*20px/)
  await expect(cmp).toHaveAttribute('style', /--neb-box-py-base:\s*9px/)
  await expect(cmp).toHaveAttribute('style', /--neb-box-p-base:\s*5px/)

  await expect(cmp).toHaveCSS('padding-bottom', '20px')
  await expect(cmp).toHaveCSS('padding-top', '9px')
})
