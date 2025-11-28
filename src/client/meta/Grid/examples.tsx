import { ComponentMeta } from 'client/definitions'
import { Grid, Box } from 'lib/components'
import { GridProps } from 'lib/components/core/layout/Grid/definitions'

const GRID_EXAMPLES_META: ComponentMeta<GridProps>['examples'] = [
  {
    description:
      'Two-column layout with main content and sidebar, where the article takes more space and the aside sits beside it.',
    jsx: (
      <Grid gridTemplateColumns="2fr 1fr">
        <Box tag="article" variant="outline" color="blue" intent="primary">
          Article
        </Box>
        <Box tag="aside" variant="outline" color="blue" intent="primary">
          Aside
        </Box>
      </Grid>
    ),
  },
]

export { GRID_EXAMPLES_META }
