import { GridOwnProps } from 'lib/components'

import {
  ComponentPropsMeta,
  CssGridAutoFlow,
  CssGridPlaceItems,
  CssGridPlaceContent,
  GridAs,
} from 'lib/definitions'

enum PropCategory {
  layout = 'Layout',
  alignment = 'Alignment',
  spacing = 'Spacing',
  other = 'Other',
}

const GRID_PROPS_META: ComponentPropsMeta<GridOwnProps> = [
  {
    category: PropCategory.layout,
    name: 'columns',
    options: ['string', 'number'],
    defaultValue: '1fr',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the column structure of the grid.',
  },
  {
    category: PropCategory.layout,
    name: 'rows',
    options: ['string', 'number'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Sets how the grid’s rows are laid out.',
  },
  {
    category: PropCategory.layout,
    name: 'autoRows',
    options: ['string'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of rows that are created automatically.',
  },
  {
    category: PropCategory.layout,
    name: 'autoColumns',
    options: ['string'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of columns that are created automatically.',
  },
  {
    category: PropCategory.layout,
    name: 'autoFlow',
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
    name: 'as',
    options: Object.values(GridAs),
    defaultValue: GridAs.div,
    isRequired: false,
    isResponsive: false,
    description:
      'Specifies which HTML element the grid should render as, allowing you to match semantic structure without changing its layout behavior.',
  },
]

export default GRID_PROPS_META
