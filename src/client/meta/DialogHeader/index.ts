import { type DialogHeaderProps } from 'lib/components/pro/Dialog/slots/DialogHeader/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

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
      ...BOX_META.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
} satisfies ComponentMeta<DialogHeaderProps>
