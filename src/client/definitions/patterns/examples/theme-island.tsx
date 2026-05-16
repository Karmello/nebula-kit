import { Box, Button, Flex, Spacer, Text } from 'lib/components'

import { Pattern } from '../definitions'

export const THEME_ISLAND: Pattern = {
  id: 'theme-island',
  category: 'Styling',
  title: 'Theme island',
  description: 'Nested components resolve against a locally scoped theme without affecting the surrounding interface.',
  jsx: (
    <Box drawable theme="flipped" variant="solid" intent="neutral" padding="lg">
      <Text typography="h4">Theme island</Text>
      <Text intent="primary">Components inside resolve against the local theme.</Text>
      <Spacer />
      <Flex gap="xs">
        <Button intent="primary">Primary action</Button>
        <Button variant="outline">Secondary action</Button>
      </Flex>
    </Box>
  ),
}
