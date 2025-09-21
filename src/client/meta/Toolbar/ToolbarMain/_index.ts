import { ComponentMeta } from 'client/definitions'
import { ToolbarMainProps } from 'lib/components'
import { TOOLBAR_MAIN_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarMain/definitions'

const TOOLBAR_MAIN_META: ComponentMeta<ToolbarMainProps> = {
  overview: {
    title: 'Toolbar.Main',
    description: 'The main slot of the toolbar.',
    role: ['provides space for the primary content of the toolbar'],
    composedOf: TOOLBAR_MAIN_INHERITED_PROPS,
  },
}

export default TOOLBAR_MAIN_META
