import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Box } from 'lib/components'

import { Grid } from '..'

// children required
expectError(<Grid />)

// children passed
expectType(
  <Grid>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// tag possible to change
expectType(
  <Grid tag="ul">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// certain tags not allowed
expectError(
  <Grid tag="span">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// wrong ref type not allowed
expectError(
  <Grid tag="ul" tagRef={createRef<HTMLButtonElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// right ref type allowed
expectType(
  <Grid tag="ul" tagRef={createRef<HTMLUListElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// right props passed
expectType(
  <Grid gridTemplateColumns="1fr auto" gap={5}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// wrong props passed
expectError(
  <Grid blockSize={5}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)
expectError(
  <Grid margin={5}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)
expectError(
  <Grid padding={5}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)
