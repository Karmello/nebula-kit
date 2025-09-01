import { describe, it, expect, beforeEach } from 'vitest'

import { BREAKPOINTS, type Breakpoint } from 'lib/definitions'

import { computeResponsiveCss } from './'

describe('computeResponsiveCss', () => {
  let el: HTMLElement
  let ref: { current: HTMLElement | null }

  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
    ref = { current: el }
    el.removeAttribute('style')
  })

  it('returns early when ref.current is null (no throw)', () => {
    const nullRef = { current: null as unknown as HTMLElement }
    expect(() =>
      computeResponsiveCss(nullRef, 'base' as Breakpoint, { backgroundColor: 'red' })
    ).not.toThrow()
  })

  it('applies plain (non-responsive) values to camelCased CSS props', () => {
    computeResponsiveCss(ref, 'base' as Breakpoint, {
      backgroundColor: 'red',
      marginTop: '10px',
    })

    expect(ref.current.style.backgroundColor).toBe('red')
    expect(ref.current.style.marginTop).toBe('10px')
  })

  it('applies multiple props together (simple mix: string + number)', () => {
    computeResponsiveCss(ref, 'base' as Breakpoint, {
      opacity: 0.4, // numeric path (no scale)
      display: 'grid', // string passthrough
      gridTemplateColumns: '1fr 2fr',
    })

    expect(ref.current.style.opacity).toBe('0.4')
    expect(ref.current.style.display).toBe('grid')
    expect(ref.current.style.gridTemplateColumns).toBe('1fr 2fr')
  })

  it('cascades responsive values base→sm→md→lg→xl with carry-over per prop', () => {
    const props = {
      backgroundColor: {
        base: 'red',
        sm: 'blue',
        md: 'orange',
        // lg omitted -> carry from md
        xl: 'purple',
      },
      marginTop: {
        base: '2px',
        // sm omitted -> carry from base
        md: undefined, // explicit undefined should be ignored
        lg: '12px',
        // xl omitted -> carry from lg
      } as never,
    }

    computeResponsiveCss(ref, 'base' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('red')
    expect(ref.current.style.marginTop).toBe('2px')

    computeResponsiveCss(ref, 'sm' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('blue')
    expect(ref.current.style.marginTop).toBe('2px')

    computeResponsiveCss(ref, 'md' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('orange')
    expect(ref.current.style.marginTop).toBe('2px') // md undefined -> still base

    computeResponsiveCss(ref, 'lg' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('orange') // carry from md
    expect(ref.current.style.marginTop).toBe('12px')

    computeResponsiveCss(ref, 'xl' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('purple')
    expect(ref.current.style.marginTop).toBe('12px') // carry from lg
  })

  it('stops at the requested breakpoint (no leaking higher values)', () => {
    const props = {
      backgroundColor: {
        base: 'red',
        sm: 'blue',
        md: 'orange',
        lg: 'black',
        xl: 'white',
      },
    }

    computeResponsiveCss(ref, 'md' as Breakpoint, props)
    expect(ref.current.style.backgroundColor).toBe('orange')
    // ensure nothing beyond md was applied
    expect(ref.current.style.backgroundColor).not.toBe('black')
    expect(ref.current.style.backgroundColor).not.toBe('white')
  })

  it('ignores null/undefined entries inside responsive objects', () => {
    const props = {
      marginLeft: {
        base: '4px',
        sm: null,
        md: undefined,
        xl: '20px',
      } as never,
    }

    computeResponsiveCss(ref, 'sm' as Breakpoint, props)
    expect(ref.current.style.marginLeft).toBe('4px') // sm null -> keep base

    computeResponsiveCss(ref, 'md' as Breakpoint, props)
    expect(ref.current.style.marginLeft).toBe('4px') // md undefined -> keep base

    computeResponsiveCss(ref, 'xl' as Breakpoint, props)
    expect(ref.current.style.marginLeft).toBe('20px') // xl defined overrides
  })

  it('handles numeric responsive values without scale-sensitive props (opacity)', () => {
    const props = {
      opacity: { base: 0.25, lg: 0.9 },
    }

    computeResponsiveCss(ref, 'base' as Breakpoint, props)
    expect(ref.current.style.opacity).toBe('0.25')

    computeResponsiveCss(ref, 'lg' as Breakpoint, props)
    expect(ref.current.style.opacity).toBe('0.9')
  })

  it('respects insertion order for shorthand → longhand precedence', () => {
    // Shorthand first, then longhand should win for that side
    computeResponsiveCss(ref, 'base' as Breakpoint, {
      margin: '10px',
      marginTop: '2px',
    })

    expect(ref.current.style.marginTop).toBe('2px')
    // The shorthand still applies to the other sides:
    // jsdom keeps shorthand as a token string; check a different side via computed string
    // but a direct check on marginRight may be empty in inline style; assert top override is the key.
  })

  it('works across all declared BREAKPOINTS for a single prop', () => {
    const props = {
      backgroundColor: {
        base: 'red',
        sm: 'blue',
        md: 'orange',
        lg: 'black',
        xl: 'white',
      },
    }

    for (const bp of BREAKPOINTS) {
      computeResponsiveCss(ref, bp, props)
      const expected =
        bp === 'base'
          ? 'red'
          : bp === 'sm'
            ? 'blue'
            : bp === 'md'
              ? 'orange'
              : bp === 'lg'
                ? 'black'
                : 'white'
      expect(ref.current.style.backgroundColor).toBe(expected)
    }
  })
})
