import { createRef } from 'react'
import { expectError,expectType } from 'tsd'

import { Portal } from '../Portal'

// children required
expectError(<Portal />)

// valid minimal usage
expectType(<Portal>children</Portal>)

// valid anchorRef
expectType(<Portal anchorRef={createRef<HTMLButtonElement>()}>children</Portal>)

// valid offset
expectType(<Portal offset={10}>children</Portal>)

expectType(<Portal offset={0}>children</Portal>)

// invalid offset
expectError(<Portal offset="10">children</Portal>)

// valid placements
expectType(<Portal placement="top-start">children</Portal>)

expectType(<Portal placement="top-center">children</Portal>)

expectType(<Portal placement="top-end">children</Portal>)

expectType(<Portal placement="right-start">children</Portal>)

expectType(<Portal placement="right-center">children</Portal>)

expectType(<Portal placement="right-end">children</Portal>)

expectType(<Portal placement="bottom-start">children</Portal>)

expectType(<Portal placement="bottom-center">children</Portal>)

expectType(<Portal placement="bottom-end">children</Portal>)

expectType(<Portal placement="left-start">children</Portal>)

expectType(<Portal placement="left-center">children</Portal>)

expectType(<Portal placement="left-end">children</Portal>)

// invalid placement
expectError(<Portal placement="center">children</Portal>)

expectError(<Portal placement="bottom">children</Portal>)

// placement not responsive
expectError(<Portal placement={{ base: 'bottom-start', md: 'top-start' }}>children</Portal>)

// offset not responsive
expectError(<Portal offset={{ base: 10 }}>children</Portal>)

// valid ref
expectType(<Portal tagRef={createRef<HTMLDivElement>()}>children</Portal>)

// obvious invalid ref
expectError(<Portal tagRef={createRef<HTMLButtonElement>()}>children</Portal>)

// tagAttrs exposed
expectType(
  <Portal
    tagAttrs={{
      id: 'portal',
      className: 'custom-portal',
    }}
  >
    children
  </Portal>
)

// hidden Box props must not leak
expectError(<Portal padding="md">children</Portal>)

expectError(<Portal margin="md">children</Portal>)

expectError(<Portal color="blue">children</Portal>)

expectError(<Portal intent="primary">children</Portal>)

expectError(<Portal variant="solid">children</Portal>)

expectError(<Portal interactive>children</Portal>)

expectError(<Portal display="block">children</Portal>)

expectError(<Portal inlineSize="100px">children</Portal>)

expectError(<Portal blockSize="100px">children</Portal>)

expectError(<Portal borderRadius="10px">children</Portal>)

expectError(<Portal gap="md">children</Portal>)

expectError(<Portal flexDirection="column">children</Portal>)

// unknown prop
expectError(<Portal unknown="xyz">children</Portal>)
