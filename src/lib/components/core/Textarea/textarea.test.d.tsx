import { expectError,expectType } from 'tsd'

import { Textarea } from '../Textarea'

//
// basic rendering
//

expectType(<Textarea />)

//
// controlled / uncontrolled
//

expectType(<Textarea value="hello" />)

expectType(<Textarea defaultValue="hello" />)

expectType(
  <Textarea
    onChange={value => {
      expectType<string>(value)
    }}
  />
)

//
// event handlers
//

expectType(
  <Textarea
    onFocus={e => {
      expectType<React.FocusEvent<HTMLTextAreaElement>>(e)
    }}
  />
)

expectType(
  <Textarea
    onBlur={e => {
      expectType<React.FocusEvent<HTMLTextAreaElement>>(e)
    }}
  />
)

//
// responsive inherited props
//

expectType(<Textarea color={{ base: 'blue', lg: 'red' }} />)

expectType(<Textarea intent={{ base: 'primary', lg: 'secondary' }} />)

expectType(<Textarea variant={{ base: 'ghost', lg: 'outline' }} />)

expectType(<Textarea inlineSize={{ base: '100%', lg: '600px' }} />)

//
// intentionally NON-responsive props
//

expectError(<Textarea rows={{ base: 5 }} />)

expectError(<Textarea resize={{ base: 'vertical' }} />)

expectError(<Textarea maxLength={{ base: 100 }} />)

//
// enum validation
//

expectError(<Textarea color="purple" />)

expectError(<Textarea intent="danger" />)

expectError(<Textarea variant="banana" />)

expectError(<Textarea resize="diagonal" />)

//
// invalid responsive breakpoint keys
//

expectError(<Textarea color={{ mobile: 'blue' }} />)

expectError(<Textarea variant={{ desktop: 'outline' }} />)

//
// hidden primitive leakage
//

expectError(<Textarea margin="md" />)

expectError(<Textarea padding="md" />)

expectError(<Textarea gap="md" />)

expectError(<Textarea flexDirection="column" />)

expectError(<Textarea drawable />)

expectError(<Textarea interactive />)

expectError(<Textarea typography="h1" />)

expectError(<Textarea tag="div" />)

//
// root contract
//

expectType(
  <Textarea
    tagAttrs={{
      id: 'bio',
      spellCheck: true,
    }}
  />
)
