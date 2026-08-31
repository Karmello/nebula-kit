import { Box } from 'lib/components'
import { Floating } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const FLOATING_EXAMPLES: DocExample[] = [
  {
    jsx: (
      <Floating offset={10}>
        <Floating.Trigger>
          <Box drawable bg="filled" intent="primary" padding="16px">
            Trigger
          </Box>
        </Floating.Trigger>
        <Floating.Content>
          <Box drawable bg="filled" intent="primary" padding="16px">
            Content
          </Box>
        </Floating.Content>
      </Floating>
    ),
  },
]
