import { ComponentMeta } from 'client/definitions'
import { GridProps } from 'lib/components'
import { CSS_GRID_AUTO_FLOW, CSS_GRID_PLACE_CONTENT, CSS_GRID_PLACE_ITEMS } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const GRID_PROPS_META: ComponentMeta<GridProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Grid.Item or any React node.',
  },
  columnGap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets the spacing between grid columns.',
  },
  gap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets the spacing between rows and columns in the grid.',
  },
  gridAutoColumns: {
    options: ['string'],
    isResponsive: true,
    description: 'Defines the size of columns that are created automatically.',
  },
  gridAutoFlow: {
    options: Object.values(CSS_GRID_AUTO_FLOW),
    isResponsive: true,
    description: 'Controls how items are automatically placed into the grid.',
  },
  gridAutoRows: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Defines the size of rows that are created automatically.',
  },
  gridTemplateColumns: {
    options: ['string', 'number'],
    isResponsive: true,
    description: 'Defines the column structure of the grid.',
  },
  gridTemplateRows: {
    options: ['string', 'number'],
    isResponsive: true,
    description: "Sets how the grid's rows are laid out.",
  },
  placeContent: {
    options: Object.values(CSS_GRID_PLACE_CONTENT),
    isResponsive: true,
    description: 'Controls how the grid as a whole is aligned within the container.',
  },
  placeItems: {
    options: Object.values(CSS_GRID_PLACE_ITEMS),
    isResponsive: true,
    description: 'Controls how grid items are aligned within their cells.',
  },
  rowGap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets the spacing between grid rows.',
  },
}

export { GRID_PROPS_META }
