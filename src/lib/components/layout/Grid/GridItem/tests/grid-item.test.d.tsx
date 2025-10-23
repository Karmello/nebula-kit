import { expectType, expectError } from 'tsd'

import { Grid } from '../..'

// item's children required
expectError(
  <Grid>
    <Grid.Item />
  </Grid>
)

// item's children passed
expectType(
  <Grid>
    <Grid.Item>children</Grid.Item>
  </Grid>
)
