import { updateDomStaticDataset } from '../updateDomStaticDataset'

describe('updateDomStaticDataset', () => {
  it('returns empty object when props is undefined', () => {
    expect(updateDomStaticDataset('Box', undefined)).toEqual({})
  })

  it('returns empty object when props is empty', () => {
    expect(updateDomStaticDataset('Text', {} as any)).toEqual({})
  })

  it('builds data attributes for defined props only', () => {
    const out = updateDomStaticDataset('Box', {
      variant: 'primary',
      intent: 'success',
      interactive: true,
      disabled: false,
      typography: 'body-m',
      side: 'left',
      open: true,
    } as any)

    expect(out).toEqual({
      'data-neb-box-variant': 'primary',
      'data-neb-box-intent': 'success',
      'data-neb-box-interactive': true,
      'data-neb-box-disabled': false,
      'data-neb-box-typography': 'body-m',
      'data-neb-box-side': 'left',
      'data-neb-box-open': true,
    })
  })

  it('skips undefined props', () => {
    const out = updateDomStaticDataset('Box', {
      variant: undefined,
      intent: 'error',
      interactive: undefined,
      disabled: true,
    } as any)

    expect(out).toEqual({
      'data-neb-box-intent': 'error',
      'data-neb-box-disabled': true,
    })
  })

  it('supports the dashed prefix "nav-layout"', () => {
    const out = updateDomStaticDataset('AppFrameHeader', {
      side: 'start',
      open: false,
    } as any)

    expect(out).toEqual({
      'data-neb-app-frame-header-side': 'start',
      'data-neb-app-frame-header-open': false,
    })
  })

  it('booleans are preserved as booleans', () => {
    const out = updateDomStaticDataset('Text', {
      disabled: true,
      interactive: false,
    } as any)

    expect(typeof out['data-neb-text-disabled' as never]).toBe('boolean')
    expect(typeof out['data-neb-text-interactive' as never]).toBe('boolean')
    expect(out['data-neb-text-disabled' as never]).toBe(true)
    expect(out['data-neb-text-interactive' as never]).toBe(false)
  })

  it('current behavior: unknown keys are forwarded if present on the object', () => {
    const out = updateDomStaticDataset('Box', {
      // valid keys
      variant: 'ghost',
      // extra key not part of DataAttrProps at type level
      custom: 'whoops',
    } as any)

    // data attribute for known key
    expect(out['data-neb-box-variant' as never]).toBe('ghost')
    // data attribute for unknown key (documenting current behavior)
    expect(out['data-neb-box-custom' as never]).toBe('whoops')
  })
})
