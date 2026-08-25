import type { ToolbarEndProps } from 'lib/components/pro/Toolbar/slots/ToolbarEnd/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_END_META = {
  overview: {
    bundle: 'pro',
    name: 'Toolbar.End?',
    title: 'Defines the end slot of Toolbar.',
    features: [
      'fixed region at the end of the toolbar',
      'remains visible when the main section is collapsed',
    ],
    guidelines: ['commonly used for user actions, menus or status items'],
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
} satisfies ComponentMeta<ToolbarEndProps>
