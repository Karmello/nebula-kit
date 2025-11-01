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
      <Section size="lg" variant="outline" heading="Outline section">
        Content
      </Section>
    ),
  },
  {
    description: 'Section with custom size, intent and variant.',
    jsx: (
      <Section size="lg" intent="primary" variant="outline" heading="Primary intent section">
        Content
      </Section>
    ),
  },
  {
    description:
      'Renders the section as a hover-responsive surface, useful for areas that should change appearance on hover but not react when clicked.',
    jsx: (
      <Section
        size="lg"
        intent="primary"
        variant="outline"
        heading="Primary intent section"
        interactive
        disableActiveState
      >
        Content
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
