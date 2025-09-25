import { ComponentMeta } from 'client/definitions'
import { Section, Text } from 'lib/components'
import { SectionOwnProps } from 'lib/components/containers/Section/definitions'

const SECTION_EXAMPLES_META: ComponentMeta<SectionOwnProps>['examples'] = [
  {
    description: 'Basic section with a heading and body content.',
    jsx: <Section heading="Default heading">Content</Section>,
  },
  {
    description: 'Section with a custom heading component for more control over typography.',
    jsx: <Section heading={<Text typography="h3">Custom heading</Text>}>Content</Section>,
  },
  {
    description: 'Section with an outlined border, primary intent styling, and custom padding.',
    jsx: (
      <Section heading="Bordered section" variant="outline" intent="primary" padding={10}>
        Content
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
