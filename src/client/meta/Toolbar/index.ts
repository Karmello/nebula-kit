import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ToolbarProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TOOLBAR_CHANGELOG } from './changelog'
import { TOOLBAR_EXAMPLES } from './examples'

export const TOOLBAR_META = {
  overview: {
    bundle: 'pro',
    title: 'Horizontal bar with Start, Main and End slots for organizing actions and controls.',
    features: [
      'the main section is toggleable in collapsed mode and always visible in inline mode',
      'all drawable Box components inside Toolbar are forced to use square corners',
    ],
    guidelines: [
      'often used inside AppFrame.Header to control navigation and provide additional tools',
      'often paired with ButtonGroup rendered inside the main section',
    ],
    composedOf: ['Box'],
    exposedTags: ['nav'],
    slots: ['Toolbar.Main', 'Toolbar.Start', 'Toolbar.End'],
  },
  props: {
    children: {
      ...BOX_META.props.children,
      isRequired: true,
      options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
      description:
        'Accepts slots directly or via a render function with access to the context argument.',
    },
    switchAt: {
      options: SWITCH_BREAKPOINTS,
      defaultValue: DEFAULT_SWITCH_BREAKPOINT,
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the breakpoint at which the main section switches between collapsed and inline layout.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
  examples: TOOLBAR_EXAMPLES,
  changelog: TOOLBAR_CHANGELOG,
} satisfies ComponentMeta<ToolbarProps>
