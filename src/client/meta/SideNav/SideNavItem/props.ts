import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_LINK_PROPS_META } from 'client/meta/ButtonLink/props'
import { SideNavItemProps } from 'lib/components'
import { DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content rendered inside ButtonLink.',
  },
  href: BUTTON_LINK_PROPS_META.href,
  onClick: BUTTON_LINK_PROPS_META.onClick,
  variant: {
    ...BUTTON_LINK_PROPS_META.variant,
    defaultValue: DEFAULT_BOX_VARIANT,
  },
  intent: BUTTON_LINK_PROPS_META.intent,
  labelIntent: BUTTON_LINK_PROPS_META.labelIntent,
}

export { SIDE_NAV_ITEM_PROPS_META }
