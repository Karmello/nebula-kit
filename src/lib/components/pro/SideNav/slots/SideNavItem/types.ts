import { BoxProps } from 'lib/components/core/Box'
import { IconProps } from 'lib/components/core/Icon'
import { LinkProps } from 'lib/components/core/Link'

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
  surfaceDepth?: BoxProps<'button'>['surfaceDepth']
  selected?: boolean
  // Box
  elemRef?: BoxProps<'button'>['elemRef']
  elemAttrs?: BoxProps<'button'>['elemAttrs']
  children: BoxProps<'button'>['children']
  // Link
  href: LinkProps['href']
  onClick?: LinkProps['onClick']
}
