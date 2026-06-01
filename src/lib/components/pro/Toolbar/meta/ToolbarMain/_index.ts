import { ComponentMeta } from 'client/definitions'

import { type ToolbarMainProps } from '../../slots/ToolbarMain/definitions'
import { TOOLBAR_MAIN_PROPS_META } from './props'

const TOOLBAR_MAIN_META: ComponentMeta<ToolbarMainProps> = {
  overview: {
    bundle: 'pro',
    name: 'Toolbar.Main',
    title: 'Defines the main slot of Toolbar.',
    features: ['holds the primary, collapsible content of the toolbar'],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_MAIN_PROPS_META,
}

export { TOOLBAR_MAIN_META }
