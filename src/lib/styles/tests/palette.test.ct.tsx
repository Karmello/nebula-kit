import { expect,test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Theme remaps palette steps for light and dark modes', async ({ mount, page }) => {
  await mount(
    <>
      <Box tagAttrs={{ id: 'light-box' }} theme="light" />
      <Box tagAttrs={{ id: 'dark-box' }} theme="dark" />
    </>
  )

  const result = await page.evaluate(() => {
    const light = document.getElementById('light-box')!
    const dark = document.getElementById('dark-box')!

    const lightStyles = getComputedStyle(light)
    const darkStyles = getComputedStyle(dark)

    return {
      lightL0: lightStyles.getPropertyValue('--l-0').trim(),
      lightL25: lightStyles.getPropertyValue('--l-25').trim(),
      darkL0: darkStyles.getPropertyValue('--l-0').trim(),
      darkL25: darkStyles.getPropertyValue('--l-25').trim(),
    }
  })

  expect(result.lightL0).not.toBe('')
  expect(result.lightL25).not.toBe('')
  expect(result.darkL0).not.toBe('')
  expect(result.darkL25).not.toBe('')

  expect(result.lightL0).not.toBe(result.lightL25)
  expect(result.darkL0).not.toBe(result.darkL25)

  expect(result.lightL0).toBe(result.darkL25)
  expect(result.lightL25).toBe(result.darkL0)
})
