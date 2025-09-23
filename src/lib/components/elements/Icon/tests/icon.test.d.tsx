import { expectType, expectError } from 'tsd'

import { Icon } from '../'
import { createRef } from 'react'

// some props required
expectError(<Icon />)

// children not allowed
expectError(<Icon>children</Icon>)

// wrong name value not allowed
expectError(<Icon name="xyz" />)

// right name value allowed
expectType(<Icon name="check" />)

// wrong size not allowed
expectError(<Icon name="check" size={81} />)

// right size allowed
expectType(<Icon name="check" size={80} />)

// wrong intent not allowed
expectError(<Icon name="check" size={10} intent="xyz" />)

// right iconIntent allowed
expectType(<Icon name="check" size={10} intent="primary" />)

// passing ref
expectType(<Icon tagRef={createRef<SVGSVGElement>()} name="check" />)
