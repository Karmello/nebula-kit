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
    description: [
      'provides header, main area and footer regions for the application',
      'establishes a consistent page structure for application-level layouts',
    ],
    composedOf: ['Grid'],
    topLevelTags: ['div'],
    slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
  },
  props: APP_FRAME_PROPS_META,
  examples: APP_FRAME_EXAMPLES_META,
}

export default {
  AppFrame: APP_FRAME_META,
  'AppFrame.Header': APP_FRAME_HEADER_META,
  'AppFrame.Main': APP_FRAME_MAIN_META,
  'AppFrame.Footer': APP_FRAME_FOOTER_META,
}
