import { ComponentMeta } from 'client/definitions'

import { type AppFrameMainProps } from '../../slots/AppFrameMain/definitions'
import { APP_FRAME_MAIN_PROPS_META } from './props'

const APP_FRAME_MAIN_META: ComponentMeta<AppFrameMainProps> = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.Main',
    title: 'Defines the central content region of AppFrame.',
    features: ['holds the primary application content or view'],
    composedOf: ['Box'],
    topLevelTags: ['main'],
  },
  props: APP_FRAME_MAIN_PROPS_META,
}

export { APP_FRAME_MAIN_META }
