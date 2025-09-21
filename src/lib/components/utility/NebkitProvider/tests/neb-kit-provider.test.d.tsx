import { expectType, expectError } from 'tsd'

import { NebkitProvider } from '..'

// children required
expectError(<NebkitProvider />)

// children passed
expectType(
  <NebkitProvider>
    <div />
  </NebkitProvider>
)

// wrong value for defaultTheme
expectError(
  <NebkitProvider defaultTheme="wrong">
    <div />
  </NebkitProvider>
)

// right value for defaultTheme
expectType(
  <NebkitProvider defaultTheme="dark">
    <div />
  </NebkitProvider>
)
