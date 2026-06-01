import { ComponentMeta } from 'client/definitions'

import { Button } from '../../../core/Button'
import { Icon } from '../../../core/Icon'
import { Tooltip } from '../../../pro/Tooltip'
import { type TooltipProps } from '../types'

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
