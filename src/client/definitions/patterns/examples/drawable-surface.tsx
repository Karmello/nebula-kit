import { Box, Text } from 'lib/components'

import { Pattern } from '../definitions'

export const DRAWABLE_SURFACE: Pattern = {
  id: 'drawable-surface',
  category: 'Styling system',
  title: 'Drawable surface',
  description:
    'A Box stays structural by default and only renders visual styling when drawable, variant and intent are provided.',
  jsx: (
    <Box drawable variant="solid" intent="primary" padding="lg">
      <Text typography="h5">Box can act as a visible surface when drawing is enabled.</Text>
    </Box>
  ),
}
