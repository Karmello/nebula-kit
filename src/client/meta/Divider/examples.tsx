import { ComponentMeta } from 'client/definitions'
import { Divider, Text } from 'lib/components'
import { DividerOwnProps } from 'lib/components/elements/Divider/definitions'

export default [
  {
    description:
      'By default, renders a horizontal line with standard thickness (scale 1) and tertiary intent.',
    jsx: <Divider />,
  },
  {
    description: 'Renders a horizontal line with thickness set to scale 3 and primary intent.',
    jsx: <Divider thickness={3} intent="primary" />,
  },
  {
    description:
      'A divider placed directly under a heading to visually separate the title from the content that follows.',
    jsx: (
      <>
        <Text typography="h6">Heading</Text>
        <Divider />
      </>
    ),
  },
] as ComponentMeta<DividerOwnProps>['examples']
