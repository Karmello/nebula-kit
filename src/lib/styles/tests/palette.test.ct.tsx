import { expect, test } from '@playwright/experimental-ct-react'

import { Box, StylingIsland } from 'lib/components'

test('Theme remaps palette steps for light and dark modes', async ({ mount, page }) => {
  await mount(
    <>
      <StylingIsland theme="light">
        <Box elemAttrs={{ id: 'light-neutral' }} intent="neutral" />
        <Box elemAttrs={{ id: 'light-strong' }} intent="strong" />
      </StylingIsland>
      <StylingIsland theme="dark">
        <Box elemAttrs={{ id: 'dark-neutral' }} intent="neutral" />
        <Box elemAttrs={{ id: 'dark-strong' }} intent="strong" />
      </StylingIsland>
    </>
  )

  const result = await page.evaluate(() => {
    const lightNeutral = document.getElementById('light-neutral')!
    const lightStrong = document.getElementById('light-strong')!
    const darkNeutral = document.getElementById('dark-neutral')!
    const darkStrong = document.getElementById('dark-strong')!

    return {
      lightNeutral: getComputedStyle(lightNeutral).getPropertyValue('--color-base').trim(),
      lightStrong: getComputedStyle(lightStrong).getPropertyValue('--color-base').trim(),
      darkNeutral: getComputedStyle(darkNeutral).getPropertyValue('--color-base').trim(),
      darkStrong: getComputedStyle(darkStrong).getPropertyValue('--color-base').trim(),
    }
  })

  expect(result.lightNeutral).not.toBe('')
  expect(result.lightStrong).not.toBe('')
  expect(result.darkNeutral).not.toBe('')
  expect(result.darkStrong).not.toBe('')

  // steps differ within a theme
  expect(result.lightNeutral).not.toBe(result.lightStrong)
  expect(result.darkNeutral).not.toBe(result.darkStrong)

  // theme remaps the same step to a different resolved value
  expect(result.lightNeutral).not.toBe(result.darkNeutral)
  expect(result.lightStrong).not.toBe(result.darkStrong)
})
