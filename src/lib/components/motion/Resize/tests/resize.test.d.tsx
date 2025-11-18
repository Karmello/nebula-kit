import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Resize } from '../'

// children required
expectError(<Resize />)

// children and all required props passed
expectType(
  <Resize property="blockSize" visible={true}>
    children
  </Resize>
)

// optional props passed
expectType(
  <Resize property="blockSize" visible={true} duration={2000}>
    children
  </Resize>
)

// wrong ref type passed
expectError(
  <Resize property="blockSize" visible={true} tagRef={createRef<HTMLAnchorElement>()}>
    children
  </Resize>
)

// valid ref type passed
expectType(
  <Resize property="blockSize" visible={true} tagRef={createRef<HTMLDivElement>()}>
    children
  </Resize>
)
