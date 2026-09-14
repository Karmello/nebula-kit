import { ReactElement } from 'react'

import {
  NEBKIT_PROVIDER_BORDER_RADIUS_SIZES,
  NEBKIT_PROVIDER_THEMES,
} from 'lib/components/core/NebkitProvider/constants'
import { BOX_COLORS } from 'lib/constants'

export type NebkitProviderBorderRadiusSize = (typeof NEBKIT_PROVIDER_BORDER_RADIUS_SIZES)[number]
export type NebkitProviderTheme = (typeof NEBKIT_PROVIDER_THEMES)[number]

export type NebkitProviderProps = {
  children: ReactElement
  theme?: NebkitProviderTheme
  brand?: (typeof BOX_COLORS)[number]
  borderRadiusSize?: NebkitProviderBorderRadiusSize
  ripple?: boolean
  lockGlobalScroll?: boolean
}
