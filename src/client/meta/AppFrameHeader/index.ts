import type { AppFrameHeaderProps } from 'lib/components/core/AppFrame/slots/AppFrameHeader/types'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_HEADER_OVERVIEW } from './overview'
import { APP_FRAME_HEADER_PROPS } from './props'

export const APP_FRAME_HEADER_META = {
  overview: APP_FRAME_HEADER_OVERVIEW,
  props: APP_FRAME_HEADER_PROPS,
} satisfies ComponentMeta<AppFrameHeaderProps>
