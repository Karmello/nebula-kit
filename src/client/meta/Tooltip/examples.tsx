import { ComponentMeta } from 'client/definitions'
import { Button, Icon, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    description: 'Tooltip using hover mode (default).',
    jsx: (
      <Tooltip content="This tooltip shows on hover." minInlineSize={200} maxInlineSize={300}>
        <Icon name="message-circle-question-mark" size="40px" />
      </Tooltip>
    ),
  },
  {
    description: 'Tooltip using click mode.',
    jsx: (
      <Tooltip content="This tooltip shows on click." minInlineSize={200} maxInlineSize={300} mode="click">
        <Button>Click me</Button>
      </Tooltip>
    ),
  },
]

export { TOOLTIP_EXAMPLES_META }
