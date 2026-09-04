import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav/constants'
import {
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  SIDE_NAV_CATEGORY_ALIGNS,
} from 'lib/components/pro/SideNav/slots/SideNavCategory/constants'
import type { SideNavCategoryProps } from 'lib/components/pro/SideNav/slots/SideNavCategory/types'
import type { DocProp } from 'client/definitions'

export const SIDE_NAV_CATEGORY_PROPS: Record<keyof SideNavCategoryProps, DocProp> = {
  align: {
    options: SIDE_NAV_CATEGORY_ALIGNS,
    defaultValue: 'center',
    isResponsive: true,
    description: 'Controls how inner content is arranged within the container.',
  },
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Item slots rendered.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  expanded: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_EXPANDED),
    description:
      'Controls whether the category is expanded. When provided, the expansion state is controlled externally.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text label for the category.',
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
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_VARIANT),
    description: 'Visual style variant.',
  },
}
