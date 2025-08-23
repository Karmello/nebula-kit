import { formatCssVarValue } from '.'

describe('formatCssVarValue', () => {
  it('returns number as-is for lineHeight', () => {
    const result = formatCssVarValue('lineHeight' as any, 1.6)
    expect(result).toBe(1.6)
    expect(typeof result).toBe('number')
  })

  it('formats columns as repeat(n, 1fr)', () => {
    expect(formatCssVarValue('columns' as any, 3)).toBe('repeat(3, 1fr)')
    expect(formatCssVarValue('columns' as any, 1)).toBe('repeat(1, 1fr)')
  })

  it('wraps other numeric props with var(--neb-scale-<n>)', () => {
    expect(formatCssVarValue('gap' as any, 4)).toBe('var(--neb-scale-4)')
    expect(formatCssVarValue('padding' as any, 0)).toBe('var(--neb-scale-0)')
  })

  it('returns string values unchanged', () => {
    expect(formatCssVarValue('gap' as any, 'var(--space-m)')).toBe('var(--space-m)')
    expect(formatCssVarValue('columns' as any, 'auto-fill')).toBe('auto-fill')
    expect(formatCssVarValue('lineHeight' as any, '1.4')).toBe('1.4')
  })
})
