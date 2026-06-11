import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Reveal } from '../Reveal/reveal'

// required props
expectError(<Reveal />)

// missing children
expectError(<Reveal label="Label" />)

// missing label
expectError(<Reveal>children</Reveal>)

// valid minimal usage
expectType(<Reveal label="Label">children</Reveal>)

// valid tags
expectType(
  <Reveal tag="div" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="section" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="article" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="aside" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="li" label="Label">
    children
  </Reveal>
)

// invalid tag
expectError(
  <Reveal tag="button" label="Label">
    children
  </Reveal>
)

// valid refs
expectType(
  <Reveal tag="div" tagRef={createRef<HTMLDivElement>()} label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="section" tagRef={createRef<HTMLElement>()} label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="article" tagRef={createRef<HTMLElement>()} label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="aside" tagRef={createRef<HTMLElement>()} label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal tag="li" tagRef={createRef<HTMLLIElement>()} label="Label">
    children
  </Reveal>
)

// obvious invalid refs
expectError(
  <Reveal tag="div" tagRef={createRef<HTMLButtonElement>()} label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal tag="li" tagRef={createRef<HTMLDivElement>()} label="Label">
    children
  </Reveal>
)

// valid intents
expectType(
  <Reveal intent="neutral" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal intent="primary" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal intent="inverse" label="Label">
    children
  </Reveal>
)

// invalid intent
expectError(
  <Reveal intent="danger" label="Label">
    children
  </Reveal>
)

// valid colors
expectType(
  <Reveal color="gray" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal color="blue" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal color="amber" label="Label">
    children
  </Reveal>
)

// invalid color
expectError(
  <Reveal color="purple" label="Label">
    children
  </Reveal>
)

// valid sizes
expectType(
  <Reveal size="2xs" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal size="sm" label="Label">
    children
  </Reveal>
)

expectType(
  <Reveal size="xl" label="Label">
    children
  </Reveal>
)

// invalid size
expectError(
  <Reveal size="2xl" label="Label">
    children
  </Reveal>
)

// responsive props
expectType(
  <Reveal color="blue" intent="primary" label="Label">
    children
  </Reveal>
)

// invalid responsive breakpoint
expectError(
  <Reveal color={{ mobile: 'blue' }} label="Label">
    children
  </Reveal>
)

// invalid responsive enum value
expectError(
  <Reveal intent={{ base: 'primary', md: 'danger' }} label="Label">
    children
  </Reveal>
)

// non-responsive props
expectError(
  <Reveal disabled={{ base: true }} label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal size={{ base: 'sm', md: 'lg' }} label="Label">
    children
  </Reveal>
)

// disabled allowed
expectType(
  <Reveal disabled label="Label">
    children
  </Reveal>
)

// tagAttrs exposed
expectType(
  <Reveal
    label="Label"
    tagAttrs={{
      id: 'reveal',
      className: 'custom-reveal',
    }}
  >
    children
  </Reveal>
)

// hidden Box props must not leak
expectError(
  <Reveal padding="md" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal margin="md" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal variant="solid" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal interactive label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal display="block" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal inlineSize="100px" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal blockSize="100px" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal borderRadius="10px" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal gap="md" label="Label">
    children
  </Reveal>
)

expectError(
  <Reveal flexDirection="column" label="Label">
    children
  </Reveal>
)

// unknown prop
expectError(
  <Reveal unknown="xyz" label="Label">
    children
  </Reveal>
)
