import type { BoxTheme } from 'lib/components/core/Box/types'
import type { NebkitProviderTheme } from 'lib/components/core/NebkitProvider/types'
import { useBrandContext } from 'lib/components/core/StylingIsland/BrandProvider'
import { useThemeContext } from 'lib/components/core/StylingIsland/ThemeProvider'
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
  inheritedTheme: BoxTheme | RespValue<BoxTheme> | undefined,
  globalTheme: NebkitProviderTheme
): RespValue<NebkitProviderTheme> => {
  if (!inheritedTheme) {
    return globalTheme
  }

  if (typeof inheritedTheme === 'string') {
    return resolveThemeValue(inheritedTheme, globalTheme)
  }

  return Object.fromEntries(
    Object.entries(inheritedTheme).map(([breakpoint, value]) => [
      breakpoint,
      resolveThemeValue(value, globalTheme),
    ])
  ) as RespValue<NebkitProviderTheme>
}

export const useResolveAppearance = ({
  color,
}: Pick<BoxProps, 'color'>): { theme: RespValue<NebkitProviderTheme> } & Pick<
  BoxProps,
  'color'
> => {
  const globalTheme = useCurrentTheme()

  const themeCtx = useThemeContext()
  const brandCtx = useBrandContext()

  const inheritedTheme = themeCtx?.theme
  const finalTheme = resolveTheme(inheritedTheme, globalTheme)

  const finalBrand = brandCtx?.brand
  const finalColor = color ?? finalBrand

  return {
    theme: finalTheme,
    color: finalColor,
  }
}
