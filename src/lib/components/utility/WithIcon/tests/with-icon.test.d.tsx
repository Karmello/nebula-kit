import { expectType, expectError } from 'tsd'

import { WithIcon } from '../'

// some props are required
expectError(<WithIcon />)

// wrong iconName value not allowed
expectError(<WithIcon iconName="xyz" />)

// right iconName value allowed
expectType(<WithIcon iconName="check" />)

// passing children along with icon
expectType(<WithIcon iconName="check">children</WithIcon>)

// wrong iconPosition value not allowed
expectError(
  <WithIcon iconName="check" iconPosition="center">
    children
  </WithIcon>
)

// right iconPosition value allowed
expectType(
  <WithIcon iconName="check" iconPosition="right">
    children
  </WithIcon>
)

// attrs for <a> not allowed when elem = <span>
expectError(
  <WithIcon iconName="check" elemProps={{ href: 'href' }}>
    children
  </WithIcon>
)
