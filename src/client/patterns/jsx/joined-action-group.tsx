import { Box, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  return (
    <Box
      drawable
      variant="outline"
      intent="tertiary"
      brand="blue"
      display="inline-block"
      overflow="hidden"
    >
      <Box
        interactive
        variant="solid"
        intent="secondary"
        padding={NEB_LENGTH.px_016}
        borderRadius={NEB_LENGTH.px_000}
        cursor="pointer"
      >
        Box
      </Box>
    </Box>
  )
}
