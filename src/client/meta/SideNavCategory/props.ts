import {
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
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
  expanded: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_EXPANDED),
    description:
      'Controls whether the category is expanded. When provided, the expansion state is controlled externally.',
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text label for the category.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
}
