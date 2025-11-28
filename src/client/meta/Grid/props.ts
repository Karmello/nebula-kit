import { ComponentMeta } from 'client/definitions'
import { GridProps } from 'lib/components/core/layout/Grid/definitions'
import { CSS_GRID_AUTO_FLOW, CSS_GRID_PLACE_CONTENT, CSS_GRID_PLACE_ITEMS } from 'lib/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const GRID_PROPS_META: ComponentMeta<GridProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Grid.Item or any React node.',
  },
  gridTemplateColumns: {
    options: ['string', 'number'],
    defaultValue: '1fr',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the column structure of the grid.',
  },
  gridTemplateRows: {
    options: ['string', 'number'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets how the grid's rows are laid out.",
  },
  gridAutoRows: {
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of rows that are created automatically.',
  },
  gridAutoColumns: {
    options: ['string'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the size of columns that are created automatically.',
  },
  gridAutoFlow: {
    options: Object.values(CSS_GRID_AUTO_FLOW),
    defaultValue: CSS_GRID_AUTO_FLOW[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how items are automatically placed into the grid.',
  },
  placeItems: {
    options: Object.values(CSS_GRID_PLACE_ITEMS),
    defaultValue: CSS_GRID_PLACE_ITEMS[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how grid items are aligned within their cells.',
  },
  placeContent: {
    options: Object.values(CSS_GRID_PLACE_CONTENT),
    defaultValue: CSS_GRID_PLACE_CONTENT[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls how the grid as a whole is aligned within its container.',
  },
  gap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between rows and columns in the grid.',
  },
  rowGap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between grid rows.',
  },
  columnGap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the spacing between grid columns.',
  },
}

export { GRID_PROPS_META }
