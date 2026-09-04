import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from 'lib/components/pro/SideNav/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { SideNavProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const SIDE_NAV_PROPS: Record<keyof SideNavProps, DocProp> = {
  children: {
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav slots.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to all categories and items.',
  },
  expandMode: {
    options: SIDE_NAV_EXPAND_MODES,
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description:
      'Controls whether one or multiple categories can remain expanded at the same time.',
  },
  gap: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SIDE_NAV_GAP),
    description: 'Defines vertical spacing between items.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: 'tertiary',
    description: 'Color tone applied to all categories and items.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_SIDE_NAV_SCALE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
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
    isResponsive: true,
    description: 'Visual style variant applied to all categories and items.',
  },
}
