import { ComponentMeta } from 'client/definitions'
import { Button, Icon, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    description: 'Non-element children are wrapped in a span to serve as the trigger.',
    jsx: <Tooltip content="This is Tooltip's content.">Invalid react element</Tooltip>,
  },
  {
    description: 'React element used as the tooltip trigger.',
    jsx: (
      <Tooltip content="This is Tooltip's content." placement="right-center">
        <Icon name="message-circle-question-mark" size="40px" />
      </Tooltip>
    ),
  },
  {
    description: 'Focusable component used as the tooltip trigger.',
    jsx: (
      <Tooltip content="This is Tooltip's content." placement="bottom-center">
        <Button>Focusable button</Button>
      </Tooltip>
    ),
  },
]

export { TOOLTIP_EXAMPLES_META }
