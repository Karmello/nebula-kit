import {
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SIZE,
  TABS_DIRECTION,
} from 'lib/components/pro/Tabs/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { TabsProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TABS_PROPS: Record<keyof TabsProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    options: ['Tabs.Tab', 'Tabs.Panel'],
    isRequired: true,
    description: 'Available slots.',
  },
  color: {
    ...BOX_META.props.color,
    isResponsive: false,
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
    ...BOX_META.props.intent,
    defaultValue: DEFAULT_TABS_INTENT,
    isResponsive: false,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  value: {
    options: ['string', 'number'],
    description: 'Controls the active tab value.',
  },
}
