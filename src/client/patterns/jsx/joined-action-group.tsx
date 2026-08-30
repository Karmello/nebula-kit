import { Box, BoxProps, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  const intent: BoxProps['intent'] = 'tertiary'
  const surfaceDepth: BoxProps['surfaceDepth'] = 'base'

  return (
    <Box
      drawable
      variant="solid"
      intent={intent}
      surfaceDepth={surfaceDepth}
      surfaceRole="edge"
      display="inline-flex"
      flexDirection="column"
      padding={NEB_LENGTH.px_002}
      borderRadius={NEB_LENGTH.px_000}
    >
      <Box
        drawable
        variant="solid"
        intent={intent}
        surfaceDepth={surfaceDepth}
        padding={NEB_LENGTH.px_048}
        borderRadius={NEB_LENGTH.px_000}
      >
        Box
      </Box>
      <Box
        drawable
        variant="solid"
        intent={intent}
        surfaceDepth={surfaceDepth}
        surfaceRole="divider"
        blockSize={NEB_LENGTH.px_002}
      />
      <Box
        drawable
        variant="solid"
        intent={intent}
        surfaceDepth={surfaceDepth}
        padding={NEB_LENGTH.px_048}
        borderRadius={NEB_LENGTH.px_000}
      >
        Box
      </Box>
    </Box>
  )
}
