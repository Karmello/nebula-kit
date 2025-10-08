import { ComponentMeta } from 'client/definitions'
import { ToolbarEndProps } from 'lib/components'

import { TOOLBAR_END_PROPS_META } from './props'

const TOOLBAR_END_META: ComponentMeta<ToolbarEndProps> = {
  overview: {
    name: 'Toolbar.End?',
    title: 'Defines the end slot of Toolbar.',
    description: [
      'provides a fixed region at the end of the Toolbar layout',
      'remains visible even if the main section is collapsed',
      'suitable for placing a user menu, profile avatar, or notification icons',
    ],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_END_PROPS_META,
}

export { TOOLBAR_END_META }
