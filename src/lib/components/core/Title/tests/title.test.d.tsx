import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Title } from '../'

// -------------------------------------
// children
// -------------------------------------

expectError(<Title />)

expectType(<Title>Title</Title>)

expectType(<Title>{123}</Title>)

expectType(
  <Title>
    <span>Title</span>
  </Title>
)

// -------------------------------------
// typography
// -------------------------------------

expectType(<Title typography="h1">Title</Title>)
expectType(<Title typography="h2">Title</Title>)
expectType(<Title typography="h3">Title</Title>)
expectType(<Title typography="h4">Title</Title>)
expectType(<Title typography="h5">Title</Title>)
expectType(<Title typography="h6">Title</Title>)

expectError(<Title typography="body">Title</Title>)
expectError(<Title typography="wrong">Title</Title>)

// -------------------------------------
// iconName
// -------------------------------------

expectType(<Title iconName="check">Title</Title>)

expectType(<Title iconName={{ md: 'check' }}>Title</Title>)

expectError(<Title iconName="xyz">Title</Title>)

// -------------------------------------
// iconPlacement
// -------------------------------------

expectType(<Title iconPlacement="left">Title</Title>)

expectType(<Title iconPlacement="right">Title</Title>)

expectError(<Title iconPlacement="center">Title</Title>)

// -------------------------------------
// customSvgIcon
// -------------------------------------

expectType(<Title customSvgIcon={<svg />}>Title</Title>)

// -------------------------------------
// color
// -------------------------------------

expectType(<Title color="blue">Title</Title>)

expectType(<Title color="red">Title</Title>)

expectError(<Title color="wrong">Title</Title>)

// -------------------------------------
// intent
// -------------------------------------

expectType(<Title intent="primary">Title</Title>)

expectType(<Title intent="secondary">Title</Title>)

expectError(<Title intent="wrong">Title</Title>)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Title tagRef={createRef<HTMLSpanElement>()}>Title</Title>)

// -------------------------------------
// tagAttrs
// -------------------------------------

expectType(<Title tagAttrs={{ 'data-testid': 'title' }}>Title</Title>)

expectType(<Title tagAttrs={{ title: 'Tooltip' }}>Title</Title>)

expectError(<Title tagAttrs={{ href: 'href' }}>Title</Title>)

// -------------------------------------
// root tag locked
// -------------------------------------

expectError(<Title tag="div">Title</Title>)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(<Title flexDirection="column">Title</Title>)

expectError(<Title gap="24px">Title</Title>)

expectError(<Title iconSize="lg">Title</Title>)

expectError(<Title iconTypography="h1">Title</Title>)

expectError(<Title justifyContent="center">Title</Title>)

expectError(<Title variant="solid">Title</Title>)

expectError(<Title margin="10px">Title</Title>)
