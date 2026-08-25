import type { DialogHeaderProps } from 'lib/components/pro/Dialog/slots/DialogHeader/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const DIALOG_HEADER_PROPS: Record<keyof DialogHeaderProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
