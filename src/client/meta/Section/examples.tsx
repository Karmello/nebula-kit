import { ComponentMeta } from 'client/definitions'
import { Section, Text } from 'lib/components'
import { SectionProps } from 'lib/components/containers/Section/definitions'

const SECTION_EXAMPLES_META: ComponentMeta<SectionProps>['examples'] = [
  {
    description: 'Basic section with a heading and body content.',
    jsx: <Section heading="Default heading">Content</Section>,
  },
  {
    description: 'Section with a custom heading component for more control over typography.',
    jsx: <Section heading={<Text typography="h3">Custom heading</Text>}>Content</Section>,
  },
  {
    description: 'Section fully customized.',
    jsx: (
      <Section
        heading={
          <Text typography="h3" intent="primary">
            Custom heading
          </Text>
        }
        variant="outline"
        intent="secondary"
        padding={10}
      >
        <Text intent="neutral">Content</Text>
      </Section>
    ),
  },
]

export { SECTION_EXAMPLES_META }
