import { expectError, expectType } from 'tsd'

import { Checkbox } from '../Checkbox'

//
// basic rendering
//

expectType(<Checkbox />)

//
// controlled / uncontrolled
//

expectType(<Checkbox checked />)
expectType(<Checkbox checked={false} />)

expectType(<Checkbox defaultChecked />)
expectType(<Checkbox defaultChecked={false} />)

expectType(
  <Checkbox
    onChange={checked => {
      expectType<boolean>(checked)
    }}
  />
)

//
// responsive inherited props
//

expectType(<Checkbox color={{ base: 'blue', lg: 'red' }} />)

expectType(<Checkbox intent={{ base: 'primary', lg: 'secondary' }} />)

expectType(<Checkbox variant={{ base: 'outline', lg: 'solid' }} />)

//
// enum validation
//

expectError(<Checkbox color="purple" />)

expectError(<Checkbox intent="danger" />)

expectError(<Checkbox variant="ghost" />)

expectError(<Checkbox size="xl" />)

//
// invalid responsive breakpoint keys
//

expectError(<Checkbox color={{ mobile: 'blue' }} />)

expectError(<Checkbox intent={{ tablet: 'primary' }} />)

expectError(<Checkbox variant={{ desktop: 'solid' }} />)

//
// hidden primitive leakage
//

expectError(<Checkbox margin="md" />)

expectError(<Checkbox padding="md" />)

expectError(<Checkbox gap="md" />)

expectError(<Checkbox flexDirection="column" />)

expectError(<Checkbox drawable />)

expectError(<Checkbox interactive />)

expectError(<Checkbox tag="button" />)

expectError(<Checkbox typography="h1" />)

//
// root contract
//

expectType(
  <Checkbox
    tagAttrs={{
      id: 'terms',
      className: 'custom',
    }}
  />
)
