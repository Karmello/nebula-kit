import { Button, Icon } from 'lib/index.core'
import { Tooltip } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const TOOLTIP_EXAMPLES: DocExample[] = [
  {
    description: 'Tooltip using hover mode (default).',
    jsx: (
      <Tooltip content="This tooltip shows on hover." mode="hover">
        <Icon name="message-circle-question-mark" size="24px" />
      </Tooltip>
    ),
  },
  {
    description: 'Tooltip using click mode.',
    jsx: (
      <Tooltip content="This tooltip shows on click." mode="click">
        <Button>Click me</Button>
      </Tooltip>
    ),
  },
]
