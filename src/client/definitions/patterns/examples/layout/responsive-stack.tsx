import { Box, Flex } from 'lib/components'

import { Pattern } from '../../definitions'

export const RESPONSIVE_STACK: Pattern = {
  id: 'responsive-stack',
  category: 'Layout',
  title: 'Responsive stack',
  description: 'Items stack **vertically** on mobile and align **horizontally** on larger screens.',
  jsx: (
    <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch" gap="xs">
      <Box drawable color="green" variant="outline" intent="primary" padding="lg">
        Box 1
      </Box>
      <Box drawable color="green" variant="outline" intent="primary" padding="lg">
        Box 2
      </Box>
    </Flex>
  ),
}
