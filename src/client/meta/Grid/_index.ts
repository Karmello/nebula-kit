import { ComponentMeta } from 'client/definitions'
import { GRID_INHERITED_PROPS, GridTag, GridOwnProps } from 'lib/components/layout-base/Grid/definitions'

import props from './props'
import examples from './examples'

import GRID_ITEM_META from './GridItem/_index'

const GRID_META: ComponentMeta<GridOwnProps> = {
  overview: {
    description:
      'A layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
    role: [
      'provide a CSS Grid-based layout wrapper',
      'establish rows and columns to align and distribute children',
      'manage spacing between items with gap properties',
    ],
    behavior: [
      'always applies display: grid',
      'uses Box internally to ensure consistent reset and baseline styles',
    ],
    byDefault: [
      'renders as a <div> element',
      'arranges children into a single column',
      'does not apply any gap between children',
    ],
    examplesOfUse: [
      'creating two-dimensional layouts with rows and columns',
      'aligning items consistently across multiple rows',
      'building responsive page sections',
    ],
    composedOf: GRID_INHERITED_PROPS,
    rendersAs: GridTag,
  },
  props,
  examples,
}

export default {
  Grid: GRID_META,
  'Grid.Item': GRID_ITEM_META,
}
