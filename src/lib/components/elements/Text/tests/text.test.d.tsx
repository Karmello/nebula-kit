import { JSX } from 'react'
import { expectType, expectError } from 'tsd'

import { Text } from '../text'

// children
expectType<JSX.Element>(<Text>text</Text>)
expectError(<Text />)

// as
expectType<JSX.Element>(<Text as="h1">text</Text>)
expectType<JSX.Element>(<Text as="p">text</Text>)
expectType<JSX.Element>(<Text as="span">text</Text>)
expectError(<Text as="div">text</Text>)
expectError(<Text as="a">text</Text>)

// typography
expectType<JSX.Element>(<Text typography="body">text</Text>)
expectType<JSX.Element>(<Text typography="h3">text</Text>)
expectError(<Text typography="display">text</Text>)

// fontSize
expectType<JSX.Element>(<Text fontSize={8}>text</Text>)
expectType<JSX.Element>(<Text fontSize={{ base: 10, md: 16 }}>text</Text>)
expectType<JSX.Element>(<Text fontSize="14px">text</Text>)

// lineHeight
expectType<JSX.Element>(<Text lineHeight={1.4}>text</Text>)
expectType<JSX.Element>(<Text lineHeight={{ base: 1.2, lg: 1.6 }}>text</Text>)
expectType<JSX.Element>(<Text lineHeight="150%">text</Text>)
expectType<JSX.Element>(<Text lineHeight="normal">text</Text>)

// textAlign
expectType<JSX.Element>(<Text textAlign="center">text</Text>)
expectType<JSX.Element>(<Text textAlign={{ base: 'left', md: 'right' }}>text</Text>)
expectType<JSX.Element>(<Text textAlign="inherit">text</Text>)
expectError(<Text textAlign="middle">text</Text>)

// iconName
expectType<JSX.Element>(<Text iconName="search">text</Text>)
expectType<JSX.Element>(
  <Text iconName="search" iconPosition="left">
    text
  </Text>
)

// noWrap
expectType<JSX.Element>(<Text noWrap>text</Text>)

// truncate
expectType<JSX.Element>(<Text truncate>text</Text>)

//clampLines
expectType<JSX.Element>(<Text clampLines={2}>text</Text>)
expectError(<Text clampLines="2">text</Text>)

// className + style
expectType<JSX.Element>(
  <Text className="x" style={{ textDecoration: 'underline' }}>
    text
  </Text>
)

// justify
expectError(<Text justify="between">text</Text>)

// wrap
expectError(<Text wrap="wrap">text</Text>)

// direction
expectError(<Text direction="row">text</Text>)
