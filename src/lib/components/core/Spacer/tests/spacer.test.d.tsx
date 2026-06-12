import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Spacer } from '..'

// -------------------------------------
// no props required
// -------------------------------------

expectType(<Spacer />)

// -------------------------------------
// children not allowed
// -------------------------------------

expectError(<Spacer>children</Spacer>)

// -------------------------------------
// blockSize
// -------------------------------------

expectType(<Spacer blockSize="8px" />)

expectType(<Spacer blockSize="100px" />)

expectType(<Spacer blockSize={{ md: '48px' }} />)

expectError(<Spacer blockSize={{ wrong: '48px' }} />)

// -------------------------------------
// no polymorphism
// -------------------------------------

expectError(<Spacer tag="span" />)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Spacer tagRef={createRef<HTMLDivElement>()} />)

expectError(<Spacer tagRef={createRef<HTMLSpanElement>()} />)

// -------------------------------------
// tagAttrs
// -------------------------------------

expectType(<Spacer tagAttrs={{ 'data-testid': 'spacer' }} />)

expectError(<Spacer tagAttrs={{ href: '/x' }} />)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(<Spacer margin="10px" />)
expectError(<Spacer padding="10px" />)
expectError(<Spacer variant="solid" />)
expectError(<Spacer interactive />)
