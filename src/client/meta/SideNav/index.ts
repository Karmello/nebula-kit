import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from 'lib/components/pro/SideNav/constants'
import { SideNavProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'
import { SIDE_NAV_CHANGELOG } from './changelog'
import { SIDE_NAV_EXAMPLES } from './examples'

export const SIDE_NAV_META = {
  overview: {
    bundle: 'pro',
    title:
      'Sidebar navigation component designed specifically for flat and nested navigation with expandable categories.',
    features: [
      'supports flat items and expandable categories for hierarchical navigation',
      'allows single or multiple categories to be expanded at once',
    ],
    guidelines: [
      'designed for use in sidebar layouts such as SplitView.Side',
      'intentionally opinionated and optimized for sidebar navigation, it is not intended as a general-purpose menu component',
      'does not manage selected state internally - active items should be derived from the current route, pathname or query parameters',
    ],
    composedOf: ['Box'],
    exposedTags: ['nav'],
    slots: ['SideNav.Item', 'SideNav.Category'],
  },
  examples: SIDE_NAV_EXAMPLES,
  props: {
    children: {
      ...BOX_META.props.children,
      options: ['SideNav.Category', 'SideNav.Item'],
      isRequired: true,
      description: 'SideNav slots.',
    },
    color: {
      ...BUTTON_META.props.color,
      description: 'Color applied to all categories and items.',
    },
    expandMode: {
      options: SIDE_NAV_EXPAND_MODES,
      defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
      description:
        'Controls whether one or multiple categories can remain expanded at the same time.',
    },
    gap: {
      ...BOX_META.props.gap,
      defaultValue: String(DEFAULT_SIDE_NAV_GAP),
      description: 'Defines vertical spacing between items.',
    },
    intent: {
      ...BUTTON_META.props.intent,
      description: 'Color tone applied to all categories and items.',
    },
    scale: {
      ...BUTTON_META.props.scale,
      defaultValue: DEFAULT_SIDE_NAV_SCALE,
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    variant: {
      options: SIDE_NAV_VARIANTS,
      isResponsive: true,
      description: 'Visual style variant applied to all categories and items.',
    },
  },
  changelog: SIDE_NAV_CHANGELOG,
} satisfies ComponentMeta<SideNavProps>
