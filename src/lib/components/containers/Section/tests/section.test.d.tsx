import { expectType, expectError } from 'tsd'

import { Section } from '../'

// children required
expectError(<Section />)

// headingText prop required
expectError(<Section>content</Section>)

// headingText passed
expectType(<Section headingText="Heading">Content</Section>)

// valid tags passed
expectType(
  <Section headingText="Heading" tag="section">
    Content
  </Section>
)
expectType(
  <Section headingText="Heading" tag="article">
    Content
  </Section>
)
expectType(
  <Section headingText="Heading" tag="aside">
    Content
  </Section>
)
expectType(
  <Section headingText="Heading" tag="div">
    Content
  </Section>
)

// invalid variant passed
expectError(
  <Section headingText="Heading" variant="solid">
    Content
  </Section>
)

// valid variants passed
expectType(
  <Section headingText="Heading" variant="ghost">
    Content
  </Section>
)
expectType(
  <Section headingText="Heading" variant="outline">
    Content
  </Section>
)

// size passed
expectType(
  <Section headingText="Heading" size="lg">
    Content
  </Section>
)
