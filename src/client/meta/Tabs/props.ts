import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_ORIENTATION,
  DEFAULT_TABS_SCALE,
  TABS_ORIENTATION,
} from 'lib/components/pro/Tabs/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { TabsProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const TABS_PROPS: Record<keyof TabsProps, DocProp> = {
  children: {
    options: ['Tabs.Tab', 'Tabs.Panel'],
    isRequired: true,
    description: 'Available slots.',
  },
  color: {
    options: BOX_COLORS,
    isResponsive: false,
    description: 'Color applied to the component.',
  },
  defaultValue: {
    options: ['string', 'number'],
    description: 'Sets the initial active tab in uncontrolled mode.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: DEFAULT_TABS_INTENT,
    isResponsive: false,
    description: "Color tone applied to the component's main color.",
  },
  onChange: {
    options: ['(value: string | number) => void'],
    description: 'Called when the active tab value changes.',
  },
  orientation: {
    options: TABS_ORIENTATION,
    defaultValue: DEFAULT_TABS_ORIENTATION,
    description: 'Sets whether tab items are arranged horizontally or vertically.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TABS_SCALE,
    description: 'Sets the size of the tab items.',
  },
  stretch: {
    options: ['boolean'],
    description: 'Expands tab items to share the available space equally.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  value: {
    options: ['string', 'number'],
    description: 'Controls the active tab value.',
  },
}
