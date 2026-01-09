import { ComponentMeta } from 'client/definitions'
import { TabsProps } from 'lib/components'

import {
  DEFAULT_TABS_FLEX_DIRECTION,
  DEFAULT_TABS_VARIANT,
  TABS_FLEX_DIRECTION,
  TABS_VARIANTS,
} from 'lib/components/core/controls/Tabs'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { BUTTON_PROPS_META } from '../Button/props'

const TABS_PROPS_META: ComponentMeta<TabsProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Tabs.Tab', 'Tabs.Panel'],
    isRequired: true,
    description: 'Available slots.',
  },
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string', 'number'],
    description: 'Sets the initial active tab in uncontrolled mode.',
  },
  flexDirection: {
    ...FLEX_PROPS_META.flexDirection,
    options: TABS_FLEX_DIRECTION as never,
    defaultValue: DEFAULT_TABS_FLEX_DIRECTION,
    description: 'Sets whether tab items are arranged horizontally or vertically.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: BOX_PROPS_META.intent,
  onChange: {
    options: ['(value: string | number) => void'],
    description: 'Called when the active tab value changes.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    description: 'Sets the size of the tab items.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string', 'number'],
    description: 'Controls the active tab value.',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    options: TABS_VARIANTS,
    defaultValue: DEFAULT_TABS_VARIANT,
  },
}

export { TABS_PROPS_META }
