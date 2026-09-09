import { expect, test } from '@playwright/experimental-ct-react'

import { Box } from 'lib/components'

test('Theme remaps palette steps for light and dark modes', async ({ mount, page }) => {
  await mount(
    <>
      <Box tagAttrs={{ id: 'light-neutral' }} theme="light" intent="neutral" />
      <Box tagAttrs={{ id: 'light-strong' }} theme="light" intent="strong" />
      <Box tagAttrs={{ id: 'dark-neutral' }} theme="dark" intent="neutral" />
      <Box tagAttrs={{ id: 'dark-strong' }} theme="dark" intent="strong" />
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
