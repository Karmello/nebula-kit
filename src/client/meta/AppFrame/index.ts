import type { AppFrameProps } from 'lib/components/core/AppFrame/types'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_CHANGELOG } from './changelog'
import { APP_FRAME_EXAMPLES } from './examples'
import { APP_FRAME_OVERVIEW } from './overview'
import { APP_FRAME_PROPS } from './props'

export const APP_FRAME_META = {
  overview: APP_FRAME_OVERVIEW,
  props: APP_FRAME_PROPS,
  examples: APP_FRAME_EXAMPLES,
  changelog: APP_FRAME_CHANGELOG,
} satisfies ComponentMeta<AppFrameProps>
