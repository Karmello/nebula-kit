import { ComponentMeta } from 'client/definitions'
import { SideNavItemProps } from 'lib/components'
import { DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { LINK_BUTTON_PROPS_META } from 'client/meta/LinkButton/props'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content rendered inside LinkButton.',
  },
  href: LINK_BUTTON_PROPS_META.href,
  onClick: LINK_BUTTON_PROPS_META.onClick,
  variant: {
    ...LINK_BUTTON_PROPS_META.variant,
    defaultValue: DEFAULT_BOX_VARIANT,
  },
  intent: LINK_BUTTON_PROPS_META.intent,
  labelIntent: LINK_BUTTON_PROPS_META.labelIntent,
  borderRadius: LINK_BUTTON_PROPS_META.borderRadius,
}

export { SIDE_NAV_ITEM_PROPS_META }
