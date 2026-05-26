import { ComponentMeta } from 'client/definitions'
import { IconButton, IconButtonProps } from 'lib/components'
import { Activity } from 'lucide-react'

const ICON_BUTTON_EXAMPLES_META: ComponentMeta<IconButtonProps>['examples'] = [
  {
    description: 'Send icon.',
    jsx: <IconButton iconName="send" />,
  },
  {
    description: 'Disabled.',
    jsx: <IconButton iconName="send" disabled />,
  },
  {
    description: 'Loading.',
    jsx: <IconButton iconName="send" loading />,
  },
  {
    description: 'Custon SVG icon.',
    jsx: (
      <IconButton>
        <Activity size="18px" />
      </IconButton>
    ),
    code: `import { Activity } from 'lucide-react'

<IconButton>
  <Activity size="18px" />
</IconButton>`,
  },
]

export { ICON_BUTTON_EXAMPLES_META }
