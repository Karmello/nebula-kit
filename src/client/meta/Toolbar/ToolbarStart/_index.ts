import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'
import { TOOLBAR_START_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarStart/definitions'

const TOOLBAR_START_META: ComponentMeta<ToolbarStartProps> = {
  overview: {
    title: 'Toolbar.Start (optional)',
    description: 'The start slot of the toolbar.',
    role: ['provides a fixed region at the beginning of the toolbar layout'],
    behavior: ['always visible, even when the main section is collapsed and hidden'],
    examplesOfUse: [
      'showing a brand label or logo',
      'adding small auxiliary elements that sit next to the toggle button',
    ],
    composedOf: TOOLBAR_START_INHERITED_PROPS,
  },
}

export default TOOLBAR_START_META
