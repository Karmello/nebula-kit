import { Box, Text } from 'lib/components'

import { Pattern } from '../definitions'

export const CONTENT_CARD: Pattern = {
  id: 'content-card',
  category: 'Composition',
  title: 'Content card',
  description:
    'A simple content block can be composed from Box and Text while keeping surface, spacing and typography decisions explicit.',
  jsx: (
    <Box drawable variant="outline" intent="neutral" padding="lg">
      <Text typography="h4">Content card</Text>
      <Text intent="secondary">Use Box as the surface and Text for readable content structure.</Text>
    </Box>
  ),
}
