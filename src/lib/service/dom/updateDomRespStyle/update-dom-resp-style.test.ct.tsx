import { test, expect } from '@playwright/experimental-ct-react'
import { Box } from 'lib/components'

test.describe('<Box /> prop removal behavior', () => {
  test('removing a prop clears the corresponding style in the DOM', async ({ mount }) => {
    const box = await mount(<Box padding="20px" />)

    // initial
    let padding = await box.evaluate(el => el.style.padding)
    expect(padding).toBe('20px')

    // rerender with padding removed
    await box.update(<Box />)
    padding = await box.evaluate(el => el.style.padding)
    expect(padding).toBe('')
  })

  test.describe('<Box /> responsive inheritance', () => {
    test('md inherits base when md value is undefined', async ({ mount, page }) => {
      const box = await mount(<Box padding={{ base: '10px', md: undefined }} />)

      // mobile — base value
      await page.setViewportSize({ width: 375, height: 800 })
      let padding = await box.evaluate(el => el.style.padding)
      expect(padding).toBe('10px')

      // md — inherits base value
      await page.setViewportSize({ width: 1024, height: 800 })
      await page.waitForTimeout(50)
      padding = await box.evaluate(el => el.style.padding)
      expect(padding).toBe('10px')
    })
  })

  test.describe('<Box /> hot reload simulation', () => {
    test('toggling a prop multiple times never leaves stale DOM values', async ({ mount }) => {
      const box = await mount(<Box margin="12px" />)

      let margin = await box.evaluate(el => el.style.margin)
      expect(margin).toBe('12px')

      // remove
      await box.update(<Box />)
      margin = await box.evaluate(el => el.style.margin)
      expect(margin).toBe('')

      // re-add
      await box.update(<Box margin="8px" />)
      margin = await box.evaluate(el => el.style.margin)
      expect(margin).toBe('8px')

      // remove again
      await box.update(<Box />)
      margin = await box.evaluate(el => el.style.margin)
      expect(margin).toBe('')
    })
  })

  test.describe('<Box /> multi-prop responsiveness', () => {
    test('merges multiple props and updates only the changed ones', async ({ mount }) => {
      const box = await mount(<Box padding="10px" margin="5px" />)

      let padding = await box.evaluate(el => el.style.padding)
      let margin = await box.evaluate(el => el.style.margin)

      expect(padding).toBe('10px')
      expect(margin).toBe('5px')

      // update only padding
      await box.update(<Box padding="20px" margin="5px" />)

      padding = await box.evaluate(el => el.style.padding)
      margin = await box.evaluate(el => el.style.margin)

      expect(padding).toBe('20px')
      expect(margin).toBe('5px') // unchanged, NOT reset
    })
  })

  test.describe('<Box /> selective reset behavior', () => {
    test('only removes keys that disappeared from props', async ({ mount }) => {
      const box = await mount(<Box padding="12px" margin="6px" />)

      // sanity check
      let padding = await box.evaluate(el => el.style.padding)
      let margin = await box.evaluate(el => el.style.margin)
      expect(padding).toBe('12px')
      expect(margin).toBe('6px')

      // remove only padding
      await box.update(<Box margin="6px" />)

      padding = await box.evaluate(el => el.style.padding)
      margin = await box.evaluate(el => el.style.margin)

      expect(padding).toBe('') // should reset
      expect(margin).toBe('6px') // should stay
    })
  })
})
