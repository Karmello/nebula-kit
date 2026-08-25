import { Divider, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const DIVIDER_EXAMPLES: DocExample[] = [
  {
    description: 'By default Divider renders with tertiary intent and marginBlock of 3.',
    jsx: <Divider />,
  },
  {
    description: 'Divider with custom color and intent.',
    jsx: <Divider color="blue" intent="primary" />,
  },
  {
    description: 'Divider placed directly under heading.',
    jsx: (
      <>
        <Text typography="h6">Heading</Text>
        <Divider />
      </>
    ),
  },
]
