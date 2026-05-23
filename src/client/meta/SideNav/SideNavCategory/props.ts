import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { SideNavCategoryProps } from 'lib/components'
import { DEFAULT_SIDE_NAV_CATEGORY_EXPANDED, SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav'
import { DEFAULT_SIDE_NAV_CATEGORY_INTENT, DEFAULT_SIDE_NAV_CATEGORY_VARIANT } from 'lib/components/pro/SideNav'

const SIDE_NAV_CATEGORY_PROPS_META: ComponentMeta<SideNavCategoryProps>['props'] = {
  align: BUTTON_PROPS_META.align,
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Category items rendered.',
  },
  color: BUTTON_PROPS_META.color,
  expanded: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_EXPANDED),
    description: 'Controls whether the category is expanded. When provided, the expansion state is controlled externally.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_INTENT),
  },
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
