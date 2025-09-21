import { ComponentMeta } from 'client/definitions'
import { Section, Text } from 'lib/components'
import { SectionOwnProps } from 'lib/components/containers/Section/definitions'

export default [
  {
    description: 'A basic section with a text heading and body content.',
    jsx: <Section heading="Default heading">Content</Section>,
  },
  {
    description: 'Renders a section with a custom heading component for more control over typography.',
    jsx: <Section heading={<Text typography="h3">Custom heading</Text>}>Content</Section>,
  },
  {
    description: 'Renders a section with an outlined border, primary intent styling, and custom padding.',
    jsx: (
      <Section heading="Bordered section" variant="outline" intent="primary" padding={10}>
        Content
      </Section>
    ),
  },
] as ComponentMeta<SectionOwnProps>['examples']
