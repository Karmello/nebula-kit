import { kebabCase } from 'lodash'

import { BREAKPOINTS, CSS_VARS_CONFIG } from 'lib/definitions'
import { getSingleCssVar } from '../getSingleCssVar'

describe('getSingleCssVar', () => {
  // pick a real prefix from your config so the generated var names are valid
  const prefix = Object.keys(CSS_VARS_CONFIG)[0] as keyof typeof CSS_VARS_CONFIG

  it('returns empty object when the prop is undefined', () => {
    const out = getSingleCssVar(prefix as any, {}, 'gap')
    expect(out).toEqual({})
  })

  it('emits vars for every breakpoint for a primitive string value (passes through)', () => {
    const propName = 'gap'
    const value = 'var(--space-m)'
    const out = getSingleCssVar(prefix as any, { [propName]: value } as any, propName)

    const kebab = kebabCase(propName)
    const expectedKeys = BREAKPOINTS.map(bp => `--${prefix}-${kebab}-${bp}`)
    expect(Object.keys(out)).toEqual(expectedKeys)
    expectedKeys.forEach(k => expect(out[k]).toBe(value))
  })

  it('emits vars for every breakpoint for a primitive number and wraps with scale (non-special prop)', () => {
    const propName = 'gap'
    const value = 4
    const out = getSingleCssVar(prefix as any, { [propName]: value } as any, propName)

    const kebab = kebabCase(propName)
    BREAKPOINTS.forEach(bp => {
      const key = `--${prefix}-${kebab}-${bp}`
      expect(out[key]).toBe('var(--scale-4)')
    })
  })

  it('formats columns as repeat(n, 1fr) when given a number', () => {
    const propName = 'columns'
    const out = getSingleCssVar(prefix as any, { [propName]: 3 } as any, propName)

    const kebab = kebabCase(propName)
    BREAKPOINTS.forEach(bp => {
      const key = `--${prefix}-${kebab}-${bp}`
      expect(out[key]).toBe('repeat(3, 1fr)')
    })
  })

  it('returns a raw number for lineHeight', () => {
    const propName = 'lineHeight'
    const out = getSingleCssVar(prefix as any, { [propName]: 1.6 } as any, propName)

    const kebab = kebabCase(propName)
    BREAKPOINTS.forEach(bp => {
      const key = `--${prefix}-${kebab}-${bp}`
      expect(out[key]).toBe(1.6)
      expect(typeof out[key]).toBe('number')
    })
  })

  it('handles responsive object values, overriding per breakpoint', () => {
    const propName = 'gap'
    // build a value per breakpoint so we don't depend on defaults
    const responsive: Record<string, number> = {}
    BREAKPOINTS.forEach((bp, i) => {
      responsive[bp] = i + 1 // 1,2,3,...
    })

    const out = getSingleCssVar(prefix as any, { [propName]: responsive } as any, propName)
    const kebab = kebabCase(propName)

    BREAKPOINTS.forEach((bp, i) => {
      const key = `--${prefix}-${kebab}-${bp}`
      expect(out[key]).toBe(`var(--scale-${i + 1})`)
    })
  })

  it('carries forward last seen value when some breakpoints are missing', () => {
    const propName = 'gap'
    // only define the first two breakpoints
    const partial: Record<string, number> = {}
    if (BREAKPOINTS.length >= 2) {
      partial[BREAKPOINTS[0]] = 2
      partial[BREAKPOINTS[1]] = 3
    }

    const out = getSingleCssVar(prefix as any, { [propName]: partial } as any, propName)
    const kebab = kebabCase(propName)

    let last = partial[BREAKPOINTS[0]] ?? (undefined as unknown as number)
    BREAKPOINTS.forEach(bp => {
      if (partial[bp] !== undefined) last = partial[bp]
      const key = `--${prefix}-${kebab}-${bp}`
      // once a number is set, it should persist forward
      expect(out[key]).toBe(`var(--scale-${last})`)
    })
  })
})
