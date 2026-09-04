import type { BoxIntent } from 'lib/components/core/Box'

import type { SideNavVariant } from '../../types'

export const SIDE_NAV_CATEGORY_ALIGNS = ['center', 'start', 'split'] as const

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavVariant = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: BoxIntent = 'neutral'
export const DEFAULT_SIDE_NAV_CATEGORY_EXPANDED = false
export const DEFAULT_SIDE_NAV_CATEGORY_ALIGN: (typeof SIDE_NAV_CATEGORY_ALIGNS)[number] = 'center'
