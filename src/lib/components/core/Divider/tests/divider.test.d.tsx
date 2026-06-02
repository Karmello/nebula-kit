import { createRef } from 'react'
import { expectError,expectType } from 'tsd'

import { Divider } from '..'

// no props required
expectType(<Divider />)

// children not allowed
expectError(<Divider>children</Divider>)

// unknown prop not allowed
expectError(<Divider unknown="xyz" />)

// proper ref passed
expectType(<Divider tagRef={createRef<HTMLHRElement>()} />)

// obvious invalid ref
expectError(<Divider tagRef={createRef<SVGSVGElement>()} />)

// valid intents
expectType(<Divider intent="neutral" />)
expectType(<Divider intent="muted" />)
expectType(<Divider intent="primary" />)
expectType(<Divider intent="inverse" />)

// invalid intent
expectError(<Divider intent="danger" />)

// valid colors
expectType(<Divider color="gray" />)
expectType(<Divider color="blue" />)
expectType(<Divider color="amber" />)

// invalid color
expectError(<Divider color="purple" />)

// responsive props allowed
expectType(
  <Divider
    intent={{ base: 'muted', md: 'primary' }}
    color={{ base: 'gray', lg: 'blue' }}
    marginBlock={{ base: 'xs', md: 'lg' }}
    marginTop={{ base: '5px', xl: '20px' }}
    marginBottom={{ base: 'sm', md: '2rem' }}
  />
)

// invalid breakpoint key
expectError(<Divider intent={{ mobile: 'primary' }} />)

// invalid responsive enum value
expectError(<Divider intent={{ base: 'primary', md: 'danger' }} />)

// exposed Box props
expectType(<Divider elevated />)

// no surface prop
expectError(<Divider surface="hovered" />)
expectError(<Divider surface="selected" />)

// tagAttrs exposed
expectType(
  <Divider
    tagAttrs={{
      id: 'divider',
      className: 'custom-divider',
    }}
  />
)

// removed API regression protection
expectError(<Divider opacity={0.5} />)

// hidden Box props must not leak
expectError(<Divider padding="md" />)
expectError(<Divider margin="md" />)
expectError(<Divider variant="solid" />)
expectError(<Divider interactive />)
expectError(<Divider display="block" />)
expectError(<Divider inlineSize="100px" />)
expectError(<Divider blockSize="5px" />)
expectError(<Divider borderRadius="10px" />)
expectError(<Divider position="absolute" />)
expectError(<Divider gap="md" />)
