import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav/constants'
import {
  SIDE_NAV_ITEM_ALIGNS,
  SIDE_NAV_ITEM_ICON_PLACEMENTS,
} from 'lib/components/pro/SideNav/slots/SideNavItem/constants'
import type { SideNavItemProps } from 'lib/components/pro/SideNav/slots/SideNavItem/types'
import type { DocProp } from 'client/definitions'

export const SIDE_NAV_ITEM_PROPS: Record<keyof SideNavItemProps, DocProp> = {
  align: {
    options: SIDE_NAV_ITEM_ALIGNS,
    defaultValue: 'center',
    isResponsive: true,
    description: 'Controls how inner content is arranged within the container.',
  },
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Label rendered.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
  },
  elevated: {
    options: ['boolean'],
    description:
      'Shifts the component onto an elevated surface level, adjusting the base surface and all related interaction states together.',
  },
  href: {
    options: ['string'],
    isRequired: true,
    description: 'Destination URL.',
  },
  iconName: {
    options: ['IconName'],
    isResponsive: true,
    description: 'Name of the icon to render.',
  },
  iconPlacement: {
    options: SIDE_NAV_ITEM_ICON_PLACEMENTS,
    defaultValue: 'left',
    description: 'Icon placement relative to label.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: 'tertiary',
    description: "Color tone applied to the component's main color.",
  },
  onClick: {
    options: ['e => void'],
    description:
      'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
  },
  selected: {
    options: ['boolean'],
    description:
      'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  variant: {
    options: SIDE_NAV_VARIANTS,
    defaultValue: 'solid',
    description: 'Visual style variant.',
  },
}
