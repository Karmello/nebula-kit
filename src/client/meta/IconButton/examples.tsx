import { Activity } from 'lucide-react'

import { ComponentMeta } from 'client/definitions'
import { IconButton, IconButtonProps } from 'lib/components'

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
    jsx: <IconButton customSvgIcon={<Activity size="18px" />} />,
    code: `import { Activity } from 'lucide-react'

<IconButton customSvgIcon={<Activity size="18px" />} />`,
  },
]

export { ICON_BUTTON_EXAMPLES_META }
