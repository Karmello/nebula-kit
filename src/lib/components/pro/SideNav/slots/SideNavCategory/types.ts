import { BoxProps } from 'lib/components/core/Box'

import { SideNavVariant } from '../../types'
import { SIDE_NAV_CATEGORY_ALIGNS } from './constants'

export type SideNavCategoryAlign = (typeof SIDE_NAV_CATEGORY_ALIGNS)[number]

export type SideNavCategoryProps = {
  // own
  label: string
  expanded?: boolean
  align?: SideNavCategoryAlign
  bold?: boolean
  // Box
  elemAttrs?: BoxProps<'ul'>['elemAttrs']
  elemRef?: BoxProps<'ul'>['elemRef']
  color?: BoxProps<'ul'>['color']
  intent?: BoxProps<'ul'>['intent']
  children: BoxProps<'ul'>['children']
  variant?: SideNavVariant
}
