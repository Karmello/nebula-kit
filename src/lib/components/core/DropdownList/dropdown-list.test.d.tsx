import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { DropdownList } from '../DropdownList'

// children required
expectError(<DropdownList />)

// valid minimal usage
expectType(
  <DropdownList>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid list props
expectType(
  <DropdownList disableListAnimation keepOpen openOnFocus noOptionsLabel="No options" scrollToIndex={5} visibleItemsCount={10}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid intents
expectType(
  <DropdownList intent="neutral">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList intent="primary">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid intent
expectError(
  <DropdownList intent="danger">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid colors
expectType(
  <DropdownList color="gray">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList color="blue">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid color
expectError(
  <DropdownList color="purple">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid placements
expectType(
  <DropdownList placement="bottom-start">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList placement="top-center">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList placement="top-end">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid placement
expectError(
  <DropdownList placement="center">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid scrollAlign
expectType(
  <DropdownList scrollAlign="start">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList scrollAlign="center">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList scrollAlign="end">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid scrollAlign
expectError(
  <DropdownList scrollAlign="top">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid itemBlockSize
expectType(
  <DropdownList itemBlockSize={20}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectType(
  <DropdownList itemBlockSize={50}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid itemBlockSize
expectError(
  <DropdownList itemBlockSize="xl">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// responsive props
expectType(
  <DropdownList color={{ base: 'gray', md: 'blue' }} intent={{ base: 'muted', lg: 'primary' }}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid responsive breakpoint
expectError(
  <DropdownList color={{ mobile: 'blue' }}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid responsive enum value
expectError(
  <DropdownList intent={{ base: 'primary', md: 'danger' }}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// non-responsive props
expectError(
  <DropdownList placement={{ base: 'bottom-start', md: 'top-start' }}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectError(
  <DropdownList size={{ base: 'xs', md: 'lg' }}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// callbacks
expectType(
  <DropdownList onOpened={() => {}} onClosed={() => {}}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid callback
expectError(
  <DropdownList onOpened="open">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// valid tagRef
expectType(
  <DropdownList tagRef={createRef<HTMLDivElement>()}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// invalid tagRef
expectError(
  <DropdownList tagRef={createRef<HTMLButtonElement>()}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// tagAttrs exposed
expectType(
  <DropdownList
    tagAttrs={{
      id: 'dropdown',
      className: 'custom-dropdown',
    }}
  >
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// trigger children required
expectError(<DropdownList.Trigger />)

// trigger props
expectType(<DropdownList.Trigger disabled>Trigger</DropdownList.Trigger>)

expectType(<DropdownList.Trigger inlineSize="200px">Trigger</DropdownList.Trigger>)

// responsive trigger inlineSize allowed
expectType(<DropdownList.Trigger inlineSize={{ base: '100%', md: '300px' }}>Trigger</DropdownList.Trigger>)

// invalid trigger props
expectError(<DropdownList.Trigger intent="primary">Trigger</DropdownList.Trigger>)

expectError(<DropdownList.Trigger gap="md">Trigger</DropdownList.Trigger>)

// item children required
expectError(<DropdownList.Item />)

// item props
expectType(<DropdownList.Item>Item</DropdownList.Item>)

expectType(
  <DropdownList.Item disabled selected bold iconName="check" iconPlacement="right" align="split">
    Item
  </DropdownList.Item>
)

// valid item tags
expectType(<DropdownList.Item tag="button">Item</DropdownList.Item>)

expectType(
  <DropdownList.Item
    tag="a"
    tagAttrs={{
      href: '/docs',
    }}
  >
    Item
  </DropdownList.Item>
)

// invalid item tag
expectError(<DropdownList.Item tag="div">Item</DropdownList.Item>)

// invalid item align
expectError(<DropdownList.Item align="between">Item</DropdownList.Item>)

// invalid item iconPlacement
expectError(<DropdownList.Item iconPlacement="top">Item</DropdownList.Item>)

// responsive item props
expectType(
  <DropdownList.Item align={{ base: 'start', md: 'split' }} iconName={{ base: 'check', md: 'search' }}>
    Item
  </DropdownList.Item>
)

// invalid responsive item breakpoint
expectError(<DropdownList.Item align={{ mobile: 'start' }}>Item</DropdownList.Item>)

// invalid responsive item enum
expectError(<DropdownList.Item align={{ base: 'start', md: 'between' }}>Item</DropdownList.Item>)

// valid item refs
expectType(
  <DropdownList.Item tag="button" tagRef={createRef<HTMLButtonElement>()}>
    Item
  </DropdownList.Item>
)

expectType(
  <DropdownList.Item tag="a" tagRef={createRef<HTMLAnchorElement>()}>
    Item
  </DropdownList.Item>
)

// obvious invalid item refs
expectError(
  <DropdownList.Item tag="button" tagRef={createRef<HTMLDivElement>()}>
    Item
  </DropdownList.Item>
)

// hidden Button props must not leak
expectError(<DropdownList.Item variant="solid">Item</DropdownList.Item>)

expectError(<DropdownList.Item intent="primary">Item</DropdownList.Item>)

expectError(<DropdownList.Item size="lg">Item</DropdownList.Item>)

expectError(<DropdownList.Item fullWidth>Item</DropdownList.Item>)

// removed API regression protection
expectError(
  <DropdownList itemBorderIntent="primary">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectError(
  <DropdownList animationDuration={300}>
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

// unknown props
expectError(
  <DropdownList unknown="xyz">
    <DropdownList.Trigger>Trigger</DropdownList.Trigger>

    <DropdownList.Item>Item</DropdownList.Item>
  </DropdownList>
)

expectError(<DropdownList.Trigger unknown="xyz">Trigger</DropdownList.Trigger>)

expectError(<DropdownList.Item unknown="xyz">Item</DropdownList.Item>)
