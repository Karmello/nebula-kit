import { ComponentMeta } from 'client/definitions'
import { Button, Text, Tooltip, TooltipProps } from 'lib/components'

const TOOLTIP_EXAMPLES_META: ComponentMeta<TooltipProps>['examples'] = [
  {
    jsx: (
      <Tooltip content="Tooltip content" placement="top-center" blockSize="100px" inlineSize="250px">
        <Button>Button</Button>
      </Tooltip>
    ),
  },
]

export { TOOLTIP_EXAMPLES_META }
