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

// wrong value for theme
expectError(
  <NebkitProvider theme="wrong">
    <div />
  </NebkitProvider>
)

// right value for theme
expectType(
  <NebkitProvider theme="dark">
    <div />
  </NebkitProvider>
)
