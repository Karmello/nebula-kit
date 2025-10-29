import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Animate } from '../'

// children required
expectError(<Animate />)

// children and all required props passed
expectType(
  <Animate property="blockSize" visible={true}>
    children
  </Animate>
)

// optional props passed
expectType(
  <Animate property="blockSize" visible={true} duration={2000}>
    children
  </Animate>
)

// wrong ref type passed
expectError(
  <Animate property="blockSize" visible={true} tagRef={createRef<HTMLAnchorElement>()}>
    children
  </Animate>
)

// valid ref type passed
expectType(
  <Animate property="blockSize" visible={true} tagRef={createRef<HTMLDivElement>()}>
    children
  </Animate>
)
