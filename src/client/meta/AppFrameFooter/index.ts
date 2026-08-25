import type { AppFrameFooterProps } from 'lib/components/core/AppFrame/slots/AppFrameFooter/types'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_FOOTER_OVERVIEW } from './overview'
import { APP_FRAME_FOOTER_PROPS } from './props'

export const APP_FRAME_FOOTER_META = {
  overview: APP_FRAME_FOOTER_OVERVIEW,
  props: APP_FRAME_FOOTER_PROPS,
} satisfies ComponentMeta<AppFrameFooterProps>
