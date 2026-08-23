import { BoxProps, IconProps, LinkProps } from 'lib/index.core'

import { SideNavVariant } from '../../definitions'

export const SIDE_NAV_ITEM_ALIGNS = ['center', 'start', 'split'] as const
export const SIDE_NAV_ITEM_ICON_PLACEMENTS = ['left', 'right'] as const

export const DEFAULT_SIDE_NAV_ITEM_ALIGN: SideNavItemProps['align'] = 'center'
export const DEFAULT_SIDE_NAV_ITEM_ICON_PLACEMENT: SideNavItemProps['iconPlacement'] = 'left'

export type SideNavItemAlign = (typeof SIDE_NAV_ITEM_ALIGNS)[number]
export type SideNavItemIconPlacement = (typeof SIDE_NAV_ITEM_ICON_PLACEMENTS)[number]

type SideNavItemOwnProps = {
  align?: SideNavItemAlign
  bold?: boolean
  customSvgIcon?: IconProps['children']
  iconName?: IconProps['name']
  iconPlacement?: SideNavItemIconPlacement
  elevated?: boolean
  selected?: boolean
}

type PropsFromBox = {
  tagRef?: BoxProps<'button'>['tagRef']
  tagAttrs?: BoxProps<'button'>['tagAttrs']
  color?: BoxProps<'button'>['color']
  intent?: BoxProps<'button'>['intent']
  children: BoxProps<'button'>['children']
  variant?: SideNavVariant
}

type PropsFromLink = {
  href: LinkProps['href']
  onClick?: LinkProps['onClick']
}

export type SideNavItemProps = PropsFromBox & PropsFromLink & SideNavItemOwnProps
