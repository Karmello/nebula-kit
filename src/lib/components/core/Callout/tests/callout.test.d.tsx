import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Callout } from '../'

// content required
expectError(<Callout />)

// children not allowed
expectError(<Callout content="Content">children</Callout>)

// valid minimal usage
expectType(<Callout content="Content" />)

// optional heading
expectType(<Callout content="Content" heading="Custom heading" />)

// valid intents
expectType(<Callout content="Content" intent="neutral" />)

expectType(<Callout content="Content" intent="secondary" />)

expectType(<Callout content="Content" intent="inverse" />)

// invalid intent
expectError(<Callout content="Content" intent="danger" />)

// valid sizes
expectType(<Callout content="Content" size="sm" />)

expectType(<Callout content="Content" size="lg" />)

expectType(<Callout content="Content" size="2xl" />)

// invalid size
expectError(<Callout content="Content" size="3xl" />)

// valid status values
expectType(<Callout content="Content" status="info" />)

expectType(<Callout content="Content" status="success" />)

expectType(<Callout content="Content" status="warning" />)

expectType(<Callout content="Content" status="error" />)

// invalid status
expectError(<Callout content="Content" status="danger" />)

// valid variants
expectType(<Callout content="Content" variant="solid" />)

expectType(<Callout content="Content" variant="outline" />)

expectType(<Callout content="Content" variant="soft-outline" />)

// invalid variant
expectError(<Callout content="Content" variant="ghost" />)

// valid tags
expectType(<Callout tag="article" content="Content" />)

expectType(<Callout tag="aside" content="Content" />)

expectType(<Callout tag="div" content="Content" />)

expectType(<Callout tag="section" content="Content" />)

// invalid tags
expectError(<Callout tag="span" content="Content" />)

expectError(<Callout tag="a" content="Content" />)

// valid refs
expectType(<Callout tag="div" tagRef={createRef<HTMLDivElement>()} content="Content" />)

expectType(<Callout tag="section" tagRef={createRef<HTMLElement>()} content="Content" />)

// obvious invalid refs
expectError(<Callout tagRef={createRef<HTMLAnchorElement>()} content="Content" />)

expectError(<Callout tag="div" tagRef={createRef<HTMLButtonElement>()} content="Content" />)

// responsive props
expectType(<Callout content="Content" intent={{ base: 'primary', md: 'secondary' }} />)

expectType(<Callout content="Content" variant={{ base: 'solid', lg: 'outline' }} />)

// invalid responsive breakpoint
expectError(<Callout content="Content" intent={{ mobile: 'primary' }} />)

// invalid responsive enum value
expectError(<Callout content="Content" variant={{ base: 'solid', md: 'ghost' }} />)

// non-responsive props
expectError(<Callout content="Content" size={{ base: 'sm', md: 'lg' }} />)

expectError(<Callout content="Content" status={{ base: 'info', md: 'error' }} />)

// tagAttrs exposed
expectType(
  <Callout
    content="Content"
    tagAttrs={{
      id: 'callout',
      className: 'custom-callout',
    }}
  />
)

// hidden Box props must not leak
expectError(<Callout content="Content" padding="md" />)

expectError(<Callout content="Content" margin="md" />)

expectError(<Callout content="Content" interactive />)

expectError(<Callout content="Content" display="block" />)

expectError(<Callout content="Content" inlineSize="100px" />)

expectError(<Callout content="Content" blockSize="100px" />)

expectError(<Callout content="Content" borderRadius="10px" />)

expectError(<Callout content="Content" gap="md" />)

expectError(<Callout content="Content" flexDirection="column" />)

// unknown prop
expectError(<Callout content="Content" unknown="xyz" />)
