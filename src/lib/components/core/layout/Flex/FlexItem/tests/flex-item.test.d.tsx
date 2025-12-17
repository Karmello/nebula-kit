import { expectType, expectError } from 'tsd'

import { Flex } from '../..'

// valid props
expectType(
  <Flex>
    <Flex.Item alignSelf="center">Item 1</Flex.Item>
    <Flex.Item flex="1">Item 2</Flex.Item>
  </Flex>
)

// valid props
expectType(
  <Flex>
    <Flex.Item alignSelf="center" order="1">
      Item 1
    </Flex.Item>
    <Flex.Item flexBasis="1" flexGrow="1" flexShrink="1">
      Item 2
    </Flex.Item>
  </Flex>
)

// no Box props
expectError(
  <Flex>
    <Flex.Item textAlign="center">Item 1</Flex.Item>
    <Flex.Item opacity="1">Item 2</Flex.Item>
  </Flex>
)
