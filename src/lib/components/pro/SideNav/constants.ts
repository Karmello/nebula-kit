import { BoxVariant } from 'lib/components/core/Box'
import { SideNavProps } from 'lib/index.pro'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const SIDE_NAV_VARIANTS = ['solid', 'ghost'] as const satisfies BoxVariant[]

export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavProps['expandMode'] = 'multiple'
export const DEFAULT_SIDE_NAV_SCALE: SideNavProps['scale'] = 'sm'
export const DEFAULT_SIDE_NAV_GAP: SideNavProps['gap'] = '2px'
