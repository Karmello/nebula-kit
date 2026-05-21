import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { SideNav } from '../SideNav'

// -------------------------------------
// required slots
// -------------------------------------

expectType(
  <SideNav>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav>
    <SideNav.Category label="Category">
      <SideNav.Item href="/a">A</SideNav.Item>
    </SideNav.Category>
  </SideNav>
)

expectError(<SideNav />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <SideNav unknown="v">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(
  <SideNav tag="div">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <SideNav
    tagAttrs={{
      'aria-label': 'Navigation',
      onClick: () => null,
    }}
  >
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// invalid nav attrs
expectError(
  <SideNav
    tagAttrs={{
      href: '/x',
    }}
  >
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <SideNav tagRef={createRef<HTMLElement>()}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// expandMode
// -------------------------------------

expectType(
  <SideNav expandMode="single">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav expandMode="multiple">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav expandMode="wrong">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// non-responsive
expectError(
  <SideNav expandMode={{ md: 'single' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// gap
// -------------------------------------

expectType(
  <SideNav gap="md">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav gap={{ md: 'lg' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav gap={{ wrong: 'md' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// color
// -------------------------------------

expectType(
  <SideNav color="blue">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav color={{ md: 'red' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav color="wrong">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// intent
// -------------------------------------

expectType(
  <SideNav intent="primary">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav intent={{ lg: 'inverse' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav intent="wrong">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// variant
// -------------------------------------

expectType(
  <SideNav variant="solid">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav variant="ghost">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// responsive
expectType(
  <SideNav variant={{ md: 'solid' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav variant="outline">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// size
// -------------------------------------

expectType(
  <SideNav size="2xs">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectType(
  <SideNav size="xl">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

expectError(
  <SideNav size="2xl">
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// non-responsive
expectError(
  <SideNav size={{ md: 'lg' }}>
    <SideNav.Item href="/a">A</SideNav.Item>
  </SideNav>
)

// -------------------------------------
// SideNav.Item
// -------------------------------------

expectType(<SideNav.Item href="/x">Item</SideNav.Item>)

expectError(<SideNav.Item />)

expectError(<SideNav.Item>Item</SideNav.Item>)

// refs
expectType(
  <SideNav.Item href="/x" tagRef={createRef<HTMLAnchorElement>()}>
    Item
  </SideNav.Item>
)

expectError(
  <SideNav.Item href="/x" tagRef={createRef<HTMLDivElement>()}>
    Item
  </SideNav.Item>
)

// align
expectType(
  <SideNav.Item href="/x" align="split">
    Item
  </SideNav.Item>
)

expectType(
  <SideNav.Item href="/x" align={{ md: 'start' }}>
    Item
  </SideNav.Item>
)

expectError(
  <SideNav.Item href="/x" align="wrong">
    Item
  </SideNav.Item>
)

// variant
expectType(
  <SideNav.Item href="/x" variant="solid">
    Item
  </SideNav.Item>
)

expectType(
  <SideNav.Item href="/x" variant={{ md: 'ghost' }}>
    Item
  </SideNav.Item>
)

expectError(
  <SideNav.Item href="/x" variant="outline">
    Item
  </SideNav.Item>
)

// booleans
expectType(
  <SideNav.Item href="/x" bold elevated selected>
    Item
  </SideNav.Item>
)

expectError(
  <SideNav.Item href="/x" bold="true">
    Item
  </SideNav.Item>
)

// callbacks
expectType(
  <SideNav.Item
    href="/x"
    onClick={e => {
      expectType<React.MouseEvent<HTMLAnchorElement>>(e)
    }}
  >
    Item
  </SideNav.Item>
)

// hidden leakage
expectError(
  <SideNav.Item href="/x" gap="md">
    Item
  </SideNav.Item>
)

expectError(
  <SideNav.Item href="/x" padding="md">
    Item
  </SideNav.Item>
)

// -------------------------------------
// SideNav.Category
// -------------------------------------

expectType(
  <SideNav.Category label="Category">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectError(<SideNav.Category />)

expectError(
  <SideNav.Category>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

// refs
expectType(
  <SideNav.Category label="Category" tagRef={createRef<HTMLUListElement>()}>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectError(
  <SideNav.Category label="Category" tagRef={createRef<HTMLDivElement>()}>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

// expanded
expectType(
  <SideNav.Category label="Category" expanded>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectError(
  <SideNav.Category label="Category" expanded="true">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

// align
expectType(
  <SideNav.Category label="Category" align="split">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectType(
  <SideNav.Category label="Category" align={{ md: 'start' }}>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

// variant
expectType(
  <SideNav.Category label="Category" variant="solid">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectType(
  <SideNav.Category label="Category" variant={{ md: 'ghost' }}>
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectError(
  <SideNav.Category label="Category" variant="outline">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

// hidden leakage
expectError(
  <SideNav.Category label="Category" margin="md">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)

expectError(
  <SideNav.Category label="Category" padding="md">
    <SideNav.Item href="/x">Item</SideNav.Item>
  </SideNav.Category>
)
