import type { DialogFooterProps } from 'lib/components/pro/Dialog/slots/DialogFooter/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const DIALOG_FOOTER_PROPS: Record<keyof DialogFooterProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
