import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import { type DialogHeaderProps } from '../types'

export const DIALOG_HEADER_META = {
  overview: {
    bundle: 'pro',
    name: 'Dialog.Header?',
    title: 'Header area of the dialog.',
    features: ['for the dialog title or heading content'],
    composedOf: ['Box'],
    exposedTags: ['div'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
} satisfies ComponentMeta<DialogHeaderProps>
