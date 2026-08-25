import { DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/constants'
import type { AppFrameFooterSectionProps } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const APP_FRAME_FOOTER_SECTION_PROPS: Record<keyof AppFrameFooterSectionProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  padding: {
    ...BOX_META.props.padding,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING),
  },
  paddingBlock: BOX_META.props.paddingBlock,
  paddingInline: BOX_META.props.paddingInline,
}
