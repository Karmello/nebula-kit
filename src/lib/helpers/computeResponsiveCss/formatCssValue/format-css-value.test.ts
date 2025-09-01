import { describe, it, expect } from 'vitest'

import { formatCssValue } from './'

describe('formatCssValue', () => {
  it('returns numbers as strings for lineHeight', () => {
    expect(formatCssValue('lineHeight', 1.4)).toBe('1.4')
  })

  it('returns numbers as strings for opacity', () => {
    expect(formatCssValue('opacity', 0.5)).toBe('0.5')
  })

  it('formats numeric columns as repeat()', () => {
    expect(formatCssValue('columns', 3)).toBe('repeat(3, 1fr)')
  })

  it('passes through string values unchanged', () => {
    expect(formatCssValue('marginTop', '12px')).toBe('12px')
    expect(formatCssValue('backgroundColor', 'rebeccapurple')).toBe('rebeccapurple')
    expect(formatCssValue('columns', 'auto')).toBe('auto')
  })

  it('uses scale() for other numeric props (e.g., marginTop)', () => {
    expect(formatCssValue('marginTop', 2)).toBe('var(--neb-scale-2)')
    expect(formatCssValue('paddingLeft', 10)).toBe('var(--neb-scale-10)')
  })
})
