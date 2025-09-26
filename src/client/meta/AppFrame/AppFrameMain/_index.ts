import { ComponentMeta } from 'client/definitions'
import { AppFrameMainProps } from 'lib/components'

import { APP_FRAME_MAIN_PROPS_META } from './props'

const APP_FRAME_MAIN_META: ComponentMeta<AppFrameMainProps> = {
  overview: {
    name: 'AppFrame.Main',
    title: 'Defines the central content region of AppFrame.',
    description: ['holds the primary application content or view'],
    composedOf: ['Box'],
    rendersAs: ['main'],
  },
  props: APP_FRAME_MAIN_PROPS_META,
}

export { APP_FRAME_MAIN_META }
