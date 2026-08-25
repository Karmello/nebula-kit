import type { ToolbarMainProps } from 'lib/components/pro/Toolbar/slots/ToolbarMain/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

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
      ...BOX_META.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
} satisfies ComponentMeta<ToolbarMainProps>
