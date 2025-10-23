import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Spacer } from '..'

// no props required
expectType(<Spacer />)

// not allowed to pass children
expectError(<Spacer>children</Spacer>)

// custom blockSize
expectType(<Spacer blockSize={10} />)

// can't change tag
expectError(<Spacer tag="span" />)

// wrong ref passed
expectError(<Spacer tagRef={createRef<HTMLSpanElement>()} />)

// valid ref passed
expectType(<Spacer tagRef={createRef<HTMLDivElement>()} />)
