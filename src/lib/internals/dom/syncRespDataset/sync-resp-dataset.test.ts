import { describe, expect,it } from 'vitest'

import { syncRespDataset } from '../syncRespDataset'

describe('syncRespDataset', () => {
  it('applies a plain value to dataset and stores controlled prop names', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: 8,
        margin: undefined, // should be ignored completely
      } as any
    )

    // It should apply exactly one dataset entry (padding)
    const datasetValues = Object.values(el.dataset)
    expect(datasetValues).toHaveLength(1)
    expect(datasetValues[0]).toBe('8')

    // It should persist the set of "currently controlled" props for cleanup later
    const storeKey = 'neb_resp_dataset_box'
    expect(el).toHaveProperty(storeKey)

    const stored = (el as any)[storeKey]
    expect(stored instanceof Set).toBe(true)
    expect(stored.has('padding')).toBe(true)
    expect(stored.has('margin')).toBe(false)
  })

  it('propagates base value to later breakpoints when no overrides exist', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // initial render at base
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: { base: 8 },
      } as any
    )

    const baseDatasetSnapshot = { ...el.dataset }

    // simulate breakpoint change to md
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: { base: 8 },
      } as any
    )

    const mdDatasetSnapshot = { ...el.dataset }

    // dataset should be identical — base value propagates
    expect(mdDatasetSnapshot).toEqual(baseDatasetSnapshot)

    // still only one controlled prop
    const storeKey = 'neb_resp_dataset_box'
    const stored = (el as any)[storeKey]
    expect(stored.has('padding')).toBe(true)
    expect(stored.size).toBe(1)
  })

  it('overrides base value at a breakpoint and propagates override forward', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // base render
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    const baseValue = Object.values(el.dataset)[0]
    expect(baseValue).toBe('8')

    // md breakpoint
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    const mdValue = Object.values(el.dataset)[0]
    expect(mdValue).toBe('16')

    // lg breakpoint (override should persist)
    syncRespDataset(
      'Box',
      ref,
      'lg' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    const lgValue = Object.values(el.dataset)[0]
    expect(lgValue).toBe('16')
  })

  it('removes dataset attribute when a previously controlled prop is removed', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // initial render with padding
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: 8,
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // re-render without padding prop
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: undefined,
      } as any
    )

    // dataset should now be empty
    expect(Object.values(el.dataset)).toHaveLength(0)

    // controlled prop set should be updated
    const storeKey = 'neb_resp_dataset_box'
    const stored = (el as any)[storeKey]
    expect(stored.has('padding')).toBe(false)
    expect(stored.size).toBe(0)
  })

  it('clears dataset when a responsive prop is removed even if it was previously inherited', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // set responsive value (base only)
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: { base: 8 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // at md it should still be applied while prop exists
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: { base: 8 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // now remove the prop from JSX entirely
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: undefined,
      } as any
    )

    // dataset should be cleared - back to "prop not passed at all"
    expect(Object.values(el.dataset)).toHaveLength(0)

    // and it should no longer be tracked as controlled
    const storeKey = 'neb_resp_dataset_box'
    const stored = (el as any)[storeKey]
    expect(stored.size).toBe(0)
  })

  it('does not cancel base value when later breakpoint is undefined or null while prop exists', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // base value defined, lg explicitly undefined
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: { base: 8, lg: undefined },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // move to md — still inherited from base
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: { base: 8, lg: undefined },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // move to lg — undefined must not cancel base
    syncRespDataset(
      'Box',
      ref,
      'lg' as any,
      {
        padding: { base: 8, lg: undefined },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // same behavior with null
    syncRespDataset(
      'Box',
      ref,
      'lg' as any,
      {
        padding: { base: 8, lg: null },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])
  })

  it('isolates dataset and cleanup between Box and Button on the same DOM node', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // Box writes its dataset
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: 8,
      } as any
    )

    // Button writes its dataset on the same element
    syncRespDataset(
      'Button',
      ref,
      'base' as any,
      {
        intent: 'primary',
      } as any
    )

    const datasetValuesAfterBoth = Object.values(el.dataset)
    expect(datasetValuesAfterBoth.length).toBe(2)

    // Now remove Box prop
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: undefined,
      } as any
    )

    // Button dataset must remain
    const remainingValues = Object.values(el.dataset)
    expect(remainingValues.length).toBe(1)
    expect(remainingValues[0]).toBe('primary')

    // Box store should be empty
    const boxStoreKey = 'neb_resp_dataset_box'
    const boxStored = (el as any)[boxStoreKey]
    expect(boxStored.size).toBe(0)

    // Button store should still contain its prop
    const buttonStoreKey = 'neb_resp_dataset_button'
    const buttonStored = (el as any)[buttonStoreKey]
    expect(buttonStored.size).toBe(1)
    expect(buttonStored.has('intent')).toBe(true)
  })

  it('handles breakpoint changes, overrides and prop removal without leaving stale dataset', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // initial: base only
    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // move to sm (still base)
    syncRespDataset(
      'Box',
      ref,
      'sm' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['8'])

    // move to md (override kicks in)
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['16'])

    // move to lg (override propagates)
    syncRespDataset(
      'Box',
      ref,
      'lg' as any,
      {
        padding: { base: 8, md: 16 },
      } as any
    )

    expect(Object.values(el.dataset)).toEqual(['16'])

    // now remove the prop entirely
    syncRespDataset(
      'Box',
      ref,
      'lg' as any,
      {
        padding: undefined,
      } as any
    )

    // everything should be wiped
    expect(Object.values(el.dataset)).toHaveLength(0)

    // store should also be reset
    const storeKey = 'neb_resp_dataset_box'
    const stored = (el as any)[storeKey]
    expect(stored.size).toBe(0)

    // move breakpoint again — nothing should reappear
    syncRespDataset(
      'Box',
      ref,
      'md' as any,
      {
        padding: undefined,
      } as any
    )

    expect(Object.values(el.dataset)).toHaveLength(0)
  })

  it('does not rewrite dataset attributes when resolved value is unchanged', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: 8,
      } as any
    )

    const setAttrSpy = vi.spyOn(el, 'setAttribute')

    syncRespDataset(
      'Box',
      ref,
      'base' as any,
      {
        padding: 8,
      } as any
    )

    expect(setAttrSpy).not.toHaveBeenCalled()
  })
})
