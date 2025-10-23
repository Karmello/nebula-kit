import { ComponentMeta } from 'client/definitions'
import { FlexProps } from 'lib/components/layout/Flex/definitions'

import { FLEX_PROPS_META } from './props'
import { FLEX_EXAMPLES_META } from './examples'

import { FLEX_ITEM_META } from './FlexItem/_index'

const FLEX_META: ComponentMeta<FlexProps> = {
  overview: {
    title:
      'Layout component built on CSS Flexbox, providing a one-dimensional system for arranging children in a row or column.',
    description: [
      'provides a flexbox-based layout wrapper',
      'controls flow, alignment and wrapping of children',
      'manages spacing between items with gap properties',
    ],
    composedOf: ['Box'],
    slots: ['Flex.Item'],
  },
  props: FLEX_PROPS_META,
  examples: FLEX_EXAMPLES_META,
}

export default {
  Flex: FLEX_META,
  'Flex.Item': FLEX_ITEM_META,
}
