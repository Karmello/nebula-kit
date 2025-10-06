import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Callout } from '../'

// content prop required
expectError(<Callout />)

// children not allowed
expectError(<Callout content="Content">children</Callout>)

// valid props
expectType(<Callout content="Content" />)
expectType(<Callout content="Content" heading="Custom heading" />)
expectType(<Callout content="Content" intent="danger" />)
expectType(<Callout content="Content" size="lg" />)

// valid tags
expectType(<Callout tag="article" content="Content" />)
expectType(<Callout tag="aside" content="Content" />)
expectType(<Callout tag="div" content="Content" />)
expectType(<Callout tag="section" content="Content" />)

// invalid tags
expectError(<Callout tag="span" content="Content" />)
expectError(<Callout tag="a" content="Content" />)

// valid ref type
expectType(<Callout tagRef={createRef<HTMLDivElement>()} content="Content" />)

// invalid ref type
expectError(<Callout tagRef={createRef<HTMLAnchorElement>()} content="Content" />)
