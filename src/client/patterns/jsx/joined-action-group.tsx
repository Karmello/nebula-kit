import { BoxIntent, BoxSurfaceDepth } from 'lib/components/core/Box'
import { JoinedSurface } from 'lib/components/shared'
import { Box, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  const intent: BoxIntent = 'tertiary'
  const surfaceDepth: BoxSurfaceDepth = 'base'

  // const kind = 'filled'
  const kind = 'tinted'

  return (
    <JoinedSurface
      flexDirection="row"
      color="blue"
      bordered
      squared
      //
      bg={kind}
      border={kind}
      surfaceDepth={surfaceDepth}
      intent={intent}
    >
      <Box padding={NEB_LENGTH.px_024}>Box 1</Box>
      <Box padding={NEB_LENGTH.px_024}>Box 2</Box>
      <Box
        padding={NEB_LENGTH.px_024}
        drawable
        intent={intent}
        color="blue"
        surfaceDepth={surfaceDepth}
        bg={kind}
        bgRole="selection"
        borderRadius={NEB_LENGTH.px_000}
      >
        Box 3
      </Box>
    </JoinedSurface>
  )
}
