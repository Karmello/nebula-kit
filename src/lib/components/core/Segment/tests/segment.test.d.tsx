import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Button } from '../../Button'
import { Segment } from '..'

// -------------------------------------
// children
// -------------------------------------

expectError(<Segment />)

expectType(
  <Segment>
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>

    <Segment.Item>
      <Button>Button 2</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// polymorphic tags
// -------------------------------------

expectType(
  <Segment tag="nav">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment tag="nav" tagRef={createRef<HTMLElement>()}>
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// flexDirection
// -------------------------------------

expectType(
  <Segment flexDirection="row">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment flexDirection="column">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment flexDirection={{ md: 'column-reverse' }}>
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment flexDirection="wrong">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(
  <Segment gap="md">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment justifyContent="center">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment margin="10px">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment padding="10px">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// Segment.Item
// -------------------------------------

expectType(
  <Segment>
    <Segment.Item flex="1">
      <Button fullWidth>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item flexGrow="1">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item flexShrink="0">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item flexBasis="200px">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item order="2">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item alignSelf="center">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item hidden>
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// Segment.Item responsive props
// -------------------------------------

expectType(
  <Segment>
    <Segment.Item flex={{ md: '1' }}>
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectType(
  <Segment>
    <Segment.Item hidden={{ lg: true }}>
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

// -------------------------------------
// Segment.Item invalid props
// -------------------------------------

expectError(
  <Segment>
    <Segment.Item alignSelf="wrong">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment>
    <Segment.Item hidden="true">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)

expectError(
  <Segment>
    <Segment.Item margin="10px">
      <Button>Button</Button>
    </Segment.Item>
  </Segment>
)
