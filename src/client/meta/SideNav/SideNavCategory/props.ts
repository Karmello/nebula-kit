import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { SideNavCategoryProps } from 'lib/components'
import { SIDE_NAV_VARIANTS } from 'lib/components/pro/navigation/SideNav'

import {
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
} from 'lib/components/pro/navigation/SideNav'

const SIDE_NAV_CATEGORY_PROPS_META: ComponentMeta<SideNavCategoryProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Category items rendered.',
  },
  color: BUTTON_PROPS_META.color,
  initiallyExpanded: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Use when you want to expand the active category at the initial render.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_INTENT),
  },
  justifyContent: BUTTON_PROPS_META.justifyContent,
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text label for the category.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_VARIANT),
  },
}

export { SIDE_NAV_CATEGORY_PROPS_META }
