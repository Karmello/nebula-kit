import { expectError, expectType } from 'tsd'

import { Input, InputAffixProps } from '../Input'

//
// basic rendering
//

expectType(<Input />)

//
// controlled / uncontrolled
//

expectType(<Input value="hello" />)

expectType(<Input defaultValue="hello" />)

expectType(
  <Input
    onChange={value => {
      expectType<string>(value)
    }}
  />
)

//
// event handlers
//

expectType(
  <Input
    onFocus={e => {
      expectType<React.FocusEvent<HTMLInputElement>>(e)
    }}
  />
)

expectType(
  <Input
    onBlur={e => {
      expectType<React.FocusEvent<HTMLInputElement>>(e)
    }}
  />
)

//
// intentionally NON-responsive props
//

expectError(<Input size={{ base: 'sm', lg: 'md' }} />)

expectError(<Input maxLength={{ base: 10 }} />)

//
// enum validation
//

expectError(<Input color="purple" />)

expectError(<Input intent="danger" />)

expectError(<Input variant="banana" />)

expectType(<Input size="xl" />)

//
// invalid responsive breakpoint keys
//

expectError(<Input color={{ mobile: 'blue' }} />)

expectError(<Input variant={{ desktop: 'outline' }} />)

//
// affix render functions
//

expectType(
  <Input
    startAffix={props => {
      expectType<InputAffixProps>(props)

      return null
    }}
  />
)

expectType(
  <Input
    endAffix={props => {
      expectType<InputAffixProps>(props)

      return null
    }}
  />
)

//
// hidden primitive leakage
//

expectError(<Input margin="md" />)

expectError(<Input padding="md" />)

expectError(<Input gap="md" />)

expectError(<Input flexDirection="column" />)

expectError(<Input drawable />)

expectError(<Input interactive />)

expectError(<Input typography="h1" />)

expectError(<Input tag="textarea" />)

//
// root contract
//

expectType(
  <Input
    tagAttrs={{
      id: 'email',
      autoComplete: 'email',
    }}
  />
)
