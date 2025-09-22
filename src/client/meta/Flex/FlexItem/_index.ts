import { ComponentMeta } from 'client/definitions'
import { FlexItemOwnProps } from 'lib/components/layout-base/Flex/FlexItem/definitions'

import { FLEX_ITEM_EXAMPLES_META } from './examples'
import { FLEX_ITEM_PROPS_META } from './props'

const FLEX_ITEM_META: ComponentMeta<FlexItemOwnProps> = {
  overview: {
    title: 'Flex.Item',
    description: 'Flex item represents a single child inside a Flex container.',
    role: [
      'control per-item growth, shrink, and basis in the flex layout',
      'allow item-level alignment overrides relative to the parent',
      'must be used inside a Flex container',
      'wraps its child with Box for consistent styling and reset',
      'renders as a <div> element',
      "aligns according to the parent's alignment rules unless overridden",
      "fixing one item's width while others flex around it",
      'aligning a single child differently from siblings',
      'making an element grow or shrink independently in a shared row or column',
    ],
    composedOf: ['Box'],
  },
  props: FLEX_ITEM_PROPS_META,
  examples: FLEX_ITEM_EXAMPLES_META,
}

export { FLEX_ITEM_META }
