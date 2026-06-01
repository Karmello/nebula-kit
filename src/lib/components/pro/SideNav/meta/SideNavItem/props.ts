import { ComponentMeta } from 'client/definitions'

import { BUTTON_PROPS_META } from '../../../../core/Button/meta/props'
import { LINK_PROPS_META } from '../../../../core/Link/meta/props'
import { type SideNavItemProps } from '../../../SideNav/slots/SideNavItem/definitions'
import { SIDE_NAV_VARIANTS } from '../../definitions'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  align: BUTTON_PROPS_META.align,
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...BUTTON_PROPS_META.children,
    isRequired: true,
  },
  color: BUTTON_PROPS_META.color,
  customSvgIcon: BUTTON_PROPS_META.customSvgIcon,
  description: BUTTON_PROPS_META.description,
  elevated: BUTTON_PROPS_META.elevated,
  href: LINK_PROPS_META.href,
  iconName: BUTTON_PROPS_META.iconName,
  iconPlacement: BUTTON_PROPS_META.iconPlacement,
  intent: BUTTON_PROPS_META.intent,
  onClick: LINK_PROPS_META.onClick,
  selected: BUTTON_PROPS_META.selected,
  tagAttrs: BUTTON_PROPS_META.tagAttrs,
  tagRef: BUTTON_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
  },
}

export { SIDE_NAV_ITEM_PROPS_META }
