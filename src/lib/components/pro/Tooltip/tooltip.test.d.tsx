import { expectError, expectType } from 'tsd'

import { Tooltip } from '../Tooltip'

// -------------------------------------
// required props
// -------------------------------------

expectType(<Tooltip content="Tooltip">Trigger</Tooltip>)

expectError(<Tooltip />)

expectError(<Tooltip>Trigger</Tooltip>)

expectError(<Tooltip content="Tooltip" />)

// -------------------------------------
// children
// -------------------------------------

expectType(
  <Tooltip content="Tooltip">
    <span>Trigger</span>
  </Tooltip>
)

expectType(<Tooltip content="Tooltip">Trigger</Tooltip>)

// -------------------------------------
// content
// -------------------------------------

expectType(<Tooltip content="Tooltip">Trigger</Tooltip>)

expectError(<Tooltip content={123}>Trigger</Tooltip>)

// -------------------------------------
// color
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" color="gray">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" color="green">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" color="blue">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" color="red">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" color="pink">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" color="amber">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" color="wrong">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" color={{ md: 'blue' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// intent
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" intent="muted">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" intent="tertiary">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" intent="secondary">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" intent="primary">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" intent="inverse">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" intent="neutral">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" intent="wrong">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" intent={{ md: 'inverse' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// maxInlineSize / minInlineSize
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100}>
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" minInlineSize={100} maxInlineSize={300}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" maxInlineSize="300">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize="100">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" maxInlineSize={{ md: 300 }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" minInlineSize={{ md: 100 }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// mode
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" mode="hover">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" mode="click">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" mode="wrong">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" mode={{ md: 'click' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// offset
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" offset="xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" offset="sm">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" offset="md">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" offset="lg">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" offset={10}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" offset={{ md: 'sm' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// padding
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" padding="3xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="2xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="sm">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="md">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="lg">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="xl">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding="20px">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" padding={{ base: '3xs', md: 'xs', lg: 'sm' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" padding={{ wrong: 'xs' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// paddingBlock
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" paddingBlock="3xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingBlock="xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingBlock="sm">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingBlock="20px">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingBlock={{ base: '3xs', md: 'xs' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" paddingBlock={{ wrong: 'xs' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// paddingInline
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" paddingInline="3xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingInline="xs">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingInline="sm">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingInline="20px">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" paddingInline={{ base: '3xs', md: 'xs' }}>
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" paddingInline={{ wrong: 'xs' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// placement
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" placement="top">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="top-start">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="top-end">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="right">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="right-start">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="right-end">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="bottom">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="bottom-start">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="bottom-end">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="left">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="left-start">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" placement="left-end">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" placement="bottom-center">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" placement="center">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" placement={{ md: 'top-start' }}>
    Trigger
  </Tooltip>
)

// -------------------------------------
// variant
// -------------------------------------

expectType(
  <Tooltip content="Tooltip" variant="solid">
    Trigger
  </Tooltip>
)

expectType(
  <Tooltip content="Tooltip" variant="outline">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" variant="soft-outline">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" variant="ghost">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" variant="wrong">
    Trigger
  </Tooltip>
)

expectError(
  <Tooltip content="Tooltip" variant={{ md: 'outline' }}>
    Trigger
  </Tooltip>
)
