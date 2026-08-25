import { type DialogFooterProps } from 'lib/components/pro/Dialog/slots/DialogFooter/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const DIALOG_FOOTER_META = {
  overview: {
    bundle: 'pro',
    name: 'Dialog.Footer?',
    title: 'Footer area of the dialog.',
    features: ['for actions'],
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
} satisfies ComponentMeta<DialogFooterProps>
