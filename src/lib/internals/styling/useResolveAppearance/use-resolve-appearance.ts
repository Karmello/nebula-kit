import { BoxProps } from 'lib/components'
import { useBrandContext, useThemeContext } from 'lib/components/internal'

export const useResolveAppearance = ({
  theme,
  brand,
  color,
}: Pick<BoxProps, 'theme' | 'brand' | 'color'>): Pick<BoxProps, 'theme' | 'brand' | 'color'> => {
  const themeCtx = useThemeContext()
  const brandCtx = useBrandContext()

  const inheritedTheme = themeCtx?.theme
  const resolvedTheme = theme ?? inheritedTheme

  const finalTheme = resolvedTheme === 'flipped' ? (inheritedTheme === 'dark' ? 'light' : 'dark') : resolvedTheme

  const ctxBrand = brandCtx?.brand
  const finalBrand = brand ?? ctxBrand
  const finalColor = color ?? finalBrand

  return {
    theme: finalTheme,
    brand: finalBrand,
    color: finalColor,
  }
}
