import { ComponentMeta } from 'client/definitions'
import { Grid, Box } from 'lib/components'
import { GridOwnProps } from 'lib/components/layout-base/Grid/definitions'

export default [
  {
    description:
      'Two-column layout with main content and sidebar, where the article takes more space and the aside sits alongside it.',
    jsx: (
      <Grid gridTemplateColumns="2fr 1fr">
        <Box tag="article" variant="outline" intent="primary">
          Article
        </Box>
        <Box tag="aside" variant="outline" intent="primary">
          Aside
        </Box>
      </Grid>
    ),
  },
] as ComponentMeta<GridOwnProps>['examples']
