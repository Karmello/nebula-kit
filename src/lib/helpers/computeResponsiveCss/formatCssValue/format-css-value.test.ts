import { describe, it, expect } from 'vitest'

import { scale } from 'lib/helpers'

import { formatCssValue } from '.'

describe('formatCssValue method', () => {
  it('returns string values unchanged', () => {
    expect(formatCssValue('inlineSize', '10rem')).toBe('10rem')
    expect(formatCssValue('marginTop', '2ch')).toBe('2ch')
  })

  it('keeps numeric values for props in KEEP_NUMBER_PROPS', () => {
    expect(formatCssValue('lineHeight', 1.4)).toBe('1.4')
    expect(formatCssValue('opacity', 0.5)).toBe('0.5')
    expect(formatCssValue('flex', 1)).toBe('1')
    expect(formatCssValue('flexGrow', 2)).toBe('2')
    expect(formatCssValue('flexShrink', 0)).toBe('0')
    expect(formatCssValue('flexBasis', 3)).toBe('3')
    expect(formatCssValue('order', 4)).toBe('4')
  })

  it('formats numeric columns as repeat() template', () => {
    expect(formatCssValue('columns', 3)).toBe('repeat(3, 1fr)')
  })

  it('uses scale() for other numeric props', () => {
    const scaled = formatCssValue('inlineSize', 8)
    expect(scaled).toBe(scale(8))
  })
})
