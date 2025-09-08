import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { NativeElem } from '..'

// children not required
expectType(<NativeElem />)

// unknown prop not allowed
expectError(<NativeElem unknown="v" />)

// unknown prop in elemProps not allowed
expectError(<NativeElem elemProps={{ unknown: 'v' }} />)

// data attr in elemProps allowed
expectType(<NativeElem elemProps={{ 'data-testid': 'id' }} />)

// default <div> tag elem props available
expectType(<NativeElem elemProps={{ onClick: () => null }} />)

// proper ref type passed
expectType(<NativeElem elemRef={createRef<HTMLDivElement>()} />)

// wrong ref type for <div> elem passed
expectError(<NativeElem elemRef={createRef<HTMLAnchorElement>()} />)

// <a> tag elem props not available on <div>
expectError(<NativeElem elemProps={{ href: 'href' }} />)

// <a> tag elem props available when elem is <a>
expectType(<NativeElem elem="a" elemProps={{ href: 'href' }} />)

// proper ref type for <a> elem passed
expectType(<NativeElem elem="a" elemRef={createRef<HTMLAnchorElement>()} />)
