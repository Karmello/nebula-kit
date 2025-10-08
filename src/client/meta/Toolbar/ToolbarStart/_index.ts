import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'

import { TOOLBAR_START_PROPS_META } from './props'

const TOOLBAR_START_META: ComponentMeta<ToolbarStartProps> = {
  overview: {
    name: 'Toolbar.Start?',
    title: 'Defines the start slot of Toolbar.',
    description: [
      'provides a fixed region at the start of the Toolbar layout',
      'remains visible even if the main section is collapsed',
      'commonly used to display a brand label or logo',
    ],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_START_PROPS_META,
}

export { TOOLBAR_START_META }
