import { BoxProps } from 'lib/components'
import { BoxTheme } from 'lib/components/core/Box'
import { useBrandContext, useThemeContext } from 'lib/components/shared'
import { useCurrentTheme } from 'lib/hooks'
import { RespValue, Theme } from 'lib/types'

export const flipTheme = (theme: Theme): Theme => (theme === 'dark' ? 'light' : 'dark')

export const resolveThemeValue = (theme: BoxTheme, globalTheme: Theme): Theme => {
  if (theme === 'global') {
    return globalTheme
  }

  if (theme === 'global-flipped') {
    return flipTheme(globalTheme)
  }

  return theme
}

export const resolveTheme = (
  theme: BoxProps['theme'],
  inheritedTheme: BoxProps['theme'],
  globalTheme: Theme
): RespValue<Theme> => {
  const resolvedTheme = theme ?? inheritedTheme

  if (!resolvedTheme) {
    return resolvedTheme as unknown as RespValue<Theme>
  }

  if (typeof resolvedTheme === 'string') {
    return resolveThemeValue(resolvedTheme, globalTheme)
  }

  return Object.fromEntries(
    Object.entries(resolvedTheme).map(([breakpoint, value]) => [breakpoint, resolveThemeValue(value, globalTheme)])
  ) as RespValue<Theme>
}

export const useResolveAppearance = ({
  theme,
  brand,
  color,
}: Pick<BoxProps, 'theme' | 'brand' | 'color'>): { theme: RespValue<Theme> } & Pick<BoxProps, 'brand' | 'color'> => {
  const globalTheme = useCurrentTheme()

  const themeCtx = useThemeContext()
  const brandCtx = useBrandContext()

  const inheritedTheme = themeCtx?.theme
  const finalTheme = resolveTheme(theme, inheritedTheme, globalTheme)

  const ctxBrand = brandCtx?.brand
  const finalBrand = brand ?? ctxBrand
  const finalColor = color ?? finalBrand

  return {
    theme: finalTheme,
    brand: finalBrand,
    color: finalColor,
  }
}
