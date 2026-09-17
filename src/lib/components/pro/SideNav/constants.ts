import { BoxIntent } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

import type { SideNavVariant } from './types'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const SIDE_NAV_VARIANTS = ['solid', 'ghost'] as const

export const DEFAULT_SIDE_NAV_EXPAND_MODE: (typeof SIDE_NAV_EXPAND_MODES)[number] = 'multiple'
export const DEFAULT_SIDE_NAV_SCALE: TShirtSize = 'sm'
export const DEFAULT_SIDE_NAV_GAP = '2px'
export const DEFAULT_SIDE_NAV_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_SIDE_NAV_VARIANT: SideNavVariant = 'solid'
