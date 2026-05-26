import { expectType, expectError } from 'tsd'

import { Select } from '../Select'

//
// basic rendering
//

expectType(
  <Select>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// controlled / uncontrolled
//

expectType(
  <Select value="a">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectType(
  <Select defaultValue="a">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectType(
  <Select
    onChange={value => {
      expectType<string>(value)
    }}
  >
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// responsive inherited props
//

expectType(
  <Select color={{ base: 'blue', lg: 'red' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectType(
  <Select intent={{ base: 'primary', lg: 'secondary' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectType(
  <Select inlineSize={{ base: '100%', lg: '400px' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// intentionally NON-responsive props
//

expectError(
  <Select size={{ base: 'sm', lg: 'md' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select dropdownPlacement={{ base: 'top-start' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// enum validation
//

expectError(
  <Select color="purple">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select intent="danger">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectType(
  <Select size="xl">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select dropdownPlacement="left">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// invalid responsive breakpoint keys
//

expectError(
  <Select color={{ mobile: 'blue' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select intent={{ desktop: 'primary' }}>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// hidden primitive leakage
//

expectError(
  <Select margin="md">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select padding="md">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select gap="md">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select flexDirection="column">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select drawable>
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select variant="solid">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

expectError(
  <Select tag="button">
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// root contract
//

expectType(
  <Select
    tagAttrs={{
      id: 'country',
    }}
  >
    <Select.Option value="a">A</Select.Option>
  </Select>
)

//
// option contract
//

expectType(<Select.Option value="a">Option</Select.Option>)

expectType(
  <Select.Option value="a" align={{ base: 'start', lg: 'split' }} iconName={{ base: 'arrow-left', lg: 'arrow-down' }}>
    Option
  </Select.Option>
)

//
// option enum validation
//

expectError(
  <Select.Option align="between" value="a">
    Option
  </Select.Option>
)

expectError(<Select.Option value={123}>Option</Select.Option>)

//
// option hidden primitive leakage
//

expectError(
  <Select.Option margin="md" value="a">
    Option
  </Select.Option>
)

expectError(
  <Select.Option variant="solid" value="a">
    Option
  </Select.Option>
)

expectError(
  <Select.Option typography="h1" value="a">
    Option
  </Select.Option>
)
