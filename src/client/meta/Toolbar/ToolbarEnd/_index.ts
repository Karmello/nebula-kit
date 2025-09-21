import { ComponentMeta } from 'client/definitions'
import { ToolbarEndProps } from 'lib/components'

const TOOLBAR_END_META: ComponentMeta<ToolbarEndProps> = {
  overview: {
    title: 'Toolbar.End (optional)',
    description: 'The end slot of the toolbar.',
    role: ['provides a fixed region at the end of the toolbar layout'],
    behavior: ['always visible, even when the main section is collapsed and hidden'],
    examplesOfUse: ['placing a user menu', 'showing a profile avatar', 'displaying notification icons'],
    composedOf: ['Grid.Item'],
  },
}

export { TOOLBAR_END_META }
