import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Tooltip } from '../Tooltip'

// -------------------------------------
// required props
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(<Tooltip />)

expectError(
  <Tooltip minInlineSize={100} maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} unknown="v">
    Trigger
  </Tooltip>
)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Tooltip
    content="Tooltip"
    minInlineSize={100}
    maxInlineSize={300}
    tagAttrs={{
      id: 'tooltip',
      onMouseEnter: () => null,
    }}
  >
    Trigger
  </Tooltip>
)

// invalid div attrs
expectError(
  <Tooltip
    content="Tooltip"
    minInlineSize={100}
    maxInlineSize={300}
    tagAttrs={{
      href: '/x',
    }}
  >
    Trigger
  </Tooltip>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} tagRef={createRef<HTMLDivElement>()}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} tagRef={createRef<HTMLButtonElement>()}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// content
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content={123} minInlineSize={100} maxInlineSize={300}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// mode
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} mode="hover">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} mode="click">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} mode="wrong">
    Trigger
  </Tooltip>
)

// non-responsive
expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} mode={{ md: 'click' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// placement
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} placement="top-start">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} placement="bottom-center">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} placement="left-end">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} placement="center">
    Trigger
  </Tooltip>
)

// non-responsive
expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} placement={{ md: 'top-start' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// numeric props
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} offset={10}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize="100" maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize="300">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} offset="10">
    Trigger
  </Tooltip>
)

// -------------------------------------
// color
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} color="blue">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} color={{ md: 'red' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} color="wrong">
    Trigger
  </Tooltip>
)

// -------------------------------------
// intent
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} intent="primary">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} intent={{ lg: 'inverse' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} intent="wrong">
    Trigger
  </Tooltip>
)

// -------------------------------------
// variant
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} variant="solid">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} variant={{ md: 'outline' }}>
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} variant={{ lg: 'soft-outline' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} variant="ghost">
    Trigger
  </Tooltip>
)

// -------------------------------------
// padding
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} padding="md">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} paddingBlock="lg" paddingInline="sm">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} padding={{ md: 'xl' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} padding={{ wrong: 'md' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// textAlign
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} textAlign="center">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} textAlign={{ md: 'justify' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} textAlign="wrong">
    Trigger
  </Tooltip>
)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} gap="md">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} flex="1">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} elevated>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300} tag="div">
    Trigger
  </Tooltip>
)
