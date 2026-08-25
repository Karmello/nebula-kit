import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { ToolbarEndProps } from '../types'

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
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
} satisfies ComponentMeta<ToolbarEndProps>
