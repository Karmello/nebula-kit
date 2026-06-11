import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Autocomplete } from '../Autocomplete'

//
// basic rendering
//

expectType(
  <Autocomplete>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// controlled / uncontrolled
//

expectType(
  <Autocomplete value="pl">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete defaultValue="pl">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete
    onChange={value => {
      expectType<string>(value)
    }}
  >
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete
    onInputChange={value => {
      expectType<string>(value)
    }}
  >
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// responsive inherited props
//

expectType(
  <Autocomplete color="blue">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete intent="primary">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete inlineSize={{ base: '100%', lg: '400px' }}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// intentionally NON-responsive props
//

expectError(
  <Autocomplete size={{ base: 'sm' }}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete debounceDelay={{ base: 100 }}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// enum validation
//

expectError(
  <Autocomplete color="purple">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete intent="danger">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete size="xl">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// invalid responsive breakpoint keys
//

expectError(
  <Autocomplete color={{ mobile: 'blue' }}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete inlineSize={{ desktop: '400px' }}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// hidden primitive leakage
//

expectError(
  <Autocomplete margin="md">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete padding="md">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete gap="md">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete flexDirection="column">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete drawable>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectError(
  <Autocomplete variant="solid">
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// root contract
//

expectType(
  <Autocomplete
    tagAttrs={{
      id: 'country',
    }}
  >
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

expectType(
  <Autocomplete tagRef={createRef<HTMLDivElement>()}>
    <Autocomplete.Option value="pl" label="Poland">
      Poland
    </Autocomplete.Option>
  </Autocomplete>
)

//
// Autocomplete.Option
//

expectType(
  <Autocomplete.Option value="pl" label="Poland">
    Poland
  </Autocomplete.Option>
)

expectType(
  <Autocomplete.Option value="pl" label="Poland">
    Poland
  </Autocomplete.Option>
)

expectType(
  <Autocomplete.Option value="pl" label="Poland">
    Poland
  </Autocomplete.Option>
)

//
// option enum validation
//

expectError(
  <Autocomplete.Option value="pl" label="Poland" align="between">
    Poland
  </Autocomplete.Option>
)

expectError(
  <Autocomplete.Option value={123} label="Poland">
    Poland
  </Autocomplete.Option>
)

//
// required props
//

expectError(<Autocomplete.Option value="pl">Poland</Autocomplete.Option>)

expectError(<Autocomplete.Option label="Poland">Poland</Autocomplete.Option>)

//
// option hidden primitive leakage
//

expectError(
  <Autocomplete.Option value="pl" label="Poland" margin="md">
    Poland
  </Autocomplete.Option>
)

expectError(
  <Autocomplete.Option value="pl" label="Poland" variant="solid">
    Poland
  </Autocomplete.Option>
)

expectError(
  <Autocomplete.Option value="pl" label="Poland" typography="h1">
    Poland
  </Autocomplete.Option>
)
