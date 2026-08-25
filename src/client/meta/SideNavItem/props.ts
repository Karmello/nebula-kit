import { SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav/constants'
import type { SideNavItemProps } from 'lib/components/pro/SideNav/slots/SideNavItem/types'
import type { Prop } from 'client/definitions'

import { BUTTON_META } from '../Button'
import { LINK_META } from '../Link'

export const SIDE_NAV_ITEM_PROPS: Record<keyof SideNavItemProps, Prop> = {
  align: BUTTON_META.props.align,
  bold: BUTTON_META.props.bold,
  children: {
    ...BUTTON_META.props.children,
    isRequired: true,
  },
  color: BUTTON_META.props.color,
  customSvgIcon: BUTTON_META.props.customSvgIcon,
  elevated: BUTTON_META.props.elevated,
  href: LINK_META.props.href,
  iconName: BUTTON_META.props.iconName,
  iconPlacement: BUTTON_META.props.iconPlacement,
  intent: BUTTON_META.props.intent,
  onClick: LINK_META.props.onClick,
  selected: BUTTON_META.props.selected,
  tagAttrs: BUTTON_META.props.tagAttrs,
  tagRef: BUTTON_META.props.tagRef,
  variant: {
    ...BUTTON_META.props.variant,
    options: SIDE_NAV_VARIANTS,
  },
}
