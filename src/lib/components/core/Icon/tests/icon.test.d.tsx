import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Icon } from '..'

// name is optional
expectType(<Icon />)

// children allowed for custom SVG icons
expectType(<Icon>children</Icon>)

expectType(
  <Icon>
    <svg />
  </Icon>
)

// valid icon name
expectType(<Icon name="check" />)

// invalid icon name
expectError(<Icon name="xyz" />)

// valid sizes
expectType(<Icon name="check" size="sm" />)
expectType(<Icon name="check" size="md" />)
expectType(<Icon name="check" size="xl" />)
expectType(<Icon name="check" size="160px" />)

// valid intents
expectType(<Icon name="check" intent="neutral" />)
expectType(<Icon name="check" intent="primary" />)
expectType(<Icon name="check" intent="inverse" />)

// invalid intent
expectError(<Icon name="check" intent="xyz" />)

// valid colors
expectType(<Icon name="check" color="gray" />)
expectType(<Icon name="check" color="blue" />)
expectType(<Icon name="check" color="amber" />)

// invalid color
expectError(<Icon name="check" color="purple" />)

// responsive props allowed
expectType(<Icon name={{ base: 'check', md: 'search' }} size={{ base: 'sm', lg: '24px' }} />)

// invalid responsive breakpoint
expectError(<Icon size={{ mobile: 'sm' }} />)

// invalid responsive enum
expectError(<Icon intent={{ base: 'primary', md: 'danger' }} />)

// tagRef typing
expectType(<Icon tagRef={createRef<HTMLSpanElement>()} name="check" />)

// tagAttrs exposed
expectType(
  <Icon
    name="check"
    tagAttrs={{
      id: 'icon',
      className: 'custom-icon',
    }}
  />
)

// hidden Box props must not leak
expectError(<Icon name="check" margin="md" />)
expectError(<Icon name="check" padding="md" />)
expectError(<Icon name="check" variant="solid" />)
expectError(<Icon name="check" interactive />)
expectError(<Icon name="check" gap="md" />)
expectError(<Icon name="check" display="block" />)
expectError(<Icon name="check" inlineSize="100px" />)
expectError(<Icon name="check" blockSize="100px" />)
expectError(<Icon name="check" borderRadius="10px" />)
