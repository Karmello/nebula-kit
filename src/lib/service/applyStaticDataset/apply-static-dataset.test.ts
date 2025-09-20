import { applyStaticDataset } from '../applyStaticDataset'

describe('applyStaticDataset', () => {
  it('returns empty object when props is undefined', () => {
    expect(applyStaticDataset('box', undefined)).toEqual({})
  })

  it('returns empty object when props is empty', () => {
    expect(applyStaticDataset('text', {} as any)).toEqual({})
  })

  it('builds data attributes for defined props only', () => {
    const out = applyStaticDataset('box', {
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
    const out = applyStaticDataset('box', {
      variant: undefined,
      intent: 'danger',
      interactive: undefined,
      disabled: true,
    } as any)

    expect(out).toEqual({
      'data-neb-box-intent': 'danger',
      'data-neb-box-disabled': true,
    })
  })

  it('supports the dashed prefix "nav-layout"', () => {
    const out = applyStaticDataset('nav-layout', {
      side: 'start',
      open: false,
    } as any)

    expect(out).toEqual({
      'data-neb-nav-layout-side': 'start',
      'data-neb-nav-layout-open': false,
    })
  })

  it('booleans are preserved as booleans', () => {
    const out = applyStaticDataset('text', {
      disabled: true,
      interactive: false,
    } as any)

    expect(typeof out['data-neb-text-disabled' as never]).toBe('boolean')
    expect(typeof out['data-neb-text-interactive' as never]).toBe('boolean')
    expect(out['data-neb-text-disabled' as never]).toBe(true)
    expect(out['data-neb-text-interactive' as never]).toBe(false)
  })

  it('current behavior: unknown keys are forwarded if present on the object', () => {
    const out = applyStaticDataset('box', {
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
