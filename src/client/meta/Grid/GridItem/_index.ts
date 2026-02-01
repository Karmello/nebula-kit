import { ComponentMeta } from 'client/definitions'
import { GridItemProps } from 'lib/components'

import { GRID_ITEM_PROPS_META } from './props'
import { GRID_ITEM_EXAMPLES_META } from './examples'

const GRID_ITEM_META: ComponentMeta<GridItemProps> = {
  overview: {
    bundle: 'core',
    name: 'Grid.Item?',
    title: 'Wrapper for a single child positioned within the grid.',
    features: [
      'positions a child in a specific row and/or column',
      "overrides the item's alignment relative to its cell",
    ],
    composedOf: ['Box'],
  },
  props: GRID_ITEM_PROPS_META,
  examples: GRID_ITEM_EXAMPLES_META,
}

export { GRID_ITEM_META }
