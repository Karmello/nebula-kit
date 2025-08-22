import { getDataAttrs } from '../getDataAttrs'

describe('getDataAttrs', () => {
  it('returns empty object when props is undefined', () => {
    expect(getDataAttrs('box', undefined)).toEqual({})
  })

  it('returns empty object when props is empty', () => {
    expect(getDataAttrs('text', {} as any)).toEqual({})
  })

  it('builds data attributes for defined props only', () => {
    const out = getDataAttrs('box', {
      variant: 'primary',
      intent: 'success',
      interactive: true,
      disabled: false,
      typography: 'body-m',
      side: 'left',
      open: true,
    } as any)

    expect(out).toEqual({
      'data-box-variant': 'primary',
      'data-box-intent': 'success',
      'data-box-interactive': true,
      'data-box-disabled': false,
      'data-box-typography': 'body-m',
      'data-box-side': 'left',
      'data-box-open': true,
    })
  })

  it('skips undefined props', () => {
    const out = getDataAttrs('box', {
      variant: undefined,
      intent: 'danger',
      interactive: undefined,
      disabled: true,
    } as any)

    expect(out).toEqual({
      'data-box-intent': 'danger',
      'data-box-disabled': true,
    })
  })

  it('supports the dashed prefix "nav-layout"', () => {
    const out = getDataAttrs('nav-layout', {
      side: 'start',
      open: false,
    } as any)

    expect(out).toEqual({
      'data-nav-layout-side': 'start',
      'data-nav-layout-open': false,
    })
  })

  it('booleans are preserved as booleans', () => {
    const out = getDataAttrs('text', {
      disabled: true,
      interactive: false,
    } as any)

    expect(typeof out['data-text-disabled' as never]).toBe('boolean')
    expect(typeof out['data-text-interactive' as never]).toBe('boolean')
    expect(out['data-text-disabled' as never]).toBe(true)
    expect(out['data-text-interactive' as never]).toBe(false)
  })

  it('current behavior: unknown keys are forwarded if present on the object', () => {
    const out = getDataAttrs('box', {
      // valid keys
      variant: 'ghost',
      // extra key not part of DataAttrProps at type level
      custom: 'whoops',
    } as any)

    // data attribute for known key
    expect(out['data-box-variant' as never]).toBe('ghost')
    // data attribute for unknown key (documenting current behavior)
    expect(out['data-box-custom' as never]).toBe('whoops')
  })
})
