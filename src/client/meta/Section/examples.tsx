import { ComponentMeta } from 'client/definitions'
import { Section } from 'lib/components'
import { SectionProps } from 'lib/components/containers/Section/definitions'

const SECTION_EXAMPLES_META: ComponentMeta<SectionProps>['examples'] = [
  {
    description: 'Default section with a heading and body content.',
    jsx: <Section headingText="Default section">Content</Section>,
  },
  {
    description: 'Section in custom size and variant.',
    jsx: (
      <Section size="lg" variant="outline" headingText="Outline section">
        Content
      </Section>
    ),
  },
  {
    description: 'Section in custom size, intent and variant.',
    jsx: (
      <Section size="lg" intent="primary" variant="outline" headingText="Primary intent section">
        Content
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
