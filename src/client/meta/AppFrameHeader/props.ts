import { DEFAULT_APP_FRAME_HEADER_INTENT } from 'lib/components/core/AppFrame/slots/AppFrameHeader/constants'
import type { AppFrameHeaderProps } from 'lib/components/core/AppFrame/slots/AppFrameHeader/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const APP_FRAME_HEADER_PROPS: Record<keyof AppFrameHeaderProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  color: {
    ...BOX_META.props.color,
    isResponsive: false,
  },
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
    isResponsive: false,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
