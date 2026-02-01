import { ComponentMeta } from 'client/definitions'
import { AppFrameProps } from 'lib/components'

import { APP_FRAME_PROPS_META } from './props'
import { APP_FRAME_EXAMPLES_META } from './examples'

import { APP_FRAME_HEADER_META } from './AppFrameHeader/_index'
import { APP_FRAME_MAIN_META } from './AppFrameMain/_index'
import { APP_FRAME_FOOTER_META } from './AppFrameFooter/_index'

const APP_FRAME_META: ComponentMeta<AppFrameProps> = {
  overview: {
    bundle: 'core',
    title: 'Structural component that defines the global layout of an application view.',
    features: [
      'provides header, main area and footer regions for the application',
      'establishes a consistent page structure for application-level layouts',
    ],
    composedOf: ['Grid'],
    topLevelTags: ['div'],
    slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
  },
  props: APP_FRAME_PROPS_META,
  examples: APP_FRAME_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  AppFrame: APP_FRAME_META,
  AppFrameHeader: APP_FRAME_HEADER_META,
  AppFrameMain: APP_FRAME_MAIN_META,
  AppFrameFooter: APP_FRAME_FOOTER_META,
}
