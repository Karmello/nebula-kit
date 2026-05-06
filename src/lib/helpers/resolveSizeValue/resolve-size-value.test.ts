import { describe, it, expect } from 'vitest'

import { SIZING_SCALE } from 'lib/definitions'

import { resolveSizeValue } from './resolve-size-value'

describe('resolveSizeValue', () => {
  it('resolves a single T-shirt size to its CSS value', () => {
    const result = resolveSizeValue('md')

    expect(result).toBe(SIZING_SCALE.md)
  })

  it('leaves custom CSS length values unchanged', () => {
    const result = resolveSizeValue('42px')

    expect(result).toBe('42px')
  })

  it('resolves responsive values across breakpoints', () => {
    const result = resolveSizeValue({
      base: 'sm',
      md: 'lg',
    })

    expect(result).toEqual({
      base: SIZING_SCALE.sm,
      md: SIZING_SCALE.lg,
    })
  })

  it('resolves margin shorthand values using sizing scale', () => {
    const result = resolveSizeValue('sm md', 'margin')

    expect(result).toBe(`${SIZING_SCALE.sm} ${SIZING_SCALE.md}`)
  })

  it('mixes sizing scale tokens and raw values in margin shorthand', () => {
    const result = resolveSizeValue('sm 10px lg', 'margin')

    expect(result).toBe(`${SIZING_SCALE.sm} 10px ${SIZING_SCALE.lg}`)
  })

  it('removes undefined breakpoint values in responsive object', () => {
    const result = resolveSizeValue({
      base: 'sm',
      md: undefined,
      lg: 'lg',
    })

    expect(result).toEqual({
      base: SIZING_SCALE.sm,
      lg: SIZING_SCALE.lg,
    })
  })

  it('returns non-string values unchanged', () => {
    const result = resolveSizeValue(0 as any)

    expect(result).toBe(0)
  })

  it('handles null values without crashing and returns them unchanged', () => {
    const result = resolveSizeValue(null as any)

    expect(result).toBe(null)
  })

  it('ignores extra whitespace in margin shorthand values', () => {
    const result = resolveSizeValue('  sm   md  ', 'margin')

    expect(result).toBe(`${SIZING_SCALE.sm} ${SIZING_SCALE.md}`)
  })
})
