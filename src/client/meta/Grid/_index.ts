import { ComponentMeta } from 'client/definitions'
import { GRID_TAGS, GridProps } from 'lib/components/layout/Grid/definitions'

import { GRID_PROPS_META } from './props'
import { GRID_EXAMPLES_META } from './examples'

import { GRID_ITEM_META } from './GridItem/_index'

const GRID_META: ComponentMeta<GridProps> = {
  overview: {
    title:
      'Layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
    description: [
      'provides a CSS Grid-based layout wrapper',
      'establishes rows and columns to align and distribute children',
      'manages spacing between items with gap properties',
    ],
    composedOf: ['Box'],
    rendersAs: GRID_TAGS,
    slots: ['Grid.Item'],
  },
  props: GRID_PROPS_META,
  examples: GRID_EXAMPLES_META,
}

export default {
  Grid: GRID_META,
  'Grid.Item': GRID_ITEM_META,
}
