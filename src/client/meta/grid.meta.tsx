import { ComponentMeta } from 'client/definitions'

import {
  CssGridAutoFlow,
  CssGridPlaceItems,
  CssGridPlaceContent,
  GridElem,
  CssGridItemJustifySelf,
  CssGridItemAlignSelf,
} from 'lib/definitions'

import {
  Box,
  Grid,
  GRID_INHERITED_PROPS,
  GRID_ITEM_INHERITED_PROPS,
  GridItemOwnProps,
  GridOwnProps,
} from 'lib/components'

const GRID_META: ComponentMeta<GridOwnProps> = {
  overview: {
    description:
      'Grid is a layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
    role: [
      'provide a CSS Grid-based layout wrapper',
      'establish rows and columns to align and distribute children',
      'manage spacing between items with gap properties',
    ],
    behavior: [
      'always applies display: grid',
      'uses Box internally to ensure consistent reset and baseline styles',
      `restricts elem to structural HTML tags: ${GridElem.map(s => `<${s}>`).join(', ')}`,
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
  },
  ownProps: [
    {
      name: 'gridTemplateColumns',
      options: ['string', 'number'],
      defaultValue: '1fr',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the column structure of the grid.',
    },
    {
      name: 'gridTemplateRows',
      options: ['string', 'number'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets how the grid’s rows are laid out.',
    },
    {
      name: 'gridAutoRows',
      options: ['string'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the size of rows that are created automatically.',
    },
    {
      name: 'gridAutoColumns',
      options: ['string'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the size of columns that are created automatically.',
    },
    {
      name: 'gridAutoFlow',
      options: Object.values(CssGridAutoFlow),
      defaultValue: CssGridAutoFlow[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls how items are automatically placed into the grid.',
    },
    {
      name: 'placeItems',
      options: Object.values(CssGridPlaceItems),
      defaultValue: CssGridPlaceItems[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls how grid items are aligned within their cells.',
    },
    {
      name: 'placeContent',
      options: Object.values(CssGridPlaceContent),
      defaultValue: CssGridPlaceContent[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls how the grid as a whole is aligned within its container.',
    },
    {
      name: 'gap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between rows and columns in the grid.',
    },
    {
      name: 'rowGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between grid rows.',
    },
    {
      name: 'columnGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the spacing between grid columns.',
    },
  ],
  examples: [
    {
      description:
        'Two-column layout with main content and sidebar, where the article takes more space and the aside sits alongside it.',
      jsx: (
        <Grid gridTemplateColumns="2fr 1fr">
          <Box elem="article" variant="outline" intent="primary">
            Article
          </Box>
          <Box elem="aside" variant="outline" intent="primary">
            Aside
          </Box>
        </Grid>
      ),
    },
  ],
}

const GRID_ITEM_META: ComponentMeta<GridItemOwnProps> = {
  overview: {
    title: 'Grid.Item',
    description:
      'Grid.Item is a child component of Grid that provides explicit control over the placement and alignment of individual items within the grid.',
    role: [
      'position a child in a specific row and/or column',
      "override the item's alignment relative to its cell",
    ],
    behavior: [
      'must be used inside a Grid container',
      'wraps its child with Box for consistent styling and reset',
    ],
    byDefault: [
      'renders as a <div> element',
      "aligns according to the parent's alignment rules unless overridden",
    ],
    examplesOfUse: [
      'spanning an item across multiple columns or rows',
      'pinning a child to a specific grid cell at a breakpoint',
      'overriding alignment for a single child while others follow the parent',
    ],
    composedOf: GRID_ITEM_INHERITED_PROPS,
  },
  ownProps: [
    {
      name: 'gridColumn',
      options: ['CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "Sets the item's horizontal position or span between grid columns.",
    },
    {
      name: 'gridRow',
      options: ['CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "Sets the item's vertical position or span between grid rows.",
    },
    {
      name: 'justifySelf',
      options: Object.values(CssGridItemJustifySelf),
      defaultValue: CssGridItemJustifySelf[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls horizontal alignment of the item within its grid cell.',
    },
    {
      name: 'alignSelf',
      options: Object.values(CssGridItemAlignSelf),
      defaultValue: CssGridItemAlignSelf[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls vertical alignment of the item within its grid cell.',
    },
  ],
  examples: [
    {
      description:
        'This example shows how Grid.Item can explicitly control placement: on small screens, Start and End stay on the first row while Middle drops below, and from the md breakpoint up all three align in one row. Resize the viewport to see the layout switch in action.',
      jsx: (
        <Grid gridTemplateColumns="auto 1fr auto" gridAutoFlow="row">
          <Grid.Item gridRow="1 / 2" gridColumn="1 / 2">
            <Box variant="outline" intent="primary">
              Start
            </Box>
          </Grid.Item>
          <Grid.Item gridRow={{ base: '2 / 3', md: '1 / 2' }} gridColumn={{ base: '1 / -1', md: '2 / 3' }}>
            <Box variant="outline" intent="primary">
              Middle
            </Box>
          </Grid.Item>
          <Grid.Item gridRow="1 / 2" gridColumn="3 / 4">
            <Box variant="outline" intent="primary">
              End
            </Box>
          </Grid.Item>
        </Grid>
      ),
    },
  ],
}

export default {
  Grid: GRID_META,
  'Grid.Item': GRID_ITEM_META,
}
