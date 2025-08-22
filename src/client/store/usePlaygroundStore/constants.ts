import { SurfaceConfig } from 'lib/components'
import { MacroSizes, Sizes, Themes } from 'lib/enums'

const COMMON_SURFACE_CONFIG = {
  focusable: false,
  selected: false,
  disabled: false,
  loading: false,
  size: MacroSizes.m,
  padding: Sizes['xl-micro'],
}

export const DEFAULT_SURFACE_CONFIG: Record<Themes, SurfaceConfig> = {
  [Themes.LIGHT]: {
    ...COMMON_SURFACE_CONFIG,
    color: 'grayscale-9',
    backgroundColor: 'grayscale-2',
  },
  [Themes.GRAY]: {
    ...COMMON_SURFACE_CONFIG,
    color: 'grayscale-1',
    backgroundColor: 'grayscale-7',
  },
  [Themes.DARK]: {
    ...COMMON_SURFACE_CONFIG,
    color: 'grayscale-1',
    backgroundColor: 'grayscale-8',
  },
}
