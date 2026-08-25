import { Box, NEB_LENGTH, Text } from '@nebula-kit/core'

export const DrawableSurface = () => {
  return (
    <Box drawable color="blue" variant="solid" intent="primary" padding={NEB_LENGTH.px_024}>
      <Text>Drawable Box.</Text>
    </Box>
  )
}
