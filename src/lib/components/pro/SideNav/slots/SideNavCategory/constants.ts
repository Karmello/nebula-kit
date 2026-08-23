import { SideNavCategoryProps } from 'lib/index.pro'

export const SIDE_NAV_CATEGORY_ALIGNS = ['center', 'start', 'split'] as const

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavCategoryProps['variant'] = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: SideNavCategoryProps['intent'] = 'neutral'
export const DEFAULT_SIDE_NAV_CATEGORY_EXPANDED: SideNavCategoryProps['expanded'] = false
export const DEFAULT_SIDE_NAV_CATEGORY_ALIGN: SideNavCategoryProps['align'] = 'center'
