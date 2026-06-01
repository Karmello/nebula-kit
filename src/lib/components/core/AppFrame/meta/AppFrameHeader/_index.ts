import { ComponentMeta } from 'client/definitions'

import { type AppFrameHeaderProps } from '../../slots/AppFrameHeader/definitions'
import { APP_FRAME_HEADER_PROPS_META } from './props'

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameHeaderProps> = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.Header',
    title: 'Defines the top region of AppFrame.',
    guidelines: ['typically used for navigation, branding or other global actions'],
    composedOf: ['Box'],
    topLevelTags: ['header'],
  },
  props: APP_FRAME_HEADER_PROPS_META,
}

export { APP_FRAME_HEADER_META }
