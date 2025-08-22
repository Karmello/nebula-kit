import { kebabCase } from 'lodash'
import { BREAKPOINTS, CSS_VARS_CONFIG } from 'lib-2/definitions'

import { getCssVars } from '../getCssVars'

describe('getCssVars', () => {
  const prefix = Object.keys(CSS_VARS_CONFIG)[0] as keyof typeof CSS_VARS_CONFIG

  it('returns empty object when props is undefined', () => {
    expect(getCssVars(prefix as any, undefined)).toEqual({})
  })

  it('returns empty object when props is an empty object', () => {
    expect(getCssVars(prefix as any, {} as any)).toEqual({})
  })

  it('merges css vars from multiple primitive props across all breakpoints', () => {
    const out = getCssVars(
      prefix as any,
      {
        gap: 2,
        columns: 3,
      } as any
    )

    const g = kebabCase('gap')
    const c = kebabCase('columns')

    BREAKPOINTS.forEach(bp => {
      const gapKey = `--${prefix}-${g}-${bp}`
      const colKey = `--${prefix}-${c}-${bp}`

      expect(out[gapKey as never]).toBe('var(--scale-2)')
      expect(out[colKey as never]).toBe('repeat(3, 1fr)')
    })

    // sanity: has exactly 2 * BREAKPOINTS keys
    expect(Object.keys(out).length).toBe(BREAKPOINTS.length * 2)
  })

  it('passes through string values and mixes with numeric ones', () => {
    const out = getCssVars(
      prefix as any,
      {
        padding: 'var(--space-m)',
        lineHeight: 1.5,
      } as any
    )

    const p = kebabCase('padding')
    const lh = kebabCase('lineHeight')

    BREAKPOINTS.forEach(bp => {
      expect(out[`--${prefix}-${p}-${bp}` as never]).toBe('var(--space-m)')
      expect(out[`--${prefix}-${lh}-${bp}` as never]).toBe(1.5)
    })
  })

  it('handles responsive objects and carries forward last specified breakpoint value', () => {
    const propName = 'gap'
    const kebab = kebabCase(propName)

    // define only some breakpoints to exercise carry-forward logic
    const responsive: Record<string, number> = {}
    if (BREAKPOINTS.length >= 3) {
      responsive[BREAKPOINTS[0]] = 1
      responsive[BREAKPOINTS[2]] = 3
    } else {
      // fallback: at least set the first
      responsive[BREAKPOINTS[0]] = 1
    }

    const out = getCssVars(prefix as any, { [propName]: responsive } as any)

    // walk in order, mirroring getSingleCssVar behavior
    let last = (responsive[BREAKPOINTS[0]] ?? undefined) as number | undefined
    BREAKPOINTS.forEach((bp, i) => {
      if (responsive[bp] !== undefined) last = responsive[bp]
      const key = `--${prefix}-${kebab}-${bp}`
      // once a number appears, it should be wrapped with the scale token and persist forward
      expect(out[key as never]).toBe(`var(--scale-${last})`)
    })
  })

  it('combines responsive and primitive props without overwriting each other', () => {
    const out = getCssVars(
      prefix as any,
      {
        gap: { [BREAKPOINTS[0]]: 2 } as any,
        columns: 4,
      } as any
    )

    const g = kebabCase('gap')
    const c = kebabCase('columns')

    // gap should carry 2 forward
    BREAKPOINTS.forEach(bp => {
      expect(out[`--${prefix}-${g}-${bp}` as never]).toBe('var(--scale-2)')
      expect(out[`--${prefix}-${c}-${bp}` as never]).toBe('repeat(4, 1fr)')
    })
  })
})
