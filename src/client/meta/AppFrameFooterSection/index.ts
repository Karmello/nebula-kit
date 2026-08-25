import type { AppFrameFooterSectionProps } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/types'
import { DocMeta } from 'client/definitions'

import { APP_FRAME_FOOTER_SECTION_OVERVIEW } from './overview'
import { APP_FRAME_FOOTER_SECTION_PROPS } from './props'

export const APP_FRAME_FOOTER_SECTION_META = {
  overview: APP_FRAME_FOOTER_SECTION_OVERVIEW,
  props: APP_FRAME_FOOTER_SECTION_PROPS,
} satisfies DocMeta<AppFrameFooterSectionProps>
