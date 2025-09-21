import { ComponentMeta } from 'client/definitions'

import {
  FLEX_ITEM_INHERITED_PROPS,
  FlexItemOwnProps,
} from 'lib/components/layout-base/Flex/FlexItem/definitions'

import examples from './examples'
import ownProps from './own-props'

export default {
  overview: {
    title: 'Flex.Item',
    description: 'Flex item represents a single child inside a Flex container.',
    role: [
      'control per-item growth, shrink, and basis in the flex layout',
      'allow item-level alignment overrides relative to the parent',
    ],
    behavior: [
      'must be used inside a Flex container',
      'wraps its child with Box for consistent styling and reset',
    ],
    byDefault: [
      'renders as a <div> element',
      "aligns according to the parent's alignment rules unless overridden",
    ],
    examplesOfUse: [
      "fixing one item's width while others flex around it",
      'aligning a single child differently from siblings',
      'making an element grow or shrink independently in a shared row or column',
    ],
    composedOf: FLEX_ITEM_INHERITED_PROPS,
  },
  ownProps,
  examples,
} as ComponentMeta<FlexItemOwnProps>
