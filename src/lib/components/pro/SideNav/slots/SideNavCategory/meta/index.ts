import { BOX_META } from 'lib/components/core/Box/meta'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { ComponentMeta } from 'client/definitions'

import { SIDE_NAV_VARIANTS } from '../../../constants'
import {
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
} from '../constants'
import type { SideNavCategoryProps } from '../types'

export const SIDE_NAV_CATEGORY_META = {
  overview: {
    bundle: 'pro',
    name: 'SideNav.Category?',
    title: 'Defines an expandable parent section that groups related navigation items.',
    features: [
      'acts as a collapsible container for one or more SideNav.Item elements',
      'controls the expand and collapse behavior for its nested items',
    ],
    guidelines: [
      'intended exclusively for hierarchical navigation within SideNav',
      'expects only SideNav.Item elements as children',
    ],
    composedOf: ['Box', 'Text', 'Icon', 'Resize', 'Spacer'],
    exposedTags: ['ul'],
    slots: ['SideNav.Item'],
  },
  props: {
    align: BUTTON_META.Button.props.align,
    bold: BUTTON_META.Button.props.bold,
    children: {
      ...BOX_META.Box.props.children,
      options: ['SideNav.Item'],
      isRequired: true,
      description: 'SideNav.Item slots rendered.',
    },
    color: BUTTON_META.Button.props.color,
    expanded: {
      options: ['boolean'],
      defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_EXPANDED),
      description:
        'Controls whether the category is expanded. When provided, the expansion state is controlled externally.',
    },
    intent: {
      ...BUTTON_META.Button.props.intent,
      defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_INTENT),
    },
    label: {
      options: ['string'],
      isRequired: true,
      description: 'Text label for the category.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    variant: {
      ...BUTTON_META.Button.props.variant,
      options: SIDE_NAV_VARIANTS,
      defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_VARIANT),
    },
  },
} satisfies ComponentMeta<SideNavCategoryProps>
