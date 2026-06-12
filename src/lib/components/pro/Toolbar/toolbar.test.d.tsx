import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Toolbar } from '../Toolbar'

// -------------------------------------
// required slots
// -------------------------------------

expectType(
  <Toolbar>
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectError(<Toolbar />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Toolbar unknown="v" />)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<Toolbar tag="div" />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Toolbar
    tagAttrs={{
      id: 'toolbar',
      onClick: () => null,
    }}
  >
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

// invalid nav attrs
expectError(
  <Toolbar
    tagAttrs={{
      href: '/x',
    }}
  >
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Toolbar tagRef={createRef<HTMLElement>()}>
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

// -------------------------------------
// switchAt
// -------------------------------------

expectType(
  <Toolbar switchAt="sm">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectType(
  <Toolbar switchAt="md">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectType(
  <Toolbar switchAt="lg">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectType(
  <Toolbar switchAt="xl">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectType(
  <Toolbar switchAt="xxl">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

expectError(
  <Toolbar switchAt="base">
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

// non-responsive
expectError(
  <Toolbar switchAt={{ md: 'lg' }}>
    <Toolbar.Start>Start</Toolbar.Start>
    <Toolbar.Main>Main</Toolbar.Main>
    <Toolbar.End>End</Toolbar.End>
  </Toolbar>
)

// -------------------------------------
// render function
// -------------------------------------

expectType(
  <Toolbar>
    {() => (
      <>
        <Toolbar.Start>Start</Toolbar.Start>
        <Toolbar.Main>Main</Toolbar.Main>
        <Toolbar.End>End</Toolbar.End>
      </>
    )}
  </Toolbar>
)

// -------------------------------------
// Toolbar.Start
// -------------------------------------

expectType(<Toolbar.Start>Start</Toolbar.Start>)

expectError(<Toolbar.Start />)

// refs
expectType(<Toolbar.Start tagRef={createRef<HTMLDivElement>()}>Start</Toolbar.Start>)

expectError(<Toolbar.Start tagRef={createRef<HTMLButtonElement>()}>Start</Toolbar.Start>)

// hidden primitive leakage
expectError(<Toolbar.Start gap="24px">Start</Toolbar.Start>)

expectError(<Toolbar.Start flex="1">Start</Toolbar.Start>)

expectError(<Toolbar.Start padding="24px">Start</Toolbar.Start>)

expectError(<Toolbar.Start variant="solid">Start</Toolbar.Start>)

// -------------------------------------
// Toolbar.Main
// -------------------------------------

expectType(<Toolbar.Main>Main</Toolbar.Main>)

expectError(<Toolbar.Main />)

// refs
expectType(<Toolbar.Main tagRef={createRef<HTMLDivElement>()}>Main</Toolbar.Main>)

expectError(<Toolbar.Main tagRef={createRef<HTMLButtonElement>()}>Main</Toolbar.Main>)

// hidden primitive leakage
expectError(<Toolbar.Main gap="24pxmd">Main</Toolbar.Main>)

expectError(<Toolbar.Main flex="1">Main</Toolbar.Main>)

expectError(<Toolbar.Main padding="24px">Main</Toolbar.Main>)

expectError(<Toolbar.Main variant="solid">Main</Toolbar.Main>)

// -------------------------------------
// Toolbar.End
// -------------------------------------

expectType(<Toolbar.End>End</Toolbar.End>)

expectError(<Toolbar.End />)

// refs
expectType(<Toolbar.End tagRef={createRef<HTMLDivElement>()}>End</Toolbar.End>)

expectError(<Toolbar.End tagRef={createRef<HTMLButtonElement>()}>End</Toolbar.End>)

// hidden primitive leakage
expectError(<Toolbar.End gap="24px">End</Toolbar.End>)

expectError(<Toolbar.End flex="1">End</Toolbar.End>)

expectError(<Toolbar.End padding="24px">End</Toolbar.End>)

expectError(<Toolbar.End variant="solid">End</Toolbar.End>)
