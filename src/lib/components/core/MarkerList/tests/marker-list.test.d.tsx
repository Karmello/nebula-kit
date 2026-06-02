import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { MarkerList } from '..'

// children are not required
expectType(<MarkerList />)

// children passed
expectType(<MarkerList>children</MarkerList>)

// item slot
expectType(
  <MarkerList>
    <MarkerList.Item>Item</MarkerList.Item>
  </MarkerList>
)

// item children required
expectError(<MarkerList.Item />)

// wrong tag
expectError(<MarkerList tag="div">children</MarkerList>)

// valid tags
expectType(<MarkerList tag="ul">children</MarkerList>)
expectType(<MarkerList tag="ol">children</MarkerList>)

// valid refs
expectType(
  <MarkerList tag="ul" tagRef={createRef<HTMLUListElement>()}>
    children
  </MarkerList>
)

expectType(
  <MarkerList tag="ol" tagRef={createRef<HTMLOListElement>()}>
    children
  </MarkerList>
)

// obvious wrong ref type
expectError(
  <MarkerList tag="ul" tagRef={createRef<HTMLDivElement>()}>
    children
  </MarkerList>
)

// listStyle values
expectType(<MarkerList listStyle="disc">children</MarkerList>)
expectType(<MarkerList listStyle="circle">children</MarkerList>)
expectType(<MarkerList listStyle="square">children</MarkerList>)
expectType(<MarkerList listStyle="decimal">children</MarkerList>)

// invalid listStyle
expectError(<MarkerList listStyle="none">children</MarkerList>)

// color and intent
expectType(<MarkerList color="blue">children</MarkerList>)
expectType(<MarkerList intent="primary">children</MarkerList>)

expectError(<MarkerList color="purple">children</MarkerList>)
expectError(<MarkerList intent="danger">children</MarkerList>)

// responsive props
expectType(
  <MarkerList color={{ base: 'gray', md: 'blue' }} intent={{ base: 'muted', lg: 'primary' }} gap={{ base: '2xs', md: '24px' }}>
    children
  </MarkerList>
)

// invalid responsive breakpoint
expectError(<MarkerList gap={{ mobile: 'sm' }}>children</MarkerList>)

// invalid responsive enum value
expectError(<MarkerList intent={{ base: 'primary', md: 'danger' }}>children</MarkerList>)

// tagAttrs
expectType(
  <MarkerList
    tagAttrs={{
      id: 'list',
      className: 'marker-list',
    }}
  >
    children
  </MarkerList>
)

// item props
expectType(
  <MarkerList.Item color="blue" intent="primary">
    Item
  </MarkerList.Item>
)

expectType(
  <MarkerList.Item color={{ base: 'gray', md: 'blue' }} intent={{ base: 'muted', md: 'primary' }}>
    Item
  </MarkerList.Item>
)

expectType(<MarkerList.Item tagRef={createRef<HTMLLIElement>()}>Item</MarkerList.Item>)

expectError(<MarkerList.Item color="purple">Item</MarkerList.Item>)

expectError(<MarkerList.Item intent="danger">Item</MarkerList.Item>)

expectError(<MarkerList.Item intent={{ mobile: 'primary' }}>Item</MarkerList.Item>)

// unknown prop
expectError(<MarkerList unknown="xyz">children</MarkerList>)
expectError(<MarkerList.Item unknown="xyz">children</MarkerList.Item>)

// hidden Flex props must not leak
expectError(<MarkerList flexDirection="column">children</MarkerList>)
expectError(<MarkerList alignItems="center">children</MarkerList>)
expectError(<MarkerList justifyContent="center">children</MarkerList>)
expectError(<MarkerList rowGap="md">children</MarkerList>)
expectError(<MarkerList columnGap="md">children</MarkerList>)

// hidden Box props must not leak
expectError(<MarkerList padding="md">children</MarkerList>)
expectError(<MarkerList margin="md">children</MarkerList>)
expectError(<MarkerList variant="solid">children</MarkerList>)
expectError(<MarkerList inlineSize="100px">children</MarkerList>)

expectError(<MarkerList.Item padding="md">children</MarkerList.Item>)
expectError(<MarkerList.Item margin="md">children</MarkerList.Item>)
expectError(<MarkerList.Item variant="solid">children</MarkerList.Item>)
expectError(<MarkerList.Item gap="md">children</MarkerList.Item>)
