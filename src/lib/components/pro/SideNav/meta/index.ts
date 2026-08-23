import { BOX_META } from 'lib/components/core/Box/meta'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { LINK_META } from 'lib/components/core/Link/meta'
import { SideNavCategoryProps, SideNavItemProps, SideNavProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from '../definitions'
import {
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
} from '../slots'
import { SIDE_NAV_CHANGELOG } from './changelog'
import { SIDE_NAV_EXAMPLES } from './examples'

export const SIDE_NAV_META = {
  SideNav: {
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
        ...BOX_META.Box.props.children,
        options: ['SideNav.Category', 'SideNav.Item'],
        isRequired: true,
        description: 'SideNav slots.',
      },
      color: {
        ...BUTTON_META.Button.props.color,
        description: 'Color applied to all categories and items.',
      },
      expandMode: {
        options: SIDE_NAV_EXPAND_MODES,
        defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
        description:
          'Controls whether one or multiple categories can remain expanded at the same time.',
      },
      gap: {
        ...BOX_META.Box.props.gap,
        defaultValue: String(DEFAULT_SIDE_NAV_GAP),
        description: 'Defines vertical spacing between items.',
      },
      intent: {
        ...BUTTON_META.Button.props.intent,
        description: 'Color tone applied to all categories and items.',
      },
      scale: {
        ...BUTTON_META.Button.props.scale,
        defaultValue: DEFAULT_SIDE_NAV_SCALE,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        options: SIDE_NAV_VARIANTS,
        isResponsive: true,
        description: 'Visual style variant applied to all categories and items.',
      },
    },
    changelog: SIDE_NAV_CHANGELOG,
  } satisfies ComponentMeta<SideNavProps>,
  SideNavItem: {
    overview: {
      bundle: 'pro',
      name: 'SideNav.Item',
      title: 'Defines a single navigational entry within SideNav.',
      features: [
        'represents a leaf item that navigates to a destination or triggers navigation logic',
      ],
      guidelines: [
        'can be used directly inside SideNav for flat navigation',
        'can be nested inside SideNav.Category to participate in hierarchical navigation',
      ],
      composedOf: ['Link', 'Box', 'Text', 'Icon'],
      exposedTags: ['a'],
    },
    props: {
      align: BUTTON_META.Button.props.align,
      bold: BUTTON_META.Button.props.bold,
      children: {
        ...BUTTON_META.Button.props.children,
        isRequired: true,
      },
      color: BUTTON_META.Button.props.color,
      customSvgIcon: BUTTON_META.Button.props.customSvgIcon,
      elevated: BUTTON_META.Button.props.elevated,
      href: LINK_META.Link.props.href,
      iconName: BUTTON_META.Button.props.iconName,
      iconPlacement: BUTTON_META.Button.props.iconPlacement,
      intent: BUTTON_META.Button.props.intent,
      onClick: LINK_META.Link.props.onClick,
      selected: BUTTON_META.Button.props.selected,
      tagAttrs: BUTTON_META.Button.props.tagAttrs,
      tagRef: BUTTON_META.Button.props.tagRef,
      variant: {
        ...BUTTON_META.Button.props.variant,
        options: SIDE_NAV_VARIANTS,
      },
    },
  } satisfies ComponentMeta<SideNavItemProps>,
  SideNavCategory: {
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
  } satisfies ComponentMeta<SideNavCategoryProps>,
}
