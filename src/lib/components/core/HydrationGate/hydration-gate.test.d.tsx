import { expectError,expectType } from 'tsd'

import { HydrationGate } from '../HydrationGate'

// children required
expectError(<HydrationGate />)

// valid minimal usage
expectType(
  <HydrationGate>
    <div />
  </HydrationGate>
)

// minDelay allowed
expectType(
  <HydrationGate minDelay={0}>
    <div />
  </HydrationGate>
)

expectType(
  <HydrationGate minDelay={300}>
    <div />
  </HydrationGate>
)

// invalid minDelay
expectError(
  <HydrationGate minDelay="300">
    <div />
  </HydrationGate>
)

// minDelay is not responsive
expectError(
  <HydrationGate minDelay={{ base: 100 }}>
    <div />
  </HydrationGate>
)

// hidden Box props must not leak
expectError(
  <HydrationGate padding="md">
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate margin="md">
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate variant="solid">
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate intent="primary">
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate tag="div">
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate tagAttrs={{}}>
    <div />
  </HydrationGate>
)

expectError(
  <HydrationGate tagRef={null}>
    <div />
  </HydrationGate>
)

// unknown prop
expectError(
  <HydrationGate unknown="xyz">
    <div />
  </HydrationGate>
)
