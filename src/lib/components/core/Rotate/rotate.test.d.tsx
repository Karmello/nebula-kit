import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Rotate } from '../Rotate'

// children required
expectError(<Rotate />)

// angle required
expectError(<Rotate>children</Rotate>)

// valid minimal usage
expectType(<Rotate angle={90}>children</Rotate>)

// valid angles
expectType(<Rotate angle={0}>children</Rotate>)

expectType(<Rotate angle={180}>children</Rotate>)

expectType(<Rotate angle={-90}>children</Rotate>)

// invalid angle
expectError(<Rotate angle="90">children</Rotate>)

// valid duration
expectType(
  <Rotate angle={90} duration={2000}>
    children
  </Rotate>
)

expectType(
  <Rotate angle={90} duration={0}>
    children
  </Rotate>
)

// invalid duration
expectError(
  <Rotate angle={90} duration="2000">
    children
  </Rotate>
)

// easing accepts CSS strings
expectType(
  <Rotate angle={90} easing="ease-in-out">
    children
  </Rotate>
)

expectType(
  <Rotate angle={90} easing="cubic-bezier(0.4, 0, 0.2, 1)">
    children
  </Rotate>
)

// non-responsive props
expectError(<Rotate angle={{ base: 90 }}>children</Rotate>)

expectError(
  <Rotate angle={90} duration={{ base: 200 }}>
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} easing={{ base: 'linear' }}>
    children
  </Rotate>
)

// valid ref
expectType(
  <Rotate angle={90} tagRef={createRef<HTMLSpanElement>()}>
    children
  </Rotate>
)

// tagAttrs exposed
expectType(
  <Rotate
    angle={90}
    tagAttrs={{
      id: 'rotate',
      className: 'custom-rotate',
    }}
  >
    children
  </Rotate>
)

// hidden Box props must not leak
expectError(
  <Rotate angle={90} padding="md">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} margin="md">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} color="blue">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} intent="primary">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} variant="solid">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} display="block">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} inlineSize="100px">
    children
  </Rotate>
)

expectError(
  <Rotate angle={90} gap="md">
    children
  </Rotate>
)

// unknown prop
expectError(
  <Rotate angle={90} unknown="xyz">
    children
  </Rotate>
)
