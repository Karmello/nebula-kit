import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Icon } from '../'

// some props required
expectError(<Icon />)

// children not allowed
expectError(<Icon>children</Icon>)

// wrong name value not allowed
expectError(<Icon name="xyz" />)

// right name value allowed
expectType(<Icon name="check" />)

// wrong size not allowed
expectError(<Icon name="check" size={161} />)

// right size allowed
expectType(<Icon name="check" size={160} />)

// wrong intent not allowed
expectError(<Icon name="check" size={10} intent="xyz" />)

// right iconIntent allowed
expectType(<Icon name="check" size={10} intent="primary" />)

// passing ref
expectType(<Icon tagRef={createRef<HTMLSpanElement>()} name="check" />)
