import { createRef } from 'react'
import { expectError,expectType } from 'tsd'

import { Footer } from '../Footer'

// children required
expectError(<Footer />)

// valid minimal usage
expectType(
  <Footer>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// multiple sections
expectType(
  <Footer>
    <Footer.Section>section 1</Footer.Section>

    <Footer.Section>section 2</Footer.Section>
  </Footer>
)

// valid tags
expectType(
  <Footer tag="div">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectType(
  <Footer tag="footer">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// invalid tag
expectError(
  <Footer tag="section">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// valid borderIntent
expectType(
  <Footer borderIntent="neutral">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectType(
  <Footer borderIntent="primary">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// invalid borderIntent
expectError(
  <Footer borderIntent="danger">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// valid switchAt
expectType(
  <Footer switchAt="sm">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectType(
  <Footer switchAt="lg">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectType(
  <Footer switchAt="xxl">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// invalid switchAt
expectError(
  <Footer switchAt="2xl">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// padding props
expectType(
  <Footer
    padding="20px"
    paddingInline="lg"
    paddingBlock="xl"
    paddingTop="sm"
    paddingRight="md"
    paddingBottom="lg"
    paddingLeft="xl"
  >
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// responsive props
expectType(
  <Footer borderIntent={{ base: 'muted', md: 'primary' }} padding={{ base: 'sm', lg: '40px' }}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// invalid responsive breakpoint
expectError(
  <Footer borderIntent={{ mobile: 'primary' }}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// invalid responsive enum
expectError(
  <Footer borderIntent={{ base: 'muted', md: 'danger' }}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// non-responsive props
expectError(
  <Footer switchAt={{ base: 'sm', md: 'lg' }}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// valid refs
expectType(
  <Footer tag="div" tagRef={createRef<HTMLDivElement>()}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectType(
  <Footer tag="footer" tagRef={createRef<HTMLElement>()}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// obvious invalid refs
expectError(
  <Footer tag="div" tagRef={createRef<HTMLButtonElement>()}>
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// tagAttrs exposed
expectType(
  <Footer
    tagAttrs={{
      id: 'footer',
      className: 'custom-footer',
    }}
  >
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// Footer.Section children required
expectError(<Footer.Section />)

// Footer.Section props
expectType(<Footer.Section flex="1">section</Footer.Section>)

expectType(<Footer.Section alignSelf="center">section</Footer.Section>)

// responsive Footer.Section props
expectType(
  <Footer.Section flex={{ base: '1', md: '3' }} alignSelf={{ base: 'stretch', lg: 'center' }}>
    section
  </Footer.Section>
)

// invalid Footer.Section alignSelf
expectError(<Footer.Section alignSelf="top">section</Footer.Section>)

// invalid Footer.Section responsive breakpoint
expectError(<Footer.Section alignSelf={{ mobile: 'center' }}>section</Footer.Section>)

// invalid Footer.Section responsive enum
expectError(<Footer.Section alignSelf={{ base: 'center', md: 'top' }}>section</Footer.Section>)

// Footer.Section refs
expectType(<Footer.Section tagRef={createRef<HTMLElement>()}>section</Footer.Section>)

// hidden Flex props must not leak
expectError(
  <Footer gap="md">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(
  <Footer flexDirection="row">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(
  <Footer justifyContent="center">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

// hidden Box props must not leak
expectError(
  <Footer margin="md">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(
  <Footer color="blue">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(
  <Footer variant="solid">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(<Footer.Section padding="md">section</Footer.Section>)

expectError(<Footer.Section color="blue">section</Footer.Section>)

expectError(<Footer.Section variant="solid">section</Footer.Section>)

// unknown props
expectError(
  <Footer unknown="xyz">
    <Footer.Section>section</Footer.Section>
  </Footer>
)

expectError(<Footer.Section unknown="xyz">section</Footer.Section>)
