import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ToolbarProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const TOOLBAR_PROPS: Record<keyof ToolbarProps, DocProp> = {
  children: {
    options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
    isRequired: true,
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
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
