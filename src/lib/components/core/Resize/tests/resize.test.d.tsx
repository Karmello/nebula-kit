import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Resize } from '../'

// children required
expectError(<Resize />)

// property required
expectError(<Resize visible>children</Resize>)

// visible required
expectError(<Resize property="blockSize">children</Resize>)

// valid minimal usage
expectType(
  <Resize property="blockSize" visible>
    children
  </Resize>
)

// valid properties
expectType(
  <Resize property="blockSize" visible>
    children
  </Resize>
)

expectType(
  <Resize property="inlineSize" visible>
    children
  </Resize>
)

// invalid property
expectError(
  <Resize property="width" visible>
    children
  </Resize>
)

// valid duration
expectType(
  <Resize property="blockSize" visible duration={2000}>
    children
  </Resize>
)

expectType(
  <Resize property="blockSize" visible duration={0}>
    children
  </Resize>
)

// invalid duration
expectError(
  <Resize property="blockSize" visible duration="2000">
    children
  </Resize>
)

// easing accepts CSS string
expectType(
  <Resize property="blockSize" visible easing="ease-in-out">
    children
  </Resize>
)

expectType(
  <Resize property="blockSize" visible easing="cubic-bezier(0.4, 0, 0.2, 1)">
    children
  </Resize>
)

// non-responsive props
expectError(
  <Resize property={{ base: 'blockSize' }} visible>
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible={{ base: true }}>
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible duration={{ base: 200 }}>
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible easing={{ base: 'linear' }}>
    children
  </Resize>
)

// valid ref
expectType(
  <Resize property="blockSize" visible tagRef={createRef<HTMLDivElement>()}>
    children
  </Resize>
)

// obvious invalid ref
expectError(
  <Resize property="blockSize" visible tagRef={createRef<HTMLAnchorElement>()}>
    children
  </Resize>
)

// tagAttrs exposed
expectType(
  <Resize
    property="blockSize"
    visible
    tagAttrs={{
      id: 'resize',
      className: 'custom-resize',
    }}
  >
    children
  </Resize>
)

// hidden Box props must not leak
expectError(
  <Resize property="blockSize" visible padding="md">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible margin="md">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible variant="solid">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible intent="primary">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible display="block">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible inlineSize="100px">
    children
  </Resize>
)

expectError(
  <Resize property="blockSize" visible gap="md">
    children
  </Resize>
)

// unknown prop
expectError(
  <Resize property="blockSize" visible unknown="xyz">
    children
  </Resize>
)
