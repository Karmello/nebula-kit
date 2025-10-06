import { ComponentMeta } from 'client/definitions'
import { SideNavItemProps } from 'lib/components'
import { DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'

const SIDE_NAV_ITEM_PROPS_META: ComponentMeta<SideNavItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content rendered inside Button.',
  },
  variant: {
    ...BUTTON_PROPS_META.variant,
    defaultValue: DEFAULT_BOX_VARIANT,
  },
  intent: BUTTON_PROPS_META.intent,
  textIntent: BUTTON_PROPS_META.textIntent,
}

export { SIDE_NAV_ITEM_PROPS_META }
