import { expectError,expectType } from 'tsd'

import { NebkitProvider } from '..'

// children required
expectError(<NebkitProvider />)

// children passed
expectType(
  <NebkitProvider>
    <div />
  </NebkitProvider>
)

// valid themes
expectType(
  <NebkitProvider theme="light">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider theme="dark">
    <div />
  </NebkitProvider>
)

// invalid theme
expectError(
  <NebkitProvider theme="wrong">
    <div />
  </NebkitProvider>
)

// valid brands
expectType(
  <NebkitProvider brand="gray">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider brand="blue">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider brand="amber">
    <div />
  </NebkitProvider>
)

// invalid brand
expectError(
  <NebkitProvider brand="purple">
    <div />
  </NebkitProvider>
)

// valid border radius sizes
expectType(
  <NebkitProvider borderRadiusSize="xs">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider borderRadiusSize="md">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider borderRadiusSize="xl">
    <div />
  </NebkitProvider>
)

// invalid border radius size
expectError(
  <NebkitProvider borderRadiusSize="2xl">
    <div />
  </NebkitProvider>
)

// valid ripple modes
expectType(
  <NebkitProvider rippleMode="off">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider rippleMode="default">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider rippleMode="emphasized">
    <div />
  </NebkitProvider>
)

// invalid ripple mode
expectError(
  <NebkitProvider rippleMode="strong">
    <div />
  </NebkitProvider>
)

// valid saturation values
expectType(
  <NebkitProvider saturation="soft">
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider saturation="vivid">
    <div />
  </NebkitProvider>
)

// invalid saturation
expectError(
  <NebkitProvider saturation="high">
    <div />
  </NebkitProvider>
)

// lockGlobalScroll
expectType(
  <NebkitProvider lockGlobalScroll>
    <div />
  </NebkitProvider>
)

expectType(
  <NebkitProvider lockGlobalScroll={false}>
    <div />
  </NebkitProvider>
)

// non-responsive props
expectError(
  <NebkitProvider theme={{ base: 'light', md: 'dark' }}>
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider brand={{ base: 'gray', md: 'blue' }}>
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider borderRadiusSize={{ base: 'sm', md: 'lg' }}>
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider rippleMode={{ base: 'off', md: 'default' }}>
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider saturation={{ base: 'soft', md: 'vivid' }}>
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider lockGlobalScroll={{ base: true }}>
    <div />
  </NebkitProvider>
)

// removed API regression protection
expectError(
  <NebkitProvider ripple="default">
    <div />
  </NebkitProvider>
)

// hidden component props must not leak
expectError(
  <NebkitProvider color="blue">
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider intent="primary">
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider variant="solid">
    <div />
  </NebkitProvider>
)

expectError(
  <NebkitProvider tagAttrs={{}}>
    <div />
  </NebkitProvider>
)

// unknown prop
expectError(
  <NebkitProvider unknown="xyz">
    <div />
  </NebkitProvider>
)
