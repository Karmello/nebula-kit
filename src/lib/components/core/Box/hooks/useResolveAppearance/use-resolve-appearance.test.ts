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
  it('returns undefined when theme and inheritedTheme are undefined', () => {
    expect(resolveTheme(undefined, undefined, 'light')).toBeUndefined()
  })

  it('inherits light theme when theme is undefined', () => {
    expect(resolveTheme(undefined, 'light', 'dark')).toBe('light')
  })

  it('inherits dark theme when theme is undefined', () => {
    expect(resolveTheme(undefined, 'dark', 'light')).toBe('dark')
  })

  it('prefers explicit theme over inherited theme', () => {
    expect(resolveTheme('light', 'dark', 'dark')).toBe('light')
  })

  it('resolves explicit global theme', () => {
    expect(resolveTheme('global', 'dark', 'light')).toBe('light')
  })

  it('resolves explicit global-flipped theme', () => {
    expect(resolveTheme('global-flipped', 'dark', 'light')).toBe('dark')
  })

  it('inherits responsive theme when theme is undefined', () => {
    expect(
      resolveTheme(
        undefined,
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

  it('prefers explicit responsive theme over inherited theme', () => {
    expect(
      resolveTheme(
        {
          base: 'dark',
          lg: 'light',
        },
        {
          base: 'light',
          lg: 'dark',
        },
        'light'
      )
    ).toEqual({
      base: 'dark',
      lg: 'light',
    })
  })

  it('resolves global values inside responsive theme', () => {
    expect(
      resolveTheme(
        {
          base: 'global',
          lg: 'dark',
        },
        undefined,
        'light'
      )
    ).toEqual({
      base: 'light',
      lg: 'dark',
    })
  })

  it('resolves global-flipped values inside responsive theme', () => {
    expect(
      resolveTheme(
        {
          base: 'global-flipped',
          lg: 'light',
        },
        undefined,
        'light'
      )
    ).toEqual({
      base: 'dark',
      lg: 'light',
    })
  })

  it('resolves mixed responsive theme values', () => {
    expect(
      resolveTheme(
        {
          base: 'global',
          md: 'global-flipped',
          lg: 'dark',
        },
        undefined,
        'light'
      )
    ).toEqual({
      base: 'light',
      md: 'dark',
      lg: 'dark',
    })
  })
})
