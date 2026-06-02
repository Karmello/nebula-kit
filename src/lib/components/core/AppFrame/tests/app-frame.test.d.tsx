import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { AppFrame } from '../'

// children required
expectError(<AppFrame />)

// valid minimal usage
expectType(
  <AppFrame>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// footer optional
expectType(
  <AppFrame>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
    <AppFrame.Footer>footer</AppFrame.Footer>
  </AppFrame>
)

// custom tag not allowed
expectError(
  <AppFrame tag="span">
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// stickyHeader allowed
expectType(
  <AppFrame stickyHeader>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// stickyHeader is not responsive
expectError(
  <AppFrame stickyHeader={{ base: true }}>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// AppFrame ref
expectType(
  <AppFrame tagRef={createRef<HTMLDivElement>()}>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(
  <AppFrame tagRef={createRef<HTMLButtonElement>()}>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// AppFrame tagAttrs
expectType(
  <AppFrame
    tagAttrs={{
      id: 'app-frame',
      className: 'custom-app-frame',
    }}
  >
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// Header children required
expectError(<AppFrame.Header />)

// Header props
expectType(
  <AppFrame.Header color="blue" intent="primary">
    header
  </AppFrame.Header>
)

expectType(
  <AppFrame.Header color={{ base: 'gray', md: 'blue' }} intent={{ base: 'muted', lg: 'primary' }}>
    header
  </AppFrame.Header>
)

expectError(<AppFrame.Header color="purple">header</AppFrame.Header>)

expectError(<AppFrame.Header intent="danger">header</AppFrame.Header>)

expectError(<AppFrame.Header intent={{ mobile: 'primary' }}>header</AppFrame.Header>)

expectType(<AppFrame.Header tagRef={createRef<HTMLElement>()}>header</AppFrame.Header>)

// Main children required
expectError(<AppFrame.Main />)

// Main padding props
expectType(<AppFrame.Main padding="10px">main</AppFrame.Main>)

expectType(
  <AppFrame.Main
    padding={{ base: 'sm', md: '20px' }}
    paddingInline="lg"
    paddingBlock="xl"
    paddingTop="3xs"
    paddingRight="2xs"
    paddingBottom="xs"
    paddingLeft="md"
  >
    main
  </AppFrame.Main>
)

expectError(<AppFrame.Main padding={{ mobile: 'md' }}>main</AppFrame.Main>)

expectType(<AppFrame.Main tagRef={createRef<HTMLElement>()}>main</AppFrame.Main>)

// Footer children required
expectError(<AppFrame.Footer />)

// Footer props
expectType(
  <AppFrame.Footer color="blue" intent="primary" padding="lg">
    footer
  </AppFrame.Footer>
)

expectType(
  <AppFrame.Footer
    color={{ base: 'gray', md: 'blue' }}
    intent={{ base: 'muted', lg: 'primary' }}
    padding={{ base: 'sm', lg: '40px' }}
    paddingInline="md"
    paddingBlock="lg"
  >
    footer
  </AppFrame.Footer>
)

expectError(<AppFrame.Footer color="purple">footer</AppFrame.Footer>)

expectError(<AppFrame.Footer intent="danger">footer</AppFrame.Footer>)

expectError(<AppFrame.Footer intent={{ mobile: 'primary' }}>footer</AppFrame.Footer>)

expectType(<AppFrame.Footer tagRef={createRef<HTMLElement>()}>footer</AppFrame.Footer>)

// hidden root Grid/Box props must not leak
expectError(
  <AppFrame gap="md">
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(
  <AppFrame padding="md">
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(
  <AppFrame variant="solid">
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// hidden Main props must not leak
expectError(<AppFrame.Main margin="10px">main</AppFrame.Main>)

expectError(<AppFrame.Main color="blue">main</AppFrame.Main>)

expectError(<AppFrame.Main variant="solid">main</AppFrame.Main>)

expectError(<AppFrame.Main gap="md">main</AppFrame.Main>)

// removed API regression protection
expectError(
  <AppFrame borderIntent="primary">
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// unknown props
expectError(
  <AppFrame x={100}>
    <AppFrame.Header>header</AppFrame.Header>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(<AppFrame.Header unknown="xyz">header</AppFrame.Header>)

expectError(<AppFrame.Main unknown="xyz">main</AppFrame.Main>)

expectError(<AppFrame.Footer unknown="xyz">footer</AppFrame.Footer>)
