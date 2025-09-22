import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'

const TOOLBAR_START_META: ComponentMeta<ToolbarStartProps> = {
  overview: {
    name: 'Toolbar.Start (optional)',
    title: 'The start slot of the toolbar.',
    role: [
      'provides a fixed region at the beginning of the toolbar layout',
      'always visible, even when the main section is collapsed and hidden',
      'showing a brand label or logo',
      'adding small auxiliary elements that sit next to the toggle button',
    ],
    composedOf: ['Grid.Item'],
  },
}

export { TOOLBAR_START_META }
