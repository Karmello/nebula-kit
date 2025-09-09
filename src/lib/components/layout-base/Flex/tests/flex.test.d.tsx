import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Box } from 'lib/components'

import { Flex } from '..'

// children not required
expectType(<Flex />)

// children passed
expectType(
  <Flex>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
)

// elem possible to change
expectType(<Flex elem="ul" />)

// wrong ref type not allowed
expectError(<Flex elem="ul" elemRef={createRef<HTMLButtonElement>()} />)

// right ref type allowed
expectType(<Flex elem="ul" elemRef={createRef<HTMLUListElement>()} />)

// right props passed
expectType(<Flex flexDirection="column" flexWrap="wrap" />)

// wrong props passed
expectError(<Flex blockSize={5} />)
expectError(<Flex margin={5} />)
expectError(<Flex padding={5} />)

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
    <Flex.Item margin={5}>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item padding={5}>
      <Box>Item 2</Box>
    </Flex.Item>
  </Flex>
)
