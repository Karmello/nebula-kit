import { ComponentMeta } from 'client/definitions'
import { ToolbarEndProps } from 'lib/components'
import { TOOLBAR_END_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarEnd/definitions'

const TOOLBAR_END_META: ComponentMeta<ToolbarEndProps> = {
  overview: {
    title: 'Toolbar.End (optional)',
    description: 'The end slot of the toolbar.',
    role: ['provides a fixed region at the end of the toolbar layout'],
    behavior: ['always visible, even when the main section is collapsed and hidden'],
    examplesOfUse: ['placing a user menu', 'showing a profile avatar', 'displaying notification icons'],
    composedOf: TOOLBAR_END_INHERITED_PROPS,
  },
}

export { TOOLBAR_END_META }
