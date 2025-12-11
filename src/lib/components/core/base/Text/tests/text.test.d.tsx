import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Text } from '..'

// children are required
expectError(<Text />)

// children passed
expectType(<Text>text</Text>)

// not allowed tag used
expectError(<Text tag="ul">text</Text>)

// not allowed ref type passed
expectError(<Text tagRef={createRef<HTMLAnchorElement>()}>text</Text>)

// allowed tag passed
expectType(<Text tag="h1">text</Text>)

// allowed ref type used
expectType(
  <Text tag="h1" tagRef={createRef<HTMLHeadingElement>()}>
    text
  </Text>
)

// allowed prop
expectType(<Text textAlign="center">text</Text>)

// not allowed props
expectError(<Text variant="solid">text</Text>)
expectError(<Text margin="10px">text</Text>)
expectError(<Text padding="10px">text</Text>)
