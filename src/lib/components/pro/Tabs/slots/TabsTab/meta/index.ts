import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { TabsTabProps } from '../types'

export const TABS_TAB_META = {
  overview: {
    bundle: 'pro',
    name: 'Tabs.Tab',
    title: 'Selectable tab item within a Tabs component.',
    features: [
      'activates the panel with the matching value',
      'inherits visual styling from Button',
    ],
    composedOf: ['Text'],
    exposedTags: ['button'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    disabled: {
      options: ['boolean'],
    },
    minInlineSize: {
      ...BOX_META.Box.props.minInlineSize,
      isResponsive: false,
    },
    value: {
      options: ['string', 'number'],
      isRequired: true,
      description: 'Value that identifies the tab and links it to its panel.',
    },
  },
} satisfies ComponentMeta<TabsTabProps>
