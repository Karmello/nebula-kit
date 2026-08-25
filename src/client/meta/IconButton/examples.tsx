import { Activity } from 'lucide-react'

import { IconButton } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const ICON_BUTTON_EXAMPLES: DocExample[] = [
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
    jsx: <IconButton customSvgIcon={<Activity size="17px" />} />,
    code: `import { Activity } from 'lucide-react'

<IconButton customSvgIcon={<Activity size="17px" />} />`,
  },
]
