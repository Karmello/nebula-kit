import { ComponentMeta } from 'client/definitions'
import { GRID_TAGS, GridProps } from 'lib/components/core/layout/Grid'

import { GRID_PROPS_META } from './props'
import { GRID_EXAMPLES_META } from './examples'

import { GRID_ITEM_META } from './GridItem/_index'

const GRID_META: ComponentMeta<GridProps> = {
  overview: {
    bundle: 'core',
    title:
      'Layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
    features: [
      'provides a CSS Grid-based layout wrapper',
      'establishes rows and columns to align and distribute children',
      'manages spacing between items with gap properties',
    ],
    composedOf: ['Box'],
    topLevelTags: GRID_TAGS,
    slots: ['Grid.Item'],
  },
  props: GRID_PROPS_META,
  examples: GRID_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Grid: GRID_META,
  GridItem: GRID_ITEM_META,
}
