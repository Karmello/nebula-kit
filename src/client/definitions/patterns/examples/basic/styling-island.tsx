import { Box, Button, Flex, Spacer, Text } from 'lib/components'

import { Pattern } from '../../definitions'

export const STYLING_ISLAND: Pattern = {
  id: 'styling-island',
  category: 'Basic',
  title: 'Styling island',
  description: 'Components within a styling island resolve against the local **theme** and **brand**.',
  jsx: (
    <Box drawable theme="flipped" brand="red" variant="solid" intent="neutral" padding="lg">
      <Text typography="h4">Styling island</Text>
      <Text intent="primary">Flipped global app theme and red brand.</Text>
      <Spacer />
      <Flex gap="xs" flexWrap="wrap">
        <Button intent="primary">Solid button</Button>
        <Button variant="outline">Outline button</Button>
      </Flex>
    </Box>
  ),
}
