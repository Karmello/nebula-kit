import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { SideNavCategoryProps } from 'lib/components'

import { DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

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
  intent: BUTTON_PROPS_META.intent,
  labelIntent: BUTTON_PROPS_META.labelIntent,
  justifyContent: BUTTON_PROPS_META.justifyContent,
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text label for the category.',
  },
  initiallyExpanded: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Use when you want to expand the active category at the initial render.',
  },
}

export { SIDE_NAV_CATEGORY_PROPS_META }
