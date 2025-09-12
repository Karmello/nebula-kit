import { ComponentMeta } from 'client/definitions'
import { Box, Grid, GRID_INHERITED_PROPS, GridOwnProps } from 'lib/components'
import { CssGridAutoFlow, CssGridPlaceItems, CssGridPlaceContent, GridElem } from 'lib/definitions'

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

export default {
  Grid: GRID_META,
}
