import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Box } from 'lib/components'

import { Flex } from '..'

// -------------------------------------
// children
// -------------------------------------

expectType(<Flex />)

expectType(
  <Flex>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// -------------------------------------
// polymorphic tags
// -------------------------------------

expectType(
  <Flex tag="ul">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

expectType(
  <Flex tag="ul" tagRef={createRef<HTMLUListElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

expectError(
  <Flex tag="ul" tagRef={createRef<HTMLButtonElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// -------------------------------------
// flexDirection
// -------------------------------------

expectType(
  <Flex flexDirection="row">
    <Box />
  </Flex>
)
expectType(
  <Flex flexDirection="row-reverse">
    <Box />
  </Flex>
)
expectType(
  <Flex flexDirection="column">
    <Box />
  </Flex>
)
expectType(
  <Flex flexDirection="column-reverse">
    <Box />
  </Flex>
)

expectType(
  <Flex flexDirection={{ md: 'column' }}>
    <Box />
  </Flex>
)

expectError(
  <Flex flexDirection="wrong">
    <Box />
  </Flex>
)

expectError(
  <Flex flexDirection={{ md: 'wrong' }}>
    <Box />
  </Flex>
)

// -------------------------------------
// flexWrap
// -------------------------------------

expectType(
  <Flex flexWrap="nowrap">
    <Box />
  </Flex>
)
expectType(
  <Flex flexWrap="wrap">
    <Box />
  </Flex>
)
expectType(
  <Flex flexWrap="wrap-reverse">
    <Box />
  </Flex>
)

expectError(
  <Flex flexWrap="wrong">
    <Box />
  </Flex>
)

// -------------------------------------
// justifyContent
// -------------------------------------

expectType(
  <Flex justifyContent="center">
    <Box />
  </Flex>
)
expectType(
  <Flex justifyContent="space-between">
    <Box />
  </Flex>
)

expectError(
  <Flex justifyContent="wrong">
    <Box />
  </Flex>
)

// -------------------------------------
// alignItems
// -------------------------------------

expectType(
  <Flex alignItems="center">
    <Box />
  </Flex>
)
expectType(
  <Flex alignItems="baseline">
    <Box />
  </Flex>
)

expectError(
  <Flex alignItems="wrong">
    <Box />
  </Flex>
)

// -------------------------------------
// alignContent
// -------------------------------------

expectType(
  <Flex alignContent="stretch">
    <Box />
  </Flex>
)
expectType(
  <Flex alignContent="space-evenly">
    <Box />
  </Flex>
)

expectError(
  <Flex alignContent="wrong">
    <Box />
  </Flex>
)

// -------------------------------------
// display
// -------------------------------------

expectType(
  <Flex display="flex">
    <Box />
  </Flex>
)
expectType(
  <Flex display="inline-flex">
    <Box />
  </Flex>
)

expectType(
  <Flex display={{ md: 'flex' }}>
    <Box />
  </Flex>
)

expectError(
  <Flex display="block">
    <Box />
  </Flex>
)

expectError(
  <Flex display={{ md: 'block' }}>
    <Box />
  </Flex>
)

// -------------------------------------
// gaps
// -------------------------------------

expectType(
  <Flex gap="md" rowGap="5px" columnGap="xl">
    <Box />
  </Flex>
)

expectType(
  <Flex gap={{ md: 'lg' }}>
    <Box />
  </Flex>
)

expectError(
  <Flex gap={{ wrong: 'md' }}>
    <Box />
  </Flex>
)

// -------------------------------------
// props intentionally exposed from Box
// -------------------------------------

expectType(
  <Flex blockSize="5px">
    <Box />
  </Flex>
)

expectType(
  <Flex margin="5px">
    <Box />
  </Flex>
)

expectType(
  <Flex padding="5px">
    <Box />
  </Flex>
)

expectType(
  <Flex variant="solid">
    <Box />
  </Flex>
)

// -------------------------------------
// Flex.Item
// -------------------------------------

expectType(
  <Flex>
    <Flex.Item>
      <Box>Item 1</Box>
    </Flex.Item>

    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
  </Flex>
)

// -------------------------------------
// Flex.Item props
// -------------------------------------

expectType(
  <Flex>
    <Flex.Item flex="1">
      <Box />
    </Flex.Item>

    <Flex.Item flexGrow="1">
      <Box />
    </Flex.Item>

    <Flex.Item flexShrink="0">
      <Box />
    </Flex.Item>

    <Flex.Item flexBasis="200px">
      <Box />
    </Flex.Item>

    <Flex.Item order="2">
      <Box />
    </Flex.Item>

    <Flex.Item alignSelf="center">
      <Box />
    </Flex.Item>

    <Flex.Item hidden>
      <Box />
    </Flex.Item>
  </Flex>
)

// -------------------------------------
// Flex.Item responsive props
// -------------------------------------

expectType(
  <Flex>
    <Flex.Item hidden={{ md: true }}>
      <Box />
    </Flex.Item>
  </Flex>
)

expectType(
  <Flex>
    <Flex.Item alignSelf={{ lg: 'stretch' }}>
      <Box />
    </Flex.Item>
  </Flex>
)

// -------------------------------------
// Flex.Item invalid props
// -------------------------------------

expectError(
  <Flex>
    <Flex.Item alignSelf="wrong">
      <Box />
    </Flex.Item>
  </Flex>
)

expectError(
  <Flex>
    <Flex.Item hidden="true">
      <Box />
    </Flex.Item>
  </Flex>
)
