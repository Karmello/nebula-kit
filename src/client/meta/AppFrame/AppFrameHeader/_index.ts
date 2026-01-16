import { ComponentMeta } from 'client/definitions'
import { AppFrameHeaderProps } from 'lib/components'

import { APP_FRAME_HEADER_PROPS_META } from './props'

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameHeaderProps> = {
  overview: {
    name: 'AppFrame.Header',
    title: 'Defines the top region of AppFrame.',
    features: ['typically used for navigation, branding or other global actions'],
    composedOf: ['Box'],
    topLevelTags: ['header'],
  },
  props: APP_FRAME_HEADER_PROPS_META,
}

export { APP_FRAME_HEADER_META }
