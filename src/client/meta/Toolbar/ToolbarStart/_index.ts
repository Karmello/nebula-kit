import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'

import { TOOLBAR_START_PROPS_META } from './props'

const TOOLBAR_START_META: ComponentMeta<ToolbarStartProps> = {
  overview: {
    bundle: 'pro',
    name: 'Toolbar.Start?',
    title: 'Defines the start slot of Toolbar.',
    features: ['fixed region at the start of the toolbar', 'remains visible when the main section is collapsed'],
    guidelines: ['commonly used for brand, logo or home button'],
    composedOf: ['Grid.Item'],
  },
  props: TOOLBAR_START_PROPS_META,
}

export { TOOLBAR_START_META }
