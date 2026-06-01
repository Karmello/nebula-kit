import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { BUTTON_PROPS_META } from '../../../../core/Button/meta/props'
import { DEFAULT_SIDE_NAV_CATEGORY_EXPANDED } from '../../slots/SideNavCategory/definitions'
import { SIDE_NAV_VARIANTS } from '../../definitions'

import {
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  type SideNavCategoryProps,
} from '../../slots/SideNavCategory/definitions'

const SIDE_NAV_CATEGORY_PROPS_META: ComponentMeta<SideNavCategoryProps>['props'] = {
  align: BUTTON_PROPS_META.align,
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...BOX_PROPS_META.children,
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Item slots rendered.',
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
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_VARIANT),
  },
}

export { SIDE_NAV_CATEGORY_PROPS_META }
