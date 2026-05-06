import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { LINK_PROPS_META } from 'client/meta/Link/props'
import { SideNavItemProps } from 'lib/components'
import { SIDE_NAV_VARIANTS } from 'lib/components/pro/navigation/SideNav/'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BUTTON_PROPS_META.color,
  customSvgIcon: BUTTON_PROPS_META.customSvgIcon,
  elevated: BUTTON_PROPS_META.elevated,
  href: LINK_PROPS_META.href,
  iconName: BUTTON_PROPS_META.iconName,
  iconPlacement: BUTTON_PROPS_META.iconPlacement,
  intent: BUTTON_PROPS_META.intent,
  justifyContent: BUTTON_PROPS_META.justifyContent,
  onClick: LINK_PROPS_META.onClick,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
  },
}

export { SIDE_NAV_ITEM_PROPS_META }
