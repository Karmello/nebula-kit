import { expectType, expectError } from 'tsd'

import { Text } from 'lib/components'

import { Section } from '../'

// children required
expectError(<Section />)

// heading props required
expectError(<Section>content</Section>)

// heading as string passed
expectType(<Section heading="Heading">Content</Section>)

// heading as Text passed
expectType(<Section heading={<Text>Heading</Text>}>Content</Section>)

// valid tags passed
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
