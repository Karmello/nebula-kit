import { Box, Text } from '@nebula-kit/core'

import { NEB_LENGTH } from 'lib/components'

export const DrawableSurface = () => {
  return (
    <Box drawable color="blue" variant="solid" intent="primary" padding={NEB_LENGTH.px_024}>
      <Text>Drawable Box.</Text>
    </Box>
  )
}
