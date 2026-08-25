import type { AppFrameMainProps } from 'lib/components/core/AppFrame/slots/AppFrameMain/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const APP_FRAME_MAIN_PROPS: Record<keyof AppFrameMainProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  padding: BOX_META.props.padding,
  paddingBlock: BOX_META.props.paddingBlock,
  paddingBottom: BOX_META.props.paddingBottom,
  paddingInline: BOX_META.props.paddingInline,
  paddingLeft: BOX_META.props.paddingLeft,
  paddingRight: BOX_META.props.paddingRight,
  paddingTop: BOX_META.props.paddingTop,
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
