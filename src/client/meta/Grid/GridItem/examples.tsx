import { ComponentMeta } from 'client/definitions'
import { Grid, Box } from 'lib/components'
import { GridItemOwnProps } from 'lib/components/layout-base/Grid/GridItem/definitions'

export default [
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
] as ComponentMeta<GridItemOwnProps>['examples']
