import { expectType, expectError } from 'tsd'

import { WithIcon } from '../'

// children are required
expectError(<WithIcon name="check" />)

// wrong name value not allowed
expectError(<WithIcon name="xyz">children</WithIcon>)

// right name value allowed
expectType(<WithIcon name="check">children</WithIcon>)

// wrong position value not allowed
expectError(
  <WithIcon name="check" position="center">
    children
  </WithIcon>
)

// right position value allowed
expectType(
  <WithIcon name="check" position="right">
    children
  </WithIcon>
)

// attrs for <a> not allowed when tag = <span>
expectError(
  <WithIcon name="check" tagAttrs={{ href: 'href' }}>
    children
  </WithIcon>
)
