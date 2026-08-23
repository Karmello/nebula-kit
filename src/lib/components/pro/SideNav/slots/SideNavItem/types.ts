import { BoxProps, IconProps, LinkProps } from 'lib/index.core'

import { SideNavVariant } from '../../types'
import { SIDE_NAV_ITEM_ALIGNS, SIDE_NAV_ITEM_ICON_PLACEMENTS } from './constants'

export type SideNavItemAlign = (typeof SIDE_NAV_ITEM_ALIGNS)[number]
export type SideNavItemIconPlacement = (typeof SIDE_NAV_ITEM_ICON_PLACEMENTS)[number]

export type SideNavItemProps = {
  // own
  align?: SideNavItemAlign
  bold?: boolean
  customSvgIcon?: IconProps['children']
  iconName?: IconProps['name']
  iconPlacement?: SideNavItemIconPlacement
  elevated?: boolean
  selected?: boolean
  // Box
  tagRef?: BoxProps<'button'>['tagRef']
  tagAttrs?: BoxProps<'button'>['tagAttrs']
  color?: BoxProps<'button'>['color']
  intent?: BoxProps<'button'>['intent']
  children: BoxProps<'button'>['children']
  variant?: SideNavVariant
  // Link
  href: LinkProps['href']
  onClick?: LinkProps['onClick']
}
