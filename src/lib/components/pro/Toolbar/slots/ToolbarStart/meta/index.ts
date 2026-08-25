import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { ToolbarStartProps } from '../types'

export const TOOLBAR_START_META = {
  overview: {
    bundle: 'pro',
    name: 'Toolbar.Start?',
    title: 'Defines the start slot of Toolbar.',
    features: [
      'fixed region at the start of the toolbar',
      'remains visible when the main section is collapsed',
    ],
    guidelines: ['commonly used for brand, logo or home button'],
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
} satisfies ComponentMeta<ToolbarStartProps>
