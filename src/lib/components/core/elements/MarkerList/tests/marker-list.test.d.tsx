import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { MarkerList } from '../'

// children are required
expectError(<MarkerList />)

// children passed
expectType(<MarkerList>children</MarkerList>)

// wrong tag
expectError(<MarkerList tag="div">children</MarkerList>)

// valid tag
expectType(<MarkerList tag="ul">children</MarkerList>)

// valid tag
expectType(<MarkerList tag="ol">children</MarkerList>)

// wrong ref type
expectError(
  <MarkerList tag="ul" tagRef={createRef<HTMLDivElement>()}>
    children
  </MarkerList>
)

// valid ref type
expectType(
  <MarkerList tag="ul" tagRef={createRef<HTMLUListElement>()}>
    children
  </MarkerList>
)

// rowGap prop
expectType(<MarkerList gap="5px">children</MarkerList>)

// unknown prop
expectError(<MarkerList unknown="xyz">children</MarkerList>)
