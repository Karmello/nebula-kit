import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ToolbarProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_PROPS: Record<keyof ToolbarProps, DocProp> = {
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
}
