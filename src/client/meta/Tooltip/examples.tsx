import { ComponentMeta } from 'client/definitions'
import { Button, Icon, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    description: 'Tooltip using hover mode (default).',
    jsx: (
      <Tooltip content="This tooltip shows on hover." mode="hover">
        <Icon name="message-circle-question-mark" size="40px" />
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

export { TOOLTIP_EXAMPLES_META }
