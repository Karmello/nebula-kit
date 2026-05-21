import { Button, Flex } from 'lib/components'

import { Pattern } from '../definitions'

export const ACTION_ROW: Pattern = {
  id: 'action-row',
  category: 'Layout',
  title: 'Action row',
  description: 'Actions can be aligned and visually prioritized through Flex spacing and explicit button intent.',
  jsx: (
    <Flex justifyContent="flex-end" gap="xs">
      <Button variant="ghost" intent="secondary">
        Cancel
      </Button>
      <Button intent="primary" color="blue">
        Save changes
      </Button>
    </Flex>
  ),
}
