import { ComponentMeta } from 'client/definitions'
import { GridOwnProps } from 'lib/components/layout-base/Grid/definitions'
import { CssGridAutoFlow, CssGridPlaceContent, CssGridPlaceItems } from 'lib/definitions'

const GRID_PROPS_META: ComponentMeta<GridOwnProps>['props'] = {
  gridTemplateColumns: {
    name: 'gridTemplateColumns',
    options: ['string', 'number'],
    defaultValue: '1fr',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the column structure of the grid.',
  },
  gridTemplateRows: {
    name: 'gridTemplateRows',
    options: ['string', 'number'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets how the grid's rows are laid out.",
  },
  gridAutoRows: {
    name: 'gridAutoRows',
    options: ['string'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of rows that are created automatically.',
  },
  gridAutoColumns: {
    name: 'gridAutoColumns',
    options: ['string'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of columns that are created automatically.',
  },
  gridAutoFlow: {
    name: 'gridAutoFlow',
    options: Object.values(CssGridAutoFlow),
    defaultValue: CssGridAutoFlow[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how items are automatically placed into the grid.',
  },
  placeItems: {
    name: 'placeItems',
    options: Object.values(CssGridPlaceItems),
    defaultValue: CssGridPlaceItems[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how grid items are aligned within their cells.',
  },
  placeContent: {
    name: 'placeContent',
    options: Object.values(CssGridPlaceContent),
    defaultValue: CssGridPlaceContent[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how the grid as a whole is aligned within its container.',
  },
  gap: {
    name: 'gap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between rows and columns in the grid.',
  },
  rowGap: {
    name: 'rowGap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between grid rows.',
  },
  columnGap: {
    name: 'columnGap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between grid columns.',
  },
}

export default GRID_PROPS_META
