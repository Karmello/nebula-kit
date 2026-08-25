import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { TabsPanelProps } from '../types'

export const TABS_PANEL_META = {
  overview: {
    bundle: 'pro',
    name: 'Tabs.Panel',
    title: 'Content panel associated with a tab.',
    features: ['displayed when its corresponding tab is active'],
    composedOf: ['Box'],
    exposedTags: ['div'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    value: {
      options: ['string', 'number'],
      isRequired: true,
      description: 'Value that identifies the panel and links it to a tab.',
    },
  },
} satisfies ComponentMeta<TabsPanelProps>
