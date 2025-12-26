import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'

import { TOOLBAR_START_PROPS_META } from './props'

const TOOLBAR_START_META: ComponentMeta<ToolbarStartProps> = {
  overview: {
    name: 'Toolbar.Start?',
    title: 'Defines the start slot of Toolbar.',
    description: [
      'fixed region at the start of the toolbar',
      'remains visible when the main section is collapsed',
      'commonly used for brand, logo or home button',
    ],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_START_PROPS_META,
}

export { TOOLBAR_START_META }
