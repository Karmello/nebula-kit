import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { ToolbarMainProps } from '../types'

export const TOOLBAR_MAIN_META = {
  overview: {
    bundle: 'pro',
    name: 'Toolbar.Main',
    title: 'Defines the main slot of Toolbar.',
    features: ['holds the primary, collapsible content of the toolbar'],
    composedOf: ['Box'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
} satisfies ComponentMeta<ToolbarMainProps>
