import { ComponentMeta } from 'client/definitions'
import { ToolbarMainProps } from 'lib/components'

const TOOLBAR_MAIN_META: ComponentMeta<ToolbarMainProps> = {
  overview: {
    name: 'Toolbar.Main',
    description: 'The main slot of the toolbar.',
    role: ['provides space for the primary content of the toolbar'],
    composedOf: ['Grid.Item'],
  },
}

export { TOOLBAR_MAIN_META }
