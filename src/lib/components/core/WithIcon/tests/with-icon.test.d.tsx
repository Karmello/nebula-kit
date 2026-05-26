import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { WithIcon } from '../'

// -------------------------------------
// children optional
// -------------------------------------

expectType(<WithIcon iconName="check" />)

expectType(<WithIcon iconName="check">children</WithIcon>)

// -------------------------------------
// iconName
// -------------------------------------

expectType(<WithIcon iconName="check">children</WithIcon>)

expectType(<WithIcon iconName={{ md: 'check' }}>children</WithIcon>)

expectError(<WithIcon iconName="xyz">children</WithIcon>)

// -------------------------------------
// iconPlacement
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconPlacement="left">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconPlacement="right">
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" iconPlacement="center">
    children
  </WithIcon>
)

// -------------------------------------
// iconAngle
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconAngle={180}>
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" iconAngle="180">
    children
  </WithIcon>
)

// -------------------------------------
// iconIntent
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconIntent="primary">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconIntent={{ md: 'secondary' }}>
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" iconIntent="wrong">
    children
  </WithIcon>
)

// -------------------------------------
// iconColor
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconColor="blue">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconColor={{ lg: 'red' }}>
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" iconColor="wrong">
    children
  </WithIcon>
)

// -------------------------------------
// iconSize
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconSize="md">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconSize="40px">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconSize={{ md: 'xl' }}>
    children
  </WithIcon>
)

// -------------------------------------
// iconTypography
// -------------------------------------

expectType(
  <WithIcon iconName="check" iconTypography="body">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" iconTypography="h1">
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" iconTypography="wrong">
    children
  </WithIcon>
)

// -------------------------------------
// gap
// -------------------------------------

expectType(
  <WithIcon iconName="check" gap="md">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" gap="20px">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" gap={{ md: 'lg' }}>
    children
  </WithIcon>
)

// -------------------------------------
// justifyContent
// -------------------------------------

expectType(
  <WithIcon iconName="check" justifyContent="center">
    children
  </WithIcon>
)

expectType(
  <WithIcon iconName="check" justifyContent="space-between">
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" justifyContent="wrong">
    children
  </WithIcon>
)

// -------------------------------------
// customSvgIcon
// -------------------------------------

expectType(<WithIcon customSvgIcon={<svg />}>children</WithIcon>)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <WithIcon iconName="check" tagRef={createRef<HTMLSpanElement>()}>
    children
  </WithIcon>
)

// -------------------------------------
// tagAttrs
// -------------------------------------

expectType(
  <WithIcon iconName="check" tagAttrs={{ 'data-testid': 'icon' }}>
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" tagAttrs={{ href: 'href' }}>
    children
  </WithIcon>
)

// -------------------------------------
// root tag locked
// -------------------------------------

expectError(
  <WithIcon iconName="check" tag="div">
    children
  </WithIcon>
)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(
  <WithIcon iconName="check" flexDirection="column">
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" variant="solid">
    children
  </WithIcon>
)

expectError(
  <WithIcon iconName="check" margin="10px">
    children
  </WithIcon>
)
