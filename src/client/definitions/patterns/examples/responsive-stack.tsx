import { Box, Flex } from 'lib/components'

import { Pattern } from '../definitions'

export const RESPONSIVE_STACK: Pattern = {
  id: 'responsive-stack',
  category: 'Layout',
  title: 'Responsive stack',
  description: 'Layout direction can adapt across breakpoints while preserving the same component structure.',
  jsx: (
    <Flex
      gap="xs"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      <Box drawable variant="outline" intent="primary" padding="lg">
        Left content
      </Box>
      <Box drawable variant="outline" intent="primary" padding="lg">
        Right content
      </Box>
    </Flex>
  ),
}
