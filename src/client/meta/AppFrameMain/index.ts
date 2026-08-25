import type { AppFrameMainProps } from 'lib/components/core/AppFrame/slots/AppFrameMain/types'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_MAIN_OVERVIEW } from './overview'
import { APP_FRAME_MAIN_PROPS } from './props'

export const APP_FRAME_MAIN_META = {
  overview: APP_FRAME_MAIN_OVERVIEW,
  props: APP_FRAME_MAIN_PROPS,
} satisfies ComponentMeta<AppFrameMainProps>
