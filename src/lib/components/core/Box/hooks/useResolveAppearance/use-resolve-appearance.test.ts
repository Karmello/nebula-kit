import { flipTheme, resolveTheme, resolveThemeValue } from './use-resolve-appearance'

describe('flipTheme', () => {
  it('flips dark to light', () => {
    expect(flipTheme('dark')).toBe('light')
  })

  it('flips light to dark', () => {
    expect(flipTheme('light')).toBe('dark')
  })
})

describe('resolveThemeValue', () => {
  it('returns light unchanged', () => {
    expect(resolveThemeValue('light', 'dark')).toBe('light')
  })

  it('returns dark unchanged', () => {
    expect(resolveThemeValue('dark', 'light')).toBe('dark')
  })

  it('resolves global to light', () => {
    expect(resolveThemeValue('global', 'light')).toBe('light')
  })

  it('resolves global to dark', () => {
    expect(resolveThemeValue('global', 'dark')).toBe('dark')
  })

  it('resolves global-flipped to dark when global theme is light', () => {
    expect(resolveThemeValue('global-flipped', 'light')).toBe('dark')
  })

  it('resolves global-flipped to light when global theme is dark', () => {
    expect(resolveThemeValue('global-flipped', 'dark')).toBe('light')
  })
})

describe('resolveTheme', () => {
  it('falls back to the global theme when no inherited theme is present', () => {
    expect(resolveTheme(undefined, 'light')).toBe('light')
  })

  it('resolves inherited light theme', () => {
    expect(resolveTheme('light', 'dark')).toBe('light')
  })

  it('resolves inherited dark theme', () => {
    expect(resolveTheme('dark', 'light')).toBe('dark')
  })

  it('resolves inherited global theme', () => {
    expect(resolveTheme('global', 'light')).toBe('light')
  })

  it('resolves inherited global-flipped theme', () => {
    expect(resolveTheme('global-flipped', 'light')).toBe('dark')
  })

  it('resolves responsive inherited theme', () => {
    expect(
      resolveTheme(
        {
          base: 'light',
          lg: 'dark',
        },
        'light'
      )
    ).toEqual({
      base: 'light',
      lg: 'dark',
    })
  })

  it('resolves global values inside responsive inherited theme', () => {
    expect(
      resolveTheme(
        {
          base: 'global',
          lg: 'dark',
        },
        'light'
      )
    ).toEqual({
      base: 'light',
      lg: 'dark',
    })
  })

  it('resolves global-flipped values inside responsive inherited theme', () => {
    expect(
      resolveTheme(
        {
          base: 'global-flipped',
          lg: 'light',
        },
        'light'
      )
    ).toEqual({
      base: 'dark',
      lg: 'light',
    })
  })

  it('resolves mixed responsive inherited theme values', () => {
    expect(
      resolveTheme(
        {
          base: 'global',
          md: 'global-flipped',
          lg: 'dark',
        },
        'light'
      )
    ).toEqual({
      base: 'light',
      md: 'dark',
      lg: 'dark',
    })
  })
})
