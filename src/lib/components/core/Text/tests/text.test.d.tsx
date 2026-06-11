import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Text } from '..'

// -------------------------------------
// children
// -------------------------------------

expectError(<Text />)

expectType(<Text>text</Text>)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Text unknown="v">text</Text>)

// -------------------------------------
// allowed tags
// -------------------------------------

expectType(<Text tag="p">text</Text>)
expectType(<Text tag="span">text</Text>)
expectType(<Text tag="h1">text</Text>)
expectType(<Text tag="h6">text</Text>)
expectType(<Text tag="a">text</Text>)
expectType(<Text tag="label">text</Text>)

// -------------------------------------
// invalid tags
// -------------------------------------

expectError(<Text tag="div">text</Text>)
expectError(<Text tag="ul">text</Text>)
expectError(<Text tag="button">text</Text>)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Text tag="a" tagAttrs={{ href: '/x' }}>
    text
  </Text>
)

expectError(<Text tagAttrs={{ href: '/x' }}>text</Text>)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Text tagRef={createRef<HTMLParagraphElement>()}>text</Text>)

expectType(
  <Text tag="h1" tagRef={createRef<HTMLHeadingElement>()}>
    text
  </Text>
)

expectType(
  <Text tag="a" tagRef={createRef<HTMLAnchorElement>()}>
    text
  </Text>
)

expectError(<Text tagRef={createRef<HTMLAnchorElement>()}>text</Text>)

// -------------------------------------
// booleans
// -------------------------------------

expectType(<Text bold>text</Text>)
expectType(<Text italic>text</Text>)
expectType(<Text underline>text</Text>)
expectType(<Text truncate>text</Text>)
expectType(<Text noWrap>text</Text>)

expectError(<Text bold="true">text</Text>)
expectError(<Text italic="true">text</Text>)

// -------------------------------------
// typography
// -------------------------------------

expectType(<Text typography="body">text</Text>)
expectType(<Text typography="lead">text</Text>)
expectType(<Text typography="small">text</Text>)
expectType(<Text typography="caption">text</Text>)
expectType(<Text typography="h1">text</Text>)
expectType(<Text typography="h6">text</Text>)

expectError(<Text typography="wrong">text</Text>)

// -------------------------------------
// textAlign
// -------------------------------------

expectType(<Text textAlign="center">text</Text>)

expectType(<Text textAlign={{ md: 'end' }}>text</Text>)

expectError(<Text textAlign="wrong">text</Text>)

// -------------------------------------
// intent / color
// -------------------------------------

expectType(<Text intent="primary">text</Text>)
expectType(<Text color="blue">text</Text>)
expectType(<Text color="red">text</Text>)

expectError(<Text intent="wrong">text</Text>)
expectError(<Text color="wrong">text</Text>)

// -------------------------------------
// space
// -------------------------------------

expectType(<Text space="start">text</Text>)
expectType(<Text space="end">text</Text>)
expectType(<Text space="both">text</Text>)

expectError(<Text space="wrong">text</Text>)

// -------------------------------------
// wordBreak
// -------------------------------------

expectType(<Text wordBreak="normal">text</Text>)
expectType(<Text wordBreak="break-all">text</Text>)
expectType(<Text wordBreak="keep-all">text</Text>)
expectType(<Text wordBreak="break-word">text</Text>)

expectError(<Text wordBreak="wrong">text</Text>)

// -------------------------------------
// numeric props
// -------------------------------------

expectType(<Text clampLines={2}>text</Text>)

expectError(<Text clampLines="2">text</Text>)

// -------------------------------------
// css string props
// -------------------------------------

expectType(<Text fontSize="20px">text</Text>)
expectType(<Text lineHeight="1.5">text</Text>)

// -------------------------------------
// props intentionally NOT exposed from Box
// -------------------------------------

expectError(<Text variant="solid">text</Text>)
expectError(<Text margin="10px">text</Text>)
expectError(<Text padding="10px">text</Text>)
expectError(<Text interactive>text</Text>)
expectError(<Text drawable>text</Text>)
expectError(<Text borderRadius="10px">text</Text>)
