import { ComponentMeta } from 'client/definitions'
import { GridItemOwnProps } from 'lib/components/layout-base/Grid/GridItem/definitions'

import { GRID_ITEM_PROPS_META } from './props'
import { GRID_ITEM_EXAMPLES_META } from './examples'

const GRID_ITEM_META: ComponentMeta<GridItemOwnProps> = {
  overview: {
    title: 'Grid.Item',
    description:
      'Grid.Item is a child component of Grid that provides explicit control over the placement and alignment of individual items within the grid.',
    role: [
      'position a child in a specific row and/or column',
      "override the item's alignment relative to its cell",
    ],
    behavior: [
      'must be used inside a Grid container',
      'wraps its child with Box for consistent styling and reset',
    ],
    byDefault: [
      'renders as a <div> element',
      "aligns according to the parent's alignment rules unless overridden",
    ],
    examplesOfUse: [
      'spanning an item across multiple columns or rows',
      'pinning a child to a specific grid cell at a breakpoint',
      'overriding alignment for a single child while others follow the parent',
    ],
    composedOf: ['Box'],
  },
  props: GRID_ITEM_PROPS_META,
  examples: GRID_ITEM_EXAMPLES_META,
}

export { GRID_ITEM_META }
