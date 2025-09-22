import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

import { APP_FRAME_PROPS_META } from './props'
import { APP_FRAME_EXAMPLES_META } from './examples'

import { APP_FRAME_HEADER_META } from './AppFrameHeader/_index'
import { APP_FRAME_MAIN_META } from './AppFrameMain/_index'
import { APP_FRAME_FOOTER_META } from './AppFrameFooter/_index'

const APP_FRAME_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'A structural component that locks the overall layout for an application view.',
    role: [
      'structure the application into top, center, and bottom regions',
      'control how those regions are arranged and related',
      'wrap an application layout that needs a persistent header and footer around the main content',
    ],
    composedOf: ['Grid'],
    rendersAs: ['div'],
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
