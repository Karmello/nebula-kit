import { ComponentMeta } from 'client/definitions'
import { ToolbarProps } from 'lib/components/pro/layouts/Toolbar/definitions'

import { TOOLBAR_PROPS_META } from './props'
import { TOOLBAR_EXAMPLES_META } from './examples'

import { TOOLBAR_MAIN_META } from './ToolbarMain/_index'
import { TOOLBAR_START_META } from './ToolbarStart/_index'
import { TOOLBAR_END_META } from './ToolbarEnd/_index'

const TOOLBAR_META: ComponentMeta<ToolbarProps> = {
  overview: {
    bundle: 'pro',
    title:
      'Horizontal bar with Start, Main and End slots, designed to present different types of action items.',
    description: [
      'often used inside AppFrame.Header to control navigation and provide additional tools',
      'often paired with ButtonGroup rendered inside the main section',
      'the main section is toggleable in collapsed mode and always visible in inline mode',
      'any Box inside the Toolbar is overridden to be square',
    ],
    composedOf: ['Grid'],
    rendersAs: ['nav'],
    slots: ['Toolbar.Main', 'Toolbar.Start', 'Toolbar.End'],
  },
  props: TOOLBAR_PROPS_META,
  examples: TOOLBAR_EXAMPLES_META,
}

export default {
  Toolbar: TOOLBAR_META,
  'Toolbar.Main': TOOLBAR_MAIN_META,
  'Toolbar.Start': TOOLBAR_START_META,
  'Toolbar.End': TOOLBAR_END_META,
}
