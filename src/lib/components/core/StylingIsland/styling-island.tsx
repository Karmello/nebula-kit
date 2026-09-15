import { BrandProvider } from './BrandProvider'
import { ThemeProvider } from './ThemeProvider'
import type { StylingIslandProps } from './types'

export const StylingIsland = ({ children, theme, brand }: StylingIslandProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BrandProvider brand={brand}>{children}</BrandProvider>
    </ThemeProvider>
  )
}

StylingIsland.displayName = 'StylingIsland'
