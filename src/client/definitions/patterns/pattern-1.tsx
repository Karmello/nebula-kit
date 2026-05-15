import { Box, Button, Flex, Spacer, Text } from 'lib/components'

import { Pattern } from './definitions'

export const PATTERN_1: Pattern = {
  id: 'theme-island',
  title: 'Theme island',
  description: '...',
  jsx: (
    <Box drawable theme="flipped" variant="solid" intent="neutral" padding="lg">
      <Text typography="h4">Dark island</Text>
      <Text intent="primary">Components inside resolve against the local theme.</Text>
      <Spacer />
      <Flex gap="xs">
        <Button intent="primary">Primary action</Button>
        <Button variant="outline">Secondary action</Button>
      </Flex>
    </Box>
  ),
}
