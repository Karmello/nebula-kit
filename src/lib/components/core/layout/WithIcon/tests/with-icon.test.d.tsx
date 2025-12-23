import { expectType, expectError } from 'tsd'

import { WithIcon } from '../'

// children are required
expectError(<WithIcon iconName="check" />)

// wrong name value not allowed
expectError(<WithIcon iconName="xyz">children</WithIcon>)

// right name value allowed
expectType(<WithIcon iconName="check">children</WithIcon>)

// wrong position value not allowed
expectError(
  <WithIcon iconName="check" iconPlacement="center">
    children
  </WithIcon>
)

// right position value allowed
expectType(
  <WithIcon iconName="check" iconPlacement="right">
    children
  </WithIcon>
)

// attrs for <a> not allowed when tag = <span>
expectError(
  <WithIcon iconName="check" tagAttrs={{ href: 'href' }}>
    children
  </WithIcon>
)
