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

// valid background for default theme
expectType(
  <NebkitProvider background="white">
    <div />
  </NebkitProvider>
)

// valid background for dark theme
expectType(
  <NebkitProvider theme="dark" background="black">
    <div />
  </NebkitProvider>
)

// can't set light's theme bg value
expectError(
  <NebkitProvider theme="dark" background="white">
    <div />
  </NebkitProvider>
)
