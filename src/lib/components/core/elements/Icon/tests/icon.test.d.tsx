import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Icon } from '../'

// children not required
expectType(<Icon />)

// children allowed
expectType(<Icon>children</Icon>)

// wrong name value not allowed
expectError(<Icon name="xyz" />)

// right name value allowed
expectType(<Icon name="check" />)

// right size allowed
expectType(<Icon name="check" size="160px" />)

// wrong intent not allowed
expectError(<Icon name="check" size="10px" intent="xyz" />)

// right iconIntent allowed
expectType(<Icon name="check" size="10px" intent="primary" />)

// passing ref
expectType(<Icon tagRef={createRef<HTMLSpanElement>()} name="check" />)
