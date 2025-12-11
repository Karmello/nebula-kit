import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Box } from 'lib/components'

import { Flex } from '..'

// children required
expectError(<Flex />)

// children passed
expectType(
  <Flex>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// tag possible to change
expectType(
  <Flex tag="ul">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// wrong ref type not allowed
expectError(
  <Flex tag="ul" tagRef={createRef<HTMLButtonElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// right ref type allowed
expectType(
  <Flex tag="ul" tagRef={createRef<HTMLUListElement>()}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// right props passed
expectType(
  <Flex flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// gaps possible to set as scale value
expectType(
  <Flex gap="5px" rowGap="5px" columnGap="5px">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// gaps possible to set as CSS string
expectType(
  <Flex gap="5px" rowGap="5px" columnGap="5px">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// wrong props passed
expectError(
  <Flex blockSize="5px">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)
expectError(
  <Flex margin="5px">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)
expectError(
  <Flex padding="5px">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// Flex.Item used
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

// Flex.Item with right props passed
expectType(
  <Flex>
    <Flex.Item flex={1}>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
  </Flex>
)

// Flex.Item with wrong props passed
expectError(
  <Flex>
    <Flex.Item margin="5px">
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item padding="5px">
      <Box>Item 2</Box>
    </Flex.Item>
  </Flex>
)
