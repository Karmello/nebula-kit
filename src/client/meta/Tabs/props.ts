import { ComponentMeta } from 'client/definitions'
import { TabsProps } from 'lib/components'
import { DEFAULT_TABS_ORIENTATION, DEFAULT_TABS_VARIANT, TABS_ORIENTATION, TABS_VARIANTS } from 'lib/components/pro/Tabs'

import { BOX_PROPS_META } from '../Box/props'
import { BUTTON_PROPS_META } from '../Button/props'

const TABS_PROPS_META: ComponentMeta<TabsProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    options: ['Tabs.Tab', 'Tabs.Panel'],
    isRequired: true,
    description: 'Available slots.',
  },
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string', 'number'],
    description: 'Sets the initial active tab in uncontrolled mode.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: BOX_PROPS_META.intent,
  onChange: {
    options: ['(value: string | number) => void'],
    description: 'Called when the active tab value changes.',
  },
  orientation: {
    options: TABS_ORIENTATION,
    defaultValue: DEFAULT_TABS_ORIENTATION,
    description: 'Sets whether tab items are arranged horizontally or vertically.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    description: 'Sets the size of the tab items.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  value: {
    options: ['string', 'number'],
    description: 'Controls the active tab value.',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    options: TABS_VARIANTS,
    defaultValue: String(DEFAULT_TABS_VARIANT),
  },
}

export { TABS_PROPS_META }
