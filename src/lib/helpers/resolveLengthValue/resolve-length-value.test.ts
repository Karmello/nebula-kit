import { describe, it, expect } from 'vitest'

import { LENGTH_SCALE } from 'lib/constants'

import { resolveLengthValue } from './resolve-length-value'

describe('resolveLengthValue', () => {
  it('resolves a single T-shirt size to its CSS value', () => {
    const result = resolveLengthValue('md')

    expect(result).toBe(LENGTH_SCALE.md)
  })

  it('leaves custom CSS length values unchanged', () => {
    const result = resolveLengthValue('42px')

    expect(result).toBe('42px')
  })

  it('resolves responsive values across breakpoints', () => {
    const result = resolveLengthValue({
      base: 'sm',
      md: 'lg',
    })

    expect(result).toEqual({
      base: LENGTH_SCALE.sm,
      md: LENGTH_SCALE.lg,
    })
  })

  it('resolves margin shorthand values using length scale', () => {
    const result = resolveLengthValue('sm md', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.sm} ${LENGTH_SCALE.md}`)
  })

  it('mixes length scale tokens and raw values in margin shorthand', () => {
    const result = resolveLengthValue('sm 10px lg', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.sm} 10px ${LENGTH_SCALE.lg}`)
  })

  it('removes undefined breakpoint values in responsive object', () => {
    const result = resolveLengthValue({
      base: 'sm',
      md: undefined,
      lg: 'lg',
    })

    expect(result).toEqual({
      base: LENGTH_SCALE.sm,
      lg: LENGTH_SCALE.lg,
    })
  })

  it('returns non-string values unchanged', () => {
    const result = resolveLengthValue(0 as any)

    expect(result).toBe(0)
  })

  it('handles null values without crashing and returns them unchanged', () => {
    const result = resolveLengthValue(null as any)

    expect(result).toBe(null)
  })

  it('ignores extra whitespace in margin shorthand values', () => {
    const result = resolveLengthValue('  sm   md  ', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.sm} ${LENGTH_SCALE.md}`)
  })

  it('resolves inset shorthand with one length token', () => {
    const result = resolveLengthValue('sm', 'shorthand')

    expect(result).toBe(LENGTH_SCALE.sm)
  })

  it('resolves inset shorthand with two length tokens', () => {
    const result = resolveLengthValue('sm md', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.sm} ${LENGTH_SCALE.md}`)
  })

  it('resolves inset shorthand with four length tokens', () => {
    const result = resolveLengthValue('xs sm md lg', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.xs} ${LENGTH_SCALE.sm} ${LENGTH_SCALE.md} ${LENGTH_SCALE.lg}`)
  })

  it('resolves responsive inset shorthand values', () => {
    const result = resolveLengthValue(
      {
        base: 'sm',
        md: 'sm md',
        lg: 'xs sm md lg',
      },
      'shorthand'
    )

    expect(result).toEqual({
      base: LENGTH_SCALE.sm,
      md: `${LENGTH_SCALE.sm} ${LENGTH_SCALE.md}`,
      lg: `${LENGTH_SCALE.xs} ${LENGTH_SCALE.sm} ${LENGTH_SCALE.md} ${LENGTH_SCALE.lg}`,
    })
  })

  it('preserves raw CSS values inside inset shorthand', () => {
    const result = resolveLengthValue('sm 10px calc(100% - 20px) 0', 'shorthand')

    expect(result).toBe(`${LENGTH_SCALE.sm} 10px calc(100% - 20px) 0`)
  })
})
