import { Box, Text } from 'lib/components'

import { Pattern } from '../../definitions'

export const DRAWABLE_SURFACE: Pattern = {
  id: 'drawable-surface',
  category: 'Basic',
  title: 'Drawable surface',
  description: 'Box turns into a drawable surface when **drawable**, **variant** and **intent** props are provided.',
  jsx: (
    <Box drawable color="blue" variant="solid" intent="primary" padding="md">
      <Text>Drawable Box.</Text>
    </Box>
  ),
}
