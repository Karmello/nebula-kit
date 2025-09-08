import { expectType, expectError } from 'tsd'

import { NebKitProvider } from '../'

// children required
expectError(<NebKitProvider />)

// children passed
expectType(
  <NebKitProvider>
    <div />
  </NebKitProvider>
)

// wrong value for defaultTheme
expectError(
  <NebKitProvider defaultTheme="wrong">
    <div />
  </NebKitProvider>
)

// right value for defaultTheme
expectType(
  <NebKitProvider defaultTheme="dark">
    <div />
  </NebKitProvider>
)
