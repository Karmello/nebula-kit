import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Slide } from '../Slide'

// children required
expectError(<Slide />)

// from required
expectError(<Slide visible>children</Slide>)

// visible required
expectError(<Slide from="left">children</Slide>)

// valid minimal usage
expectType(
  <Slide from="left" visible>
    children
  </Slide>
)

// valid directions
expectType(
  <Slide from="top" visible>
    children
  </Slide>
)

expectType(
  <Slide from="right" visible>
    children
  </Slide>
)

expectType(
  <Slide from="bottom" visible>
    children
  </Slide>
)

expectType(
  <Slide from="left" visible>
    children
  </Slide>
)

// invalid direction
expectError(
  <Slide from="center" visible>
    children
  </Slide>
)

// valid duration
expectType(
  <Slide from="left" visible duration={2000}>
    children
  </Slide>
)

expectType(
  <Slide from="left" visible duration={0}>
    children
  </Slide>
)

// invalid duration
expectError(
  <Slide from="left" visible duration="2000">
    children
  </Slide>
)

// easing accepts CSS strings
expectType(
  <Slide from="left" visible easing="ease-in-out">
    children
  </Slide>
)

expectType(
  <Slide from="left" visible easing="cubic-bezier(0.4, 0, 0.2, 1)">
    children
  </Slide>
)

// non-responsive props
expectError(
  <Slide from={{ base: 'left' }} visible>
    children
  </Slide>
)

expectError(
  <Slide from="left" visible={{ base: true }}>
    children
  </Slide>
)

expectError(
  <Slide from="left" visible duration={{ base: 200 }}>
    children
  </Slide>
)

expectError(
  <Slide from="left" visible easing={{ base: 'linear' }}>
    children
  </Slide>
)

// valid ref
expectType(
  <Slide from="left" visible tagRef={createRef<HTMLDivElement>()}>
    children
  </Slide>
)

// obvious invalid ref
expectError(
  <Slide from="left" visible tagRef={createRef<HTMLButtonElement>()}>
    children
  </Slide>
)

// tagAttrs exposed
expectType(
  <Slide
    from="left"
    visible
    tagAttrs={{
      id: 'slide',
      className: 'custom-slide',
    }}
  >
    children
  </Slide>
)

// hidden Box props must not leak
expectError(
  <Slide from="left" visible padding="md">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible margin="md">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible color="blue">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible intent="primary">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible variant="solid">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible display="block">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible inlineSize="100px">
    children
  </Slide>
)

expectError(
  <Slide from="left" visible gap="md">
    children
  </Slide>
)

// unknown prop
expectError(
  <Slide from="left" visible unknown="xyz">
    children
  </Slide>
)
