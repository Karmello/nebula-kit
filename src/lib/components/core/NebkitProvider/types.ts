import { ReactElement } from 'react'

import type { BoxColor } from 'lib/components/core/Box/types'
import {
  NEBKIT_PROVIDER_BORDER_RADIUS_SIZES,
  NEBKIT_PROVIDER_RIPPLE_MODES,
  NEBKIT_PROVIDER_SATURATIONS,
  NEBKIT_PROVIDER_THEMES,
} from 'lib/components/core/NebkitProvider/constants'

export type NebkitProviderBorderRadiusSize = (typeof NEBKIT_PROVIDER_BORDER_RADIUS_SIZES)[number]
export type NebkitProviderRippleMode = (typeof NEBKIT_PROVIDER_RIPPLE_MODES)[number]
export type NebkitProviderTheme = (typeof NEBKIT_PROVIDER_THEMES)[number]
export type NebkitProviderSaturation = (typeof NEBKIT_PROVIDER_SATURATIONS)[number]

export type NebkitProviderProps = {
  children: ReactElement
  theme?: NebkitProviderTheme
  brand?: BoxColor
  saturation?: NebkitProviderSaturation
  borderRadiusSize?: NebkitProviderBorderRadiusSize
  rippleMode?: NebkitProviderRippleMode
  lockGlobalScroll?: boolean
}
