import {
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SIZE,
  TABS_DIRECTION,
} from 'lib/components/pro/Tabs/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { TabsProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABS_CHANGELOG } from './changelog'
import { TABS_EXAMPLES } from './examples'

export const TABS_META = {
  overview: {
    bundle: 'pro',
    title: 'Control for switching between related content sections.',
    features: [
      'switches between mutually exclusive content panels',
      'supports horizontal and vertical layouts',
      'fully keyboard-operable with predictable focus behavior',
      'manages selection state without unmounting content',
    ],
    composedOf: ['Box'],
    exposedTags: ['div'],
    slots: ['Tabs.Tab', 'Tabs.Panel'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Tabs.Tab', 'Tabs.Panel'],
      isRequired: true,
      description: 'Available slots.',
    },
    color: {
      ...BOX_META.Box.props.color,
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
      ...BOX_META.Box.props.intent,
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
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    value: {
      options: ['string', 'number'],
      description: 'Controls the active tab value.',
    },
  },
  examples: TABS_EXAMPLES,
  changelog: TABS_CHANGELOG,
} satisfies ComponentMeta<TabsProps>
