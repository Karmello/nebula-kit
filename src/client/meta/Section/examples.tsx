import { ComponentMeta } from 'client/definitions'
import { Section, SectionProps } from 'lib/components'

const SECTION_EXAMPLES_META: ComponentMeta<SectionProps>['examples'] = [
  {
    description: 'Default section with a heading and body content.',
    jsx: <Section heading="Section heading">Section content area</Section>,
  },
  {
    description: 'Section with custom size and variant.',
    jsx: (
      <Section heading="Section heading" size="lg" variant="outline">
        Section content area
      </Section>
    ),
  },
  {
    description: 'Section with custom intent configuration.',
    jsx: (
      <Section heading="Section heading" size="lg" variant="outline" intent="primary">
        Section content area
      </Section>
    ),
  },
  {
    description: 'Interactive section.',
    jsx: (
      <Section heading="Section heading" size="lg" variant="outline" intent="primary" interactive>
        Section content area
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
