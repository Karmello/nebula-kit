import { Box } from 'lib/components'
import { Floating } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const FLOATING_EXAMPLES: Example[] = [
  {
    jsx: (
      <Floating offset={10}>
        <Floating.Trigger>
          <Box drawable variant="solid" intent="primary" padding="16px">
            Trigger
          </Box>
        </Floating.Trigger>
        <Floating.Content>
          <Box drawable variant="solid" intent="primary" padding="16px">
            Content
          </Box>
        </Floating.Content>
      </Floating>
    ),
  },
]
