import { syncRespStyle } from '../syncRespStyle'

describe('syncRespStyle', () => {
  it('applies a plain style value and stores applied keys', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
      margin: undefined, // ignored
    })

    expect(el.style.padding).toBe('8px')
    expect(el.style.margin).toBe('')

    const storeKey = 'neb_resp_style_box'
    const stored = (el as any)[storeKey]

    expect(stored instanceof Set).toBe(true)
    expect(stored.has('padding')).toBe(true)
    expect(stored.has('margin')).toBe(false)
  })

  it('inherits base value at larger breakpoints', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'md' as any, {
      gap: '12px',
    })

    expect(el.style.gap).toBe('12px')
  })

  it('overrides base value at the current breakpoint', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'md' as any, {
      padding: {
        base: '8px',
        md: '16px',
      },
    })

    expect(el.style.padding).toBe('16px')
  })

  it('does not unset inherited value when breakpoint omits it', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'md' as any, {
      padding: {
        base: '8px',
      },
    })

    expect(el.style.padding).toBe('8px')
  })

  it('cleans up style when prop is removed from props', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    // First render
    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    expect(el.style.padding).toBe('8px')

    // Second render: prop removed
    syncRespStyle('Box', ref, 'base' as any, {})

    expect(el.style.padding).toBe('')
  })

  it('does not clean up unrelated inline styles', () => {
    const el = document.createElement('div')
    el.style.color = 'red'

    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    syncRespStyle('Box', ref, 'base' as any, {})

    expect(el.style.padding).toBe('')
    expect(el.style.color).toBe('red')
  })

  it('namespaces applied styles per component type', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    syncRespStyle('Flex', ref, 'base' as any, {})

    // Box-applied style must survive Flex update
    expect(el.style.padding).toBe('8px')
  })

  it('is idempotent when called repeatedly with same values', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      gap: '10px',
    })

    syncRespStyle('Box', ref, 'base' as any, {
      gap: '10px',
    })

    expect(el.style.gap).toBe('10px')
  })

  it('does not override initial inline styles (user ownership)', () => {
    const el = document.createElement('div')
    el.style.padding = '20px' // simulate tagAttrs.style

    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    expect(el.style.padding).toBe('20px') // must stay user-defined
  })

  it('does not track user-defined styles as system-owned', () => {
    const el = document.createElement('div')
    el.style.padding = '20px'

    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    const storeKey = 'neb_resp_style_box'
    const stored = (el as any)[storeKey]

    expect(stored.has('padding')).toBe(false)
  })

  it('still updates system-owned styles responsively', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    syncRespStyle('Box', ref, 'md' as any, {
      padding: {
        base: '8px',
        md: '16px',
      },
    })

    expect(el.style.padding).toBe('16px')
  })

  it('preserves user inline styles across multiple updates', () => {
    const el = document.createElement('div')
    el.style.padding = '20px'

    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    syncRespStyle('Box', ref, 'md' as any, {
      padding: {
        base: '8px',
        md: '16px',
      },
    })

    expect(el.style.padding).toBe('20px')
  })

  it('does not clean up user inline styles', () => {
    const el = document.createElement('div')
    el.style.padding = '20px'

    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    syncRespStyle('Box', ref, 'base' as any, {})

    expect(el.style.padding).toBe('20px')
  })

  it('does not rewrite style when resolved value is unchanged', () => {
    const el = document.createElement('div')
    const ref = { current: el }

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    const setPropertySpy = vi.spyOn(el.style, 'setProperty')

    syncRespStyle('Box', ref, 'base' as any, {
      padding: '8px',
    })

    expect(setPropertySpy).not.toHaveBeenCalled()
  })
})
