import { ComponentMeta } from 'client/definitions'
import { ToolbarEndProps } from 'lib/components'

import { TOOLBAR_END_PROPS_META } from './props'

const TOOLBAR_END_META: ComponentMeta<ToolbarEndProps> = {
  overview: {
    name: 'Toolbar.End?',
    title: 'Defines the end slot of Toolbar.',
    description: [
      'fixed region at the end of the toolbar',
      'remains visible when the main section is collapsed',
      'commonly used for user actions, menus or status items',
    ],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_END_PROPS_META,
}

export { TOOLBAR_END_META }
