import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SIZE,
  TABS_DIRECTION,
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
  direction: {
    options: TABS_DIRECTION,
    defaultValue: DEFAULT_TABS_DIRECTION,
    description: 'Sets whether tab items are arranged horizontally or vertically.',
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
  size: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TABS_SIZE,
    description: 'Sets the size of the tab items.',
  },
  stretch: {
    options: ['boolean'],
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
