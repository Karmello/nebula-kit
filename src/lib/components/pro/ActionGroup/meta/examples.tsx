import { Box, Text } from 'lib/index.core'
import { ActionGroup } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const ACTION_GROUP_EXAMPLES: Example[] = [
  {
    description: 'Actions arranged in a horizontal flow.',
    jsx: (
      <ActionGroup>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 1</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 2</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 3</Text>
          </Box>
        </ActionGroup.Item>
      </ActionGroup>
    ),
  },
  {
    description: 'Actions arranged in a horizontal flow and stretched.',
    jsx: (
      <ActionGroup stretch>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 1</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 2</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 3</Text>
          </Box>
        </ActionGroup.Item>
      </ActionGroup>
    ),
  },
  {
    description: 'Actions arranged in a vertical flow.',
    jsx: (
      <ActionGroup direction="column">
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 1</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 2</Text>
          </Box>
        </ActionGroup.Item>
        <ActionGroup.Item>
          <Box margin="16px">
            <Text textAlign="center">Item 3</Text>
          </Box>
        </ActionGroup.Item>
      </ActionGroup>
    ),
  },
]
