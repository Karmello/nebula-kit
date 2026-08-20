import { Grid } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

export const GRID_EXAMPLES: Example[] = [
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

export const GRID_ITEM_EXAMPLES: Example[] = [
  {
    description:
      'Grid.Item with explicit placement: on small screens, Start and End slots share the first row while the Middle slot drops below; from the md breakpoint up, all three align in a single row. Resize the viewport to see the layout switch.',
    jsx: (
      <Grid gridTemplateColumns="auto 1fr auto" gridAutoFlow="row">
        <Grid.Item gridRow="1 / 2" gridColumn="1 / 2">
          <Box drawable variant="outline" intent="primary">
            Start
          </Box>
        </Grid.Item>
        <Grid.Item gridRow={{ base: '2 / 3', md: '1 / 2' }} gridColumn={{ base: '1 / -1', md: '2 / 3' }}>
          <Box drawable variant="outline" intent="primary">
            Middle
          </Box>
        </Grid.Item>
        <Grid.Item gridRow="1 / 2" gridColumn="3 / 4">
          <Box drawable variant="outline" intent="primary">
            End
          </Box>
        </Grid.Item>
      </Grid>
    ),
  },
]
