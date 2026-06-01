import { ComponentMeta } from 'client/definitions'

import { type GridProps } from '../definitions'
import { Grid } from '..'
import { Box } from '../../Box'

const GRID_EXAMPLES_META: ComponentMeta<GridProps>['examples'] = [
  {
    description:
      'Two-column layout with main content and sidebar, where the article takes more space and the aside sits beside it.',
    jsx: (
      <Grid gridTemplateColumns="2fr 1fr">
        <Box drawable tag="article" variant="outline" intent="primary">
          Article
        </Box>
        <Box drawable tag="aside" variant="outline" intent="primary">
          Aside
        </Box>
      </Grid>
    ),
  },
]

export { GRID_EXAMPLES_META }
