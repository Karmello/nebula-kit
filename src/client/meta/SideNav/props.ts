import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SIZE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from 'lib/components/pro/navigation/SideNav'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { FLEX_PROPS_META } from '../Flex/props'

const SIDE_NAV_PROPS_META: ComponentMeta<SideNavProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav slots.',
  },
  color: {
    ...BUTTON_PROPS_META.color,
    description: 'Color applied to all categories and items.',
  },
  expandMode: {
    options: SIDE_NAV_EXPAND_MODES as unknown as string[],
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description: 'Controls whether one or multiple categories can remain expanded at the same time.',
  },
  gap: {
    ...FLEX_PROPS_META.gap,
    defaultValue: String(DEFAULT_SIDE_NAV_GAP),
    description: 'Defines vertical spacing between items.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    description: 'Color tone applied to all categories and items.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    defaultValue: DEFAULT_SIDE_NAV_SIZE,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    options: SIDE_NAV_VARIANTS,
    description: 'Visual style variant applied to all categories and items.',
  },
}

export { SIDE_NAV_PROPS_META }
