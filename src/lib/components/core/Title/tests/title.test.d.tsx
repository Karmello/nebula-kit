import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Title } from '../'

// -------------------------------------
// children optional
// -------------------------------------

expectType(<Title iconName="check" />)

expectType(<Title iconName="check">children</Title>)

// -------------------------------------
// iconName
// -------------------------------------

expectType(<Title iconName="check">children</Title>)

expectType(<Title iconName={{ md: 'check' }}>children</Title>)

expectError(<Title iconName="xyz">children</Title>)

// -------------------------------------
// iconPlacement
// -------------------------------------

expectType(
  <Title iconName="check" iconPlacement="left">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconPlacement="right">
    children
  </Title>
)

expectError(
  <Title iconName="check" iconPlacement="center">
    children
  </Title>
)

// -------------------------------------
// iconAngle
// -------------------------------------

expectType(
  <Title iconName="check" iconAngle={180}>
    children
  </Title>
)

expectError(
  <Title iconName="check" iconAngle="180">
    children
  </Title>
)

// -------------------------------------
// iconIntent
// -------------------------------------

expectType(
  <Title iconName="check" iconIntent="primary">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconIntent={{ md: 'secondary' }}>
    children
  </Title>
)

expectError(
  <Title iconName="check" iconIntent="wrong">
    children
  </Title>
)

// -------------------------------------
// iconColor
// -------------------------------------

expectType(
  <Title iconName="check" iconColor="blue">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconColor={{ lg: 'red' }}>
    children
  </Title>
)

expectError(
  <Title iconName="check" iconColor="wrong">
    children
  </Title>
)

// -------------------------------------
// iconSize
// -------------------------------------

expectType(
  <Title iconName="check" iconSize="md">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconSize="40px">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconSize={{ md: 'xl' }}>
    children
  </Title>
)

// -------------------------------------
// iconTypography
// -------------------------------------

expectType(
  <Title iconName="check" iconTypography="body">
    children
  </Title>
)

expectType(
  <Title iconName="check" iconTypography="h1">
    children
  </Title>
)

expectError(
  <Title iconName="check" iconTypography="wrong">
    children
  </Title>
)

// -------------------------------------
// gap
// -------------------------------------

expectType(
  <Title iconName="check" gap="md">
    children
  </Title>
)

expectType(
  <Title iconName="check" gap="20px">
    children
  </Title>
)

expectType(
  <Title iconName="check" gap={{ md: 'lg' }}>
    children
  </Title>
)

// -------------------------------------
// justifyContent
// -------------------------------------

expectType(
  <Title iconName="check" justifyContent="center">
    children
  </Title>
)

expectType(
  <Title iconName="check" justifyContent="space-between">
    children
  </Title>
)

expectError(
  <Title iconName="check" justifyContent="wrong">
    children
  </Title>
)

// -------------------------------------
// customSvgIcon
// -------------------------------------

expectType(<Title customSvgIcon={<svg />}>children</Title>)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Title iconName="check" tagRef={createRef<HTMLSpanElement>()}>
    children
  </Title>
)

// -------------------------------------
// tagAttrs
// -------------------------------------

expectType(
  <Title iconName="check" tagAttrs={{ 'data-testid': 'icon' }}>
    children
  </Title>
)

expectError(
  <Title iconName="check" tagAttrs={{ href: 'href' }}>
    children
  </Title>
)

// -------------------------------------
// root tag locked
// -------------------------------------

expectError(
  <Title iconName="check" tag="div">
    children
  </Title>
)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(
  <Title iconName="check" flexDirection="column">
    children
  </Title>
)

expectError(
  <Title iconName="check" variant="solid">
    children
  </Title>
)

expectError(
  <Title iconName="check" margin="10px">
    children
  </Title>
)
