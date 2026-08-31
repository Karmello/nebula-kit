import { Box, BoxProps, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  const surfaceDepth: BoxProps['surfaceDepth'] = 'base'
  const intent: BoxProps['intent'] = 'tertiary'

  return (
    <Box
      drawable
      intent={intent}
      surfaceDepth={surfaceDepth}
      border
      borderRole="edge"
      display="inline-flex"
      flexDirection="column"
      borderRadius={NEB_LENGTH.px_000}
    >
      <Box
        tag="button"
        interactive
        bg="filled"
        border
        borderRole="divider"
        borderWidth={NEB_LENGTH.px_000}
        borderBottomWidth={NEB_LENGTH.px_002}
        borderRadius={NEB_LENGTH.px_000}
        intent={intent}
        surfaceDepth={surfaceDepth}
        padding={NEB_LENGTH.px_048}
      >
        Box 1
      </Box>
      <Box
        tag="button"
        interactive
        bg="filled"
        intent={intent}
        surfaceDepth={surfaceDepth}
        padding={NEB_LENGTH.px_048}
        borderRadius={NEB_LENGTH.px_000}
      >
        Box 2
      </Box>
    </Box>
  )
}
