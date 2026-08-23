import { BoxProps } from 'lib/index.core'

import { SideNavVariant } from '../../definitions'

export const SIDE_NAV_CATEGORY_ALIGNS = ['center', 'start', 'split'] as const

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavCategoryProps['variant'] = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: SideNavCategoryProps['intent'] = 'neutral'
export const DEFAULT_SIDE_NAV_CATEGORY_EXPANDED: SideNavCategoryProps['expanded'] = false
export const DEFAULT_SIDE_NAV_CATEGORY_ALIGN: SideNavCategoryProps['align'] = 'center'

export type SideNavCategoryAlign = (typeof SIDE_NAV_CATEGORY_ALIGNS)[number]

export type SideNavCategoryProps = {
  // own
  label: string
  expanded?: boolean
  align?: SideNavCategoryAlign
  bold?: boolean
  // Box
  tagAttrs?: BoxProps<'ul'>['tagAttrs']
  tagRef?: BoxProps<'ul'>['tagRef']
  color?: BoxProps<'ul'>['color']
  intent?: BoxProps<'ul'>['intent']
  children: BoxProps<'ul'>['children']
  variant?: SideNavVariant
}
