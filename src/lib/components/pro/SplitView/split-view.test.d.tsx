import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { SplitView } from '../SplitView'

// -------------------------------------
// required slots
// -------------------------------------

expectType(
  <SplitView>
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectError(<SplitView />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<SplitView unknown="v" />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <SplitView
    tagAttrs={{
      id: 'split-view',
      onClick: () => null,
    }}
  >
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// invalid div attrs
expectError(
  <SplitView
    tagAttrs={{
      href: '/x',
    }}
  >
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <SplitView tagRef={createRef<HTMLDivElement>()}>
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectError(
  <SplitView tagRef={createRef<HTMLButtonElement>()}>
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// -------------------------------------
// sidePosition
// -------------------------------------

expectType(
  <SplitView sidePosition="left">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectType(
  <SplitView sidePosition="right">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectError(
  <SplitView sidePosition="top">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// non-responsive
expectError(
  <SplitView sidePosition={{ md: 'right' }}>
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// -------------------------------------
// switchAt
// -------------------------------------

expectType(
  <SplitView switchAt="sm">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectType(
  <SplitView switchAt="md">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectType(
  <SplitView switchAt="lg">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectType(
  <SplitView switchAt="xl">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectType(
  <SplitView switchAt="xxl">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

expectError(
  <SplitView switchAt="base">
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// non-responsive
expectError(
  <SplitView switchAt={{ md: 'lg' }}>
    <SplitView.Side>Side</SplitView.Side>
    <SplitView.Main>Main</SplitView.Main>
  </SplitView>
)

// -------------------------------------
// render function
// -------------------------------------

expectType(
  <SplitView>
    {({ mode, setSideOpen }) => {
      expectType<'inline' | 'overlay'>(mode)
      expectType<(open: boolean) => Promise<boolean>>(setSideOpen)

      return (
        <>
          <SplitView.Side>Side</SplitView.Side>
          <SplitView.Main>Main</SplitView.Main>
        </>
      )
    }}
  </SplitView>
)

// -------------------------------------
// SplitView.Side
// -------------------------------------

expectType(<SplitView.Side>Side</SplitView.Side>)

expectError(<SplitView.Side />)

// refs
expectType(<SplitView.Side tagRef={createRef<HTMLElement>()}>Side</SplitView.Side>)

// intent
expectType(<SplitView.Side intent="neutral">Side</SplitView.Side>)
expectType(<SplitView.Side intent="primary">Side</SplitView.Side>)

expectError(<SplitView.Side intent="wrong">Side</SplitView.Side>)

// inlineSize
expectType(<SplitView.Side inlineSize="300px">Side</SplitView.Side>)

expectType(<SplitView.Side inlineSize={{ md: '48px' }}>Side</SplitView.Side>)

// exposed padding props
expectType(
  <SplitView.Side
    padding="24px"
    paddingInline="48px"
    paddingBlock="16px"
    paddingTop="10px"
    paddingRight="10px"
    paddingBottom="10px"
    paddingLeft="10px"
  >
    Side
  </SplitView.Side>
)

// hidden primitive leakage
expectError(<SplitView.Side margin="24px">Side</SplitView.Side>)

expectError(<SplitView.Side gap="24px">Side</SplitView.Side>)

expectError(<SplitView.Side variant="solid">Side</SplitView.Side>)

expectError(<SplitView.Side display="flex">Side</SplitView.Side>)

// -------------------------------------
// SplitView.Main
// -------------------------------------

expectType(<SplitView.Main>Main</SplitView.Main>)

expectError(<SplitView.Main />)

// refs
expectType(<SplitView.Main tagRef={createRef<HTMLElement>()}>Main</SplitView.Main>)

// padding props
expectType(
  <SplitView.Main
    padding="24px"
    paddingInline="48px"
    paddingBlock="16px"
    paddingTop="10px"
    paddingRight="10px"
    paddingBottom="10px"
    paddingLeft="10px"
  >
    Main
  </SplitView.Main>
)

// MainBar slot
expectType(
  <SplitView.Main>
    <SplitView.MainBar>Bar</SplitView.MainBar>
    Main
  </SplitView.Main>
)

// hidden primitive leakage
expectError(<SplitView.Main margin="24px">Main</SplitView.Main>)

expectError(<SplitView.Main gap="24px">Main</SplitView.Main>)

expectError(<SplitView.Main variant="solid">Main</SplitView.Main>)

expectError(<SplitView.Main intent="primary">Main</SplitView.Main>)

// -------------------------------------
// SplitView.MainBar
// -------------------------------------

expectType(<SplitView.MainBar>Bar</SplitView.MainBar>)

expectError(<SplitView.MainBar />)

// refs
expectType(<SplitView.MainBar tagRef={createRef<HTMLDivElement>()}>Bar</SplitView.MainBar>)

expectError(<SplitView.MainBar tagRef={createRef<HTMLButtonElement>()}>Bar</SplitView.MainBar>)

// hidden primitive leakage
expectError(<SplitView.MainBar padding="24px">Bar</SplitView.MainBar>)

expectError(<SplitView.MainBar intent="primary">Bar</SplitView.MainBar>)

expectError(<SplitView.MainBar variant="solid">Bar</SplitView.MainBar>)
