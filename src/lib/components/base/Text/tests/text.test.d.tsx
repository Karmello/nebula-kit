import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Text } from '..'

// children are required
expectError(<Text />)

// children passed
expectType(<Text>text</Text>)

// not allowed tag used
expectError(<Text elem="a">text</Text>)

// not allowed ref type passed
expectError(<Text elemRef={createRef<HTMLAnchorElement>()}>text</Text>)

// allowed tag passed
expectType(<Text elem="h1">text</Text>)

// allowed ref type used
expectType(
  <Text elem="h1" elemRef={createRef<HTMLHeadingElement>()}>
    text
  </Text>
)

// allowed prop
expectType(<Text textAlign="center">text</Text>)

// not allowed props
expectError(<Text variant="solid">text</Text>)
expectError(<Text margin={10}>text</Text>)
expectError(<Text padding={10}>text</Text>)
