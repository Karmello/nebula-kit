import type { TabsTabProps } from 'lib/components/pro/Tabs/slots/TabsTab/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

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
      ...BOX_META.props.children,
      isRequired: true,
    },
    disabled: {
      options: ['boolean'],
    },
    minInlineSize: {
      ...BOX_META.props.minInlineSize,
      isResponsive: false,
    },
    value: {
      options: ['string', 'number'],
      isRequired: true,
      description: 'Value that identifies the tab and links it to its panel.',
    },
  },
} satisfies ComponentMeta<TabsTabProps>
