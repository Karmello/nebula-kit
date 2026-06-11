import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Loader } from '../Loader'

// no props required
expectType(<Loader />)

// children not allowed
expectError(<Loader>children</Loader>)

// active prop
expectType(<Loader active />)
expectType(<Loader active={false} />)

// centered prop
expectType(<Loader centered />)
expectType(<Loader centered={false} />)

// valid colors
expectType(<Loader color="gray" />)
expectType(<Loader color="green" />)
expectType(<Loader color="blue" />)
expectType(<Loader color="red" />)
expectType(<Loader color="pink" />)
expectType(<Loader color="amber" />)

// invalid color
expectError(<Loader color="purple" />)

// valid sizes
expectType(<Loader size="sm" />)
expectType(<Loader size="md" />)
expectType(<Loader size="lg" />)
expectType(<Loader size="xl" />)
expectType(<Loader size="2xl" />)

// custom CSS size allowed
expectType(<Loader size="120px" />)
expectType(<Loader size="4rem" />)

// responsive color not allowed
expectError(<Loader color={{ base: 'gray', md: 'blue' }} />)

// invalid responsive breakpoint
expectError(<Loader color={{ mobile: 'blue' }} />)

// invalid responsive enum value
expectError(<Loader color={{ base: 'gray', md: 'purple' }} />)

// non-responsive props
expectError(<Loader active={{ base: true }} />)

expectError(<Loader centered={{ base: true }} />)

expectError(<Loader size={{ base: 'sm', md: 'lg' }} />)

// valid ref
expectType(<Loader tagRef={createRef<HTMLDivElement>()} />)

// obvious invalid ref
expectError(<Loader tagRef={createRef<HTMLButtonElement>()} />)

// tagAttrs exposed
expectType(
  <Loader
    tagAttrs={{
      id: 'loader',
      className: 'custom-loader',
    }}
  />
)

// hidden Box props must not leak
expectError(<Loader padding="md" />)
expectError(<Loader margin="md" />)
expectError(<Loader variant="solid" />)
expectError(<Loader intent="primary" />)
expectError(<Loader interactive />)
expectError(<Loader display="block" />)
expectError(<Loader inlineSize="100px" />)
expectError(<Loader blockSize="100px" />)
expectError(<Loader borderRadius="10px" />)
expectError(<Loader gap="md" />)
expectError(<Loader flexDirection="column" />)
expectError(<Loader position="absolute" />)

// unknown prop
expectError(<Loader unknown="xyz" />)
