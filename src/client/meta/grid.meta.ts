import { PropCategory } from 'client/definitions'
import { GridProps } from 'lib/components'

import {
  ComponentMeta,
  CssGridAutoFlow,
  CssGridPlaceItems,
  CssGridPlaceContent,
  GridElem,
} from 'lib/definitions'

const GRID_META: ComponentMeta<GridProps<GridElem>> = {
  name: 'Grid',
  description:
    'Grid is a layout component that arranges its children using CSS Grid. It provides a consistent API for defining rows, columns, gaps, and alignment, so you can create two-dimensional layouts without writing raw grid styles. Use Grid when you need precise control over track sizes, auto-placement, and spacing in both directions, or as the foundation for more complex, responsive layout primitives.',
  propsInfo: 'Grid extends Box, so it accepts all Box props in addition to the grid-specific ones below.',
  props: [
    {
      category: PropCategory.layout,
      name: 'gridTemplateColumns',
      options: ['string', 'number'],
      defaultValue: '1fr',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the column structure of the grid.',
    },
    {
      category: PropCategory.layout,
      name: 'gridTemplateRows',
      options: ['string', 'number'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets how the grid’s rows are laid out.',
    },
    {
      category: PropCategory.layout,
      name: 'gridAutoRows',
      options: ['string'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the size of rows that are created automatically.',
    },
    {
      category: PropCategory.layout,
      name: 'gridAutoColumns',
      options: ['string'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the size of columns that are created automatically.',
    },
    {
      category: PropCategory.layout,
      name: 'gridAutoFlow',
      options: Object.values(CssGridAutoFlow),
      defaultValue: CssGridAutoFlow.row,
      isRequired: false,
      isResponsive: true,
      description: 'Controls how items are automatically placed into the grid.',
    },
    {
      category: PropCategory.alignment,
      name: 'placeItems',
      options: Object.values(CssGridPlaceItems),
      defaultValue: CssGridPlaceItems.stretch,
      isRequired: false,
      isResponsive: true,
      description: 'Controls how grid items are aligned within their cells.',
    },
    {
      category: PropCategory.alignment,
      name: 'placeContent',
      options: Object.values(CssGridPlaceContent),
      defaultValue: CssGridPlaceContent.start,
      isRequired: false,
      isResponsive: true,
      description: 'Controls how the grid as a whole is aligned within its container.',
    },
    {
      category: PropCategory.spacing,
      name: 'gap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between rows and columns in the grid.',
    },
    {
      category: PropCategory.spacing,
      name: 'rowGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between grid rows.',
    },
    {
      category: PropCategory.spacing,
      name: 'columnGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between grid columns.',
    },
    {
      category: PropCategory.other,
      name: 'elem',
      options: Object.values(GridElem),
      defaultValue: GridElem.div,
      isRequired: false,
      isResponsive: false,
      description:
        'Specifies which HTML element the grid should render as, allowing you to match semantic structure without changing its layout behavior.',
    },
  ],
}

export default GRID_META
