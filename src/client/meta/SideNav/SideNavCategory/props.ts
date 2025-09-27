import { ComponentMeta } from 'client/definitions'
import { SideNavCategoryProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { DEFAULT_BOX_INTENT, DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

const SIDE_NAV_CATEGORY_PROPS_META: ComponentMeta<SideNavCategoryProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Category items rendered.',
  },
  variant: {
    ...BUTTON_PROPS_META.variant,
    defaultValue: DEFAULT_BOX_VARIANT,
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: DEFAULT_BOX_INTENT,
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: '...',
  },
}

export { SIDE_NAV_CATEGORY_PROPS_META }
