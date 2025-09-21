import { ComponentMeta } from 'client/definitions'
import { TOOLBAR_INHERITED_PROPS, ToolbarOwnProps } from 'lib/components/layouts/Toolbar/definitions'

import props from './props'
import examples from './examples'

import TOOLBAR_MAIN_META from './ToolbarMain/_index'
import TOOLBAR_START_META from './ToolbarStart/_index'
import TOOLBAR_END_META from './ToolbarEnd/_index'

const TOOLBAR_META: ComponentMeta<ToolbarOwnProps> = {
  overview: {
    description:
      'A horizontal bar with start, main, and end slots, designed to present different types of action items.',
    role: ['acts as a container for navigation and actions'],
    behavior: [
      'the main section is toggleable in collapsed mode and always visible in inline mode',
      'in collapsed mode, the toggle button is rendered to control the main section',
      'any Box inside the Toolbar is overridden to be square',
    ],
    byDefault: ['switchAt prop is set to lg'],
    examplesOfUse: [
      'often used inside an application header to control navigation and provide additional tools',
      'often paired with a ButtonGroup rendered inside the main section',
    ],
    composedOf: TOOLBAR_INHERITED_PROPS,
    rendersAs: ['nav'],
  },
  props,
  examples,
}

export default {
  Toolbar: TOOLBAR_META,
  'Toolbar.Main': TOOLBAR_MAIN_META,
  'Toolbar.Start': TOOLBAR_START_META,
  'Toolbar.End': TOOLBAR_END_META,
}
