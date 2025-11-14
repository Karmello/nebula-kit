import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { LINK_PROPS_META } from 'client/meta/Link/props'
import { SideNavItemProps } from 'lib/components'
import { SIDE_NAV_VARIANTS } from 'lib/components/navigation/SideNav/definitions'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content rendered inside Link.',
  },
  color: BUTTON_PROPS_META.color,
  href: LINK_PROPS_META.href,
  intent: BUTTON_PROPS_META.intent,
  onClick: LINK_PROPS_META.onClick,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
  },
}

export { SIDE_NAV_ITEM_PROPS_META }
