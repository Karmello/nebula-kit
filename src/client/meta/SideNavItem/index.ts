import { SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav/constants'
import type { SideNavItemProps } from 'lib/components/pro/SideNav/slots/SideNavItem/types'
import { ComponentMeta } from 'client/definitions'

import { BUTTON_META } from '../Button'
import { LINK_META } from '../Link'

export const SIDE_NAV_ITEM_META = {
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
} satisfies ComponentMeta<SideNavItemProps>
