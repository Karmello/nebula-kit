import { Spacer, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const SPACER_EXAMPLES: DocExample[] = [
  {
    description: `Vertical spacing between two text blocks.`,
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer blockSize="48px" />
        <Text>Text 2</Text>
      </>
    ),
  },
]
