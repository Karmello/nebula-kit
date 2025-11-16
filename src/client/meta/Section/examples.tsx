import { ComponentMeta } from 'client/definitions'
import { Section } from 'lib/components'
import { SectionProps } from 'lib/components/containers/Section/definitions'

const SECTION_EXAMPLES_META: ComponentMeta<SectionProps>['examples'] = [
  {
    description: 'Default section with a heading and body content.',
    jsx: <Section heading="Default section">Content</Section>,
  },
  {
    description: 'Section with custom size and variant.',
    jsx: (
      <Section heading="Custom section" size="lg" variant="outline">
        Content
      </Section>
    ),
  },
  {
    description: 'Section with custom color configuration.',
    jsx: (
      <Section
        heading="Custom section"
        size="lg"
        variant="outline"
        color="purple"
        intent="primary"
        borderIntent="tertiary"
      >
        Content
      </Section>
    ),
  },
  {
    description:
      'Section as a hover-responsive surface, useful for areas that should change appearance on hover but not react when clicked.',
    jsx: (
      <Section
        heading="Interactive section"
        size="lg"
        variant="outline"
        color="purple"
        intent="primary"
        borderIntent="tertiary"
        interactive
      >
        Content
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
