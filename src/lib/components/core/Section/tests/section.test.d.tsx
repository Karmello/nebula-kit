import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Section } from '../'

// children required
expectError(<Section />)

// heading required
expectError(<Section>Content</Section>)

// valid minimal usage
expectType(<Section heading="Heading">Content</Section>)

// valid tags
expectType(
  <Section heading="Heading" tag="section">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" tag="article">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" tag="aside">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" tag="div">
    Content
  </Section>
)

// invalid tag
expectError(
  <Section heading="Heading" tag="nav">
    Content
  </Section>
)

// valid refs
expectType(
  <Section heading="Heading" tag="section" tagRef={createRef<HTMLElement>()}>
    Content
  </Section>
)

expectType(
  <Section heading="Heading" tag="div" tagRef={createRef<HTMLDivElement>()}>
    Content
  </Section>
)

// obvious invalid refs
expectError(
  <Section heading="Heading" tag="div" tagRef={createRef<HTMLButtonElement>()}>
    Content
  </Section>
)

// valid variants
expectType(
  <Section heading="Heading" variant="ghost">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" variant="outline">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" variant="soft-outline">
    Content
  </Section>
)

// invalid variant
expectError(
  <Section heading="Heading" variant="solid">
    Content
  </Section>
)

// valid sizes
expectType(
  <Section heading="Heading" size="sm">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" size="lg">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" size="2xl">
    Content
  </Section>
)

// invalid size
expectError(
  <Section heading="Heading" size="3xl">
    Content
  </Section>
)

// valid intents
expectType(
  <Section heading="Heading" intent="neutral">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" intent="primary">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" intent="inverse">
    Content
  </Section>
)

// invalid intent
expectError(
  <Section heading="Heading" intent="danger">
    Content
  </Section>
)

// valid headingIntent
expectType(
  <Section heading="Heading" headingIntent="primary">
    Content
  </Section>
)

// invalid headingIntent
expectError(
  <Section heading="Heading" headingIntent="danger">
    Content
  </Section>
)

// valid colors
expectType(
  <Section heading="Heading" color="gray">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" color="blue">
    Content
  </Section>
)

// invalid color
expectError(
  <Section heading="Heading" color="purple">
    Content
  </Section>
)

// interactive exposed
expectType(
  <Section heading="Heading" interactive>
    Content
  </Section>
)

// icon props
expectType(
  <Section heading="Heading" iconName="check">
    Content
  </Section>
)

expectType(
  <Section heading="Heading" iconName="check" iconPlacement="right">
    Content
  </Section>
)

// invalid icon placement
expectError(
  <Section heading="Heading" iconPlacement="top">
    Content
  </Section>
)

// invalid responsive breakpoint
expectError(
  <Section heading="Heading" intent={{ mobile: 'primary' }}>
    Content
  </Section>
)

// invalid responsive enum value
expectError(
  <Section heading="Heading" variant={{ base: 'ghost', md: 'solid' }}>
    Content
  </Section>
)

// non-responsive props
expectError(
  <Section heading="Heading" size={{ base: 'sm', md: 'lg' }}>
    Content
  </Section>
)

expectError(
  <Section heading="Heading" interactive={{ base: true }}>
    Content
  </Section>
)

// tagAttrs exposed
expectType(
  <Section
    heading="Heading"
    tagAttrs={{
      id: 'section',
      className: 'custom-section',
    }}
  >
    Content
  </Section>
)

// hidden Box props must not leak
expectError(
  <Section heading="Heading" padding="md">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" margin="md">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" inlineSize="100px">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" blockSize="100px">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" display="block">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" position="absolute">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" borderRadius="10px">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" gap="md">
    Content
  </Section>
)

expectError(
  <Section heading="Heading" flexDirection="column">
    Content
  </Section>
)

// unknown prop
expectError(
  <Section heading="Heading" unknown="xyz">
    Content
  </Section>
)
