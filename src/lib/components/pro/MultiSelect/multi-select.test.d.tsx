import React, { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { MultiSelect } from '../MultiSelect'

expectType<React.JSX.Element>(
  <MultiSelect>
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectType<React.JSX.Element>(
  <MultiSelect
    defaultValue={['one']}
    value={['one', 'two']}
    onChange={value => {
      expectType<string[]>(value)
    }}
  >
    <MultiSelect.Option value="one">One</MultiSelect.Option>
    <MultiSelect.Option value="two">Two</MultiSelect.Option>
  </MultiSelect>
)

expectType<React.JSX.Element>(
  <MultiSelect
    color="blue"
    intent="primary"
    inlineSize="md"
    disabled
    dropdownPlacement="top-start"
    scrollAlign="center"
    size="lg"
    visibleItemsCount={8}
    tagAttrs={{ id: 'multi-select' }}
    tagRef={createRef<HTMLDivElement>()}
  >
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectType<React.JSX.Element>(
  <MultiSelect
    color={{ base: 'gray', md: 'blue' }}
    intent={{ base: 'tertiary', lg: 'primary' }}
    inlineSize={{ base: '100%', md: '2xl' }}
  >
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(<MultiSelect />)
expectError(<MultiSelect defaultValue="one" />)
expectError(<MultiSelect value="one" />)
expectError(<MultiSelect onChange={() => {}} />)

expectError(
  <MultiSelect color="purple">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect intent="danger">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect dropdownPlacement="left-start">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect scrollAlign="top">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectType(
  <MultiSelect size="xl">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect visibleItemsCount="5">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect color={{ tablet: 'blue' }}>
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect intent={{ md: 'danger' }}>
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect inlineSize={{ tablet: 'md' }}>
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect variant="solid">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect gap="md">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect margin="md">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect padding="md">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectError(
  <MultiSelect tag="section">
    <MultiSelect.Option value="one">One</MultiSelect.Option>
  </MultiSelect>
)

expectType<React.JSX.Element>(
  <MultiSelect.Option
    value="one"
    align="split"
    disabled
    iconName="check"
    iconPlacement="right"
    selected
    tagAttrs={{ type: 'button' }}
    tagRef={createRef<HTMLButtonElement>()}
  >
    One
  </MultiSelect.Option>
)

expectType<React.JSX.Element>(
  <MultiSelect.Option value="one" align={{ base: 'start', md: 'split' }} iconName={{ base: 'check', md: 'plug' }}>
    One
  </MultiSelect.Option>
)

expectError(<MultiSelect.Option>One</MultiSelect.Option>)
expectError(<MultiSelect.Option value="one" />)
expectError(<MultiSelect.Option value={1}>One</MultiSelect.Option>)

expectError(
  <MultiSelect.Option value="one" align="left">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" iconPlacement="top">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" align={{ tablet: 'split' }}>
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" selected={{ base: true }}>
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" variant="solid">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" intent="primary">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" color="blue">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" size="md">
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" fullWidth>
    One
  </MultiSelect.Option>
)

expectError(
  <MultiSelect.Option value="one" tag="a">
    One
  </MultiSelect.Option>
)
