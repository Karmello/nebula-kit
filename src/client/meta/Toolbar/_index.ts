import { ComponentMeta } from 'client/definitions'
import { ToolbarProps } from 'lib/components'

import { TOOLBAR_PROPS_META } from './props'
import { TOOLBAR_EXAMPLES_META } from './examples'

import { TOOLBAR_MAIN_META } from './ToolbarMain/_index'
import { TOOLBAR_START_META } from './ToolbarStart/_index'
import { TOOLBAR_END_META } from './ToolbarEnd/_index'

const TOOLBAR_META: ComponentMeta<ToolbarProps> = {
  overview: {
    bundle: 'pro',
    title: 'Horizontal bar with Start, Main and End slots for organizing actions and controls.',
    features: [
      'often used inside AppFrame.Header to control navigation and provide additional tools',
      'often paired with ButtonGroup rendered inside the main section',
      'the main section is toggleable in collapsed mode and always visible in inline mode',
      'all drawable Box components inside Toolbar are forced to use square corners',
    ],
    composedOf: ['Grid'],
    topLevelTags: ['nav'],
    slots: ['Toolbar.Main', 'Toolbar.Start', 'Toolbar.End'],
  },
  props: TOOLBAR_PROPS_META,
  examples: TOOLBAR_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Toolbar: TOOLBAR_META,
  ToolbarMain: TOOLBAR_MAIN_META,
  ToolbarStart: TOOLBAR_START_META,
  ToolbarEnd: TOOLBAR_END_META,
}
