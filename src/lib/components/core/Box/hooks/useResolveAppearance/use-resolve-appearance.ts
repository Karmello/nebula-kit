import type { BoxTheme } from 'lib/components/core/Box/types'
import type { NebkitProviderTheme } from 'lib/components/core/NebkitProvider/types'
import { useBrandContext, useThemeContext } from 'lib/components/shared'
import { useCurrentTheme } from 'lib/hooks'
import { RespValue } from 'lib/types'

import { BoxProps } from '../../types'

export const flipTheme = (theme: NebkitProviderTheme): NebkitProviderTheme =>
  theme === 'dark' ? 'light' : 'dark'

export const resolveThemeValue = (
  theme: BoxTheme,
  globalTheme: NebkitProviderTheme
): NebkitProviderTheme => {
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
  globalTheme: NebkitProviderTheme
): RespValue<NebkitProviderTheme> => {
  const resolvedTheme = theme ?? inheritedTheme

  if (!resolvedTheme) {
    return resolvedTheme as unknown as RespValue<NebkitProviderTheme>
  }

  if (typeof resolvedTheme === 'string') {
    return resolveThemeValue(resolvedTheme, globalTheme)
  }

  return Object.fromEntries(
    Object.entries(resolvedTheme).map(([breakpoint, value]) => [
      breakpoint,
      resolveThemeValue(value, globalTheme),
    ])
  ) as RespValue<NebkitProviderTheme>
}

export const useResolveAppearance = ({
  theme,
  brand,
  color,
}: Pick<BoxProps, 'theme' | 'brand' | 'color'>): { theme: RespValue<NebkitProviderTheme> } & Pick<
  BoxProps,
  'brand' | 'color'
> => {
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
