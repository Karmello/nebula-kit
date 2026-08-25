import { SIDE_NAV_VARIANTS } from 'lib/components/pro/SideNav/constants'
import {
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
} from 'lib/components/pro/SideNav/slots/SideNavCategory/constants'
import type { SideNavCategoryProps } from 'lib/components/pro/SideNav/slots/SideNavCategory/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'

export const SIDE_NAV_CATEGORY_PROPS: Record<keyof SideNavCategoryProps, DocProp> = {
  align: BUTTON_META.props.align,
  bold: BUTTON_META.props.bold,
  children: {
    ...BOX_META.props.children,
    options: ['SideNav.Item'],
    isRequired: true,
    description: 'SideNav.Item slots rendered.',
  },
  color: BUTTON_META.props.color,
  expanded: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_EXPANDED),
    description:
      'Controls whether the category is expanded. When provided, the expansion state is controlled externally.',
  },
  intent: {
    ...BUTTON_META.props.intent,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_INTENT),
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text label for the category.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  variant: {
    ...BUTTON_META.props.variant,
    options: SIDE_NAV_VARIANTS,
    defaultValue: String(DEFAULT_SIDE_NAV_CATEGORY_VARIANT),
  },
}
