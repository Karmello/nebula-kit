import { ComponentMeta } from 'client/definitions'
import { GridTag, GridOwnProps } from 'lib/components/layout-base/Grid/definitions'

import { GRID_PROPS_META } from './props'
import { GRID_EXAMPLES_META } from './examples'

import { GRID_ITEM_META } from './GridItem/_index'

const GRID_META: ComponentMeta<GridOwnProps> = {
  overview: {
    description:
      'A layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
    role: [
      'provide a CSS Grid-based layout wrapper',
      'establish rows and columns to align and distribute children',
      'manage spacing between items with gap properties',
      'always applies display: grid',
      'uses Box internally to ensure consistent reset and baseline styles',
      'renders as a <div> element',
      'arranges children into a single column',
      'does not apply any gap between children',
      'creating two-dimensional layouts with rows and columns',
      'aligning items consistently across multiple rows',
      'building responsive page sections',
    ],
    composedOf: ['Box'],
    rendersAs: GridTag,
  },
  props: GRID_PROPS_META,
  examples: GRID_EXAMPLES_META,
}

export default {
  Grid: GRID_META,
  'Grid.Item': GRID_ITEM_META,
}
