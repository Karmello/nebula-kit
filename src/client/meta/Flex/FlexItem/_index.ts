import { ComponentMeta } from 'client/definitions'
import { FlexItemProps } from 'lib/components/layout-base/Flex/FlexItem/definitions'

import { FLEX_ITEM_EXAMPLES_META } from './examples'
import { FLEX_ITEM_PROPS_META } from './props'

const FLEX_ITEM_META: ComponentMeta<FlexItemProps> = {
  overview: {
    name: 'Flex.Item?',
    title: 'Flex child wrapper used to control layout of a single item.',
    description: [
      'controls per-item growth, shrink and basis in the flex layout',
      'allows item-level alignment overrides relative to the parent',
    ],
    composedOf: ['Box'],
  },
  props: FLEX_ITEM_PROPS_META,
  examples: FLEX_ITEM_EXAMPLES_META,
}

export { FLEX_ITEM_META }
