import { JoinedSurface } from 'lib/components/shared'
import { Box, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  return (
    <JoinedSurface
      flexDirection="row"
      bg="transparent"
      border="tinted"
      color="blue"
      surfaceDepth="base"
      intent="tertiary"
      bordered
      squared
    >
      <Box padding={NEB_LENGTH.px_024}>Box 1</Box>
      <Box padding={NEB_LENGTH.px_024}>Box 2</Box>
      <Box padding={NEB_LENGTH.px_024}>Box 3</Box>
    </JoinedSurface>
  )
}
