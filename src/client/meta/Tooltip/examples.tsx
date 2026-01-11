import { ComponentMeta } from 'client/definitions'
import { Icon, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    jsx: (
      <Tooltip content="This is Tooltip's content.">
        <Icon name="message-circle-question-mark" size="40px" />
      </Tooltip>
    ),
  },
]

export { TOOLTIP_EXAMPLES_META }
