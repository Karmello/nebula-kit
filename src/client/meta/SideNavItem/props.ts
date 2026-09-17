import { BOX_SURFACE_DEPTHS } from 'lib/components/core/Box/constants'
import {
  SIDE_NAV_ITEM_ALIGNS,
  SIDE_NAV_ITEM_ICON_PLACEMENTS,
} from 'lib/components/pro/SideNav/slots/SideNavItem/constants'
import type { SideNavItemProps } from 'lib/components/pro/SideNav/slots/SideNavItem/types'
import type { DocProp } from 'client/definitions'

export const SIDE_NAV_ITEM_PROPS: Record<keyof SideNavItemProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Label rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  onClick: {
    options: ['e => void'],
    description:
      'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
  },
  // navigation
  href: {
    options: ['string'],
    isRequired: true,
    description: 'Destination URL.',
    group: 'navigation',
  },
  // icon
  iconName: {
    options: ['IconName'],
    description: 'Name of the icon to render.',
    group: 'icon',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
    group: 'icon',
  },
  iconPlacement: {
    options: SIDE_NAV_ITEM_ICON_PLACEMENTS,
    defaultValue: 'left',
    description: 'Icon placement relative to label.',
    group: 'icon',
  },
  // surface
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    description:
      "Selects which depth tier the component's surface color is drawn from - base or raised - each with its own per-intent lightness and interaction states.",
    group: 'surface',
  },
  // interaction
  selected: {
    options: ['boolean'],
    description:
      'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
    group: 'interaction',
  },
  // layout
  align: {
    options: SIDE_NAV_ITEM_ALIGNS,
    defaultValue: 'center',
    isResponsive: true,
    description: 'Controls how inner content is arranged within the container.',
    group: 'layout',
  },
  // appearance
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
    group: 'appearance',
  },
}
