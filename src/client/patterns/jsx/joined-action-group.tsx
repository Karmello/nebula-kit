import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { NEB_LENGTH } from 'lib/constants'

export const JoinedActionGroup = () => {
  return (
    <Box drawable bgMode="filled" intent="primary" padding={NEB_LENGTH.px_024}>
      <Text color="amber" intent="tertiary">
        Text
      </Text>
    </Box>
  )
}
