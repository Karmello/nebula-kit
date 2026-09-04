import { HorizontalRule, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const HORIZONTAL_RULE_EXAMPLES: DocExample[] = [
  {
    description: 'By default HorizontalRule renders with tertiary intent and marginBlock of 3.',
    jsx: <HorizontalRule />,
  },
  {
    description: 'HorizontalRule with custom color and intent.',
    jsx: <HorizontalRule color="blue" intent="primary" />,
  },
  {
    description: 'HorizontalRule placed directly under heading.',
    jsx: (
      <>
        <Text typography="h6">Heading</Text>
        <HorizontalRule />
      </>
    ),
  },
]
