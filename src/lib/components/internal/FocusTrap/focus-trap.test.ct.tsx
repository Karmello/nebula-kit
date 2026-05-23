import { test, expect } from '@playwright/experimental-ct-react'

import { FocusTrapHarness } from './focus-trap.stories.ct'

test('keeps input focused while typing', async ({ mount }) => {
  const component = await mount(<FocusTrapHarness />)

  const openButton = component.getByRole('button', { name: 'open' })
  await openButton.click()

  const input = component.getByRole('textbox')
  await input.click()

  await input.type('hello world')

  // This is the regression guard
  await expect(input).toBeFocused()
  await expect(input).toHaveValue('hello world')

  // Close just to ensure no crash
  const closeButton = component.getByRole('button', { name: 'close' })
  await closeButton.click()
})

test('Escape closes FocusTrap', async ({ mount }) => {
  const component = await mount(<FocusTrapHarness />)

  const openButton = component.getByRole('button', { name: 'open' })
  await openButton.click()

  const input = component.getByRole('textbox')
  await input.click()

  // sanity: we are inside the trap
  await expect(input).toBeFocused()

  // press Escape
  await component.press('Escape')

  // trap should be gone
  await expect(component.getByRole('textbox')).toHaveCount(0)
})
