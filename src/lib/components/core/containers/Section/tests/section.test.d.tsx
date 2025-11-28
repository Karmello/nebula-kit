import { expectType, expectError } from 'tsd'

import { Section } from '../'

// children required
expectError(<Section />)

// heading prop required
expectError(<Section>content</Section>)

// heading passed
expectType(<Section heading="Heading">Content</Section>)

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

// invalid variant passed
expectError(
  <Section heading="Heading" variant="solid">
    Content
  </Section>
)

// valid variants passed
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

// size passed
expectType(
  <Section heading="Heading" size="lg">
    Content
  </Section>
)
