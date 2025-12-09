import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from 'lib/components/pro/navigation/SideNav'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { BUTTON_PROPS_META } from '../Button/props'

const SIDE_NAV_PROPS_META: ComponentMeta<SideNavProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav content rendered.',
  },
  color: {
    ...BUTTON_PROPS_META.color,
    description: 'Color applied to all categories and items.',
  },
  expandMode: {
    options: SIDE_NAV_EXPAND_MODES as unknown as string[],
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description: 'Controls whether single or multiple categories can remain open at a time.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    description: 'Tone level applied to all categories and items.',
  },
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: 'global border width',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    options: SIDE_NAV_VARIANTS,
    description: 'Visual style variant applied to all categories and items.',
  },
}

export { SIDE_NAV_PROPS_META }
