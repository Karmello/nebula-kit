import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Box } from 'lib/components'

import { Grid } from '..'

// -------------------------------------
// children
// -------------------------------------

expectType(<Grid />)

expectType(
  <Grid>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Grid>
)

// -------------------------------------
// allowed tags
// -------------------------------------

expectType(
  <Grid tag="div">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="section">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="main">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="article">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="aside">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="nav">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="ul">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="ol">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="span">
    <Box />
  </Grid>
)

expectType(
  <Grid tag="button">
    <Box />
  </Grid>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Grid tag="ul" tagRef={createRef<HTMLUListElement>()}>
    <Box />
  </Grid>
)

expectError(
  <Grid tag="ul" tagRef={createRef<HTMLButtonElement>()}>
    <Box />
  </Grid>
)

// -------------------------------------
// gridTemplateColumns
// -------------------------------------

expectType(
  <Grid gridTemplateColumns="1fr auto">
    <Box />
  </Grid>
)

expectError(
  <Grid gridTemplateColumns={2}>
    <Box />
  </Grid>
)

expectType(
  <Grid gridTemplateColumns={{ md: '1fr 1fr' }}>
    <Box />
  </Grid>
)

// -------------------------------------
// gridTemplateRows
// -------------------------------------

expectType(
  <Grid gridTemplateRows="auto 1fr">
    <Box />
  </Grid>
)

expectError(
  <Grid gridTemplateRows={2}>
    <Box />
  </Grid>
)

// -------------------------------------
// gridAutoFlow
// -------------------------------------

expectType(
  <Grid gridAutoFlow="row">
    <Box />
  </Grid>
)
expectType(
  <Grid gridAutoFlow="column">
    <Box />
  </Grid>
)
expectType(
  <Grid gridAutoFlow="row dense">
    <Box />
  </Grid>
)
expectType(
  <Grid gridAutoFlow="column dense">
    <Box />
  </Grid>
)

expectError(
  <Grid gridAutoFlow="wrong">
    <Box />
  </Grid>
)

// -------------------------------------
// placeContent
// -------------------------------------

expectType(
  <Grid placeContent="center">
    <Box />
  </Grid>
)
expectType(
  <Grid placeContent="space-between">
    <Box />
  </Grid>
)

expectError(
  <Grid placeContent="wrong">
    <Box />
  </Grid>
)

// -------------------------------------
// placeItems
// -------------------------------------

expectType(
  <Grid placeItems="stretch">
    <Box />
  </Grid>
)
expectType(
  <Grid placeItems="center">
    <Box />
  </Grid>
)

expectError(
  <Grid placeItems="wrong">
    <Box />
  </Grid>
)

// -------------------------------------
// gaps
// -------------------------------------

expectType(
  <Grid gap="24px" rowGap="5px" columnGap="48px">
    <Box />
  </Grid>
)

expectType(
  <Grid gap={{ md: '48px' }}>
    <Box />
  </Grid>
)

expectError(
  <Grid gap={{ wrong: '24px' }}>
    <Box />
  </Grid>
)

// -------------------------------------
// props intentionally exposed from Box
// -------------------------------------

expectType(
  <Grid blockSize="5px">
    <Box />
  </Grid>
)

expectType(
  <Grid margin="5px">
    <Box />
  </Grid>
)

expectType(
  <Grid padding="5px">
    <Box />
  </Grid>
)

expectType(
  <Grid variant="solid">
    <Box />
  </Grid>
)

// -------------------------------------
// Grid.Item
// -------------------------------------

expectType(
  <Grid>
    <Grid.Item>
      <Box />
    </Grid.Item>
  </Grid>
)

// -------------------------------------
// Grid.Item props
// -------------------------------------

expectType(
  <Grid>
    <Grid.Item gridColumn="1 / 3">
      <Box />
    </Grid.Item>

    <Grid.Item gridRow="2 / 4">
      <Box />
    </Grid.Item>

    <Grid.Item alignSelf="center">
      <Box />
    </Grid.Item>

    <Grid.Item justifySelf="stretch">
      <Box />
    </Grid.Item>
  </Grid>
)

// -------------------------------------
// Grid.Item responsive props
// -------------------------------------

expectType(
  <Grid>
    <Grid.Item gridColumn={{ md: '1 / -1' }}>
      <Box />
    </Grid.Item>
  </Grid>
)

expectType(
  <Grid>
    <Grid.Item justifySelf={{ lg: 'center' }}>
      <Box />
    </Grid.Item>
  </Grid>
)

// -------------------------------------
// Grid.Item props
// -------------------------------------

expectType(
  <Grid>
    <Grid.Item margin="5px">
      <Box />
    </Grid.Item>
  </Grid>
)

expectType(
  <Grid>
    <Grid.Item padding="5px">
      <Box />
    </Grid.Item>
  </Grid>
)

expectError(
  <Grid>
    <Grid.Item alignSelf="wrong">
      <Box />
    </Grid.Item>
  </Grid>
)

expectError(
  <Grid>
    <Grid.Item justifySelf="wrong">
      <Box />
    </Grid.Item>
  </Grid>
)
