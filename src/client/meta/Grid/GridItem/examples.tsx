import { ComponentMeta } from 'client/definitions'
import { Grid, Box } from 'lib/components'
import { GridItemProps } from 'lib/components/layout-base/Grid/GridItem/definitions'

const GRID_ITEM_EXAMPLES_META: ComponentMeta<GridItemProps>['examples'] = [
  {
    description:
      'Grid.Item with explicit placement: on small screens, Start and End slots share the first row while the Middle slot drops below; from the md breakpoint up, all three align in a single row. Resize the viewport to see the layout switch.',
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
]

export { GRID_ITEM_EXAMPLES_META }
