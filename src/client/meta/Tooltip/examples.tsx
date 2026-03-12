import { ComponentMeta } from 'client/definitions'
import { Button, Icon, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    description: 'React element used as the tooltip trigger.',
    jsx: (
      <Tooltip content="This is Tooltip's content." placement="right-center" minInlineSize={200} maxInlineSize={300}>
        <Icon name="message-circle-question-mark" size="40px" />
      </Tooltip>
    ),
  },
  {
    description: 'Focusable component used as the tooltip trigger.',
    jsx: (
      <Tooltip content="This is Tooltip's content." placement="bottom-center" minInlineSize={200} maxInlineSize={300}>
        <Button>Focusable button</Button>
      </Tooltip>
    ),
  },
  {
    description: 'Non-element children are wrapped in a span to serve as the trigger.',
    jsx: (
      <Tooltip content="This is Tooltip's content." minInlineSize={200} maxInlineSize={300}>
        Invalid react element
      </Tooltip>
    ),
  },
]

export { TOOLTIP_EXAMPLES_META }
