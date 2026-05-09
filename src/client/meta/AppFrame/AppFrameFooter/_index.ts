import { ComponentMeta } from 'client/definitions'
import { AppFrameFooterProps } from 'lib/components'

import { APP_FRAME_FOOTER_PROPS_META } from './props'

const APP_FRAME_FOOTER_META: ComponentMeta<AppFrameFooterProps> = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.Footer?',
    title: 'Defines the bottom region of AppFrame.',
    guidelines: ['commonly used for legal notices, links or supplementary information'],
    composedOf: ['Box'],
    topLevelTags: ['footer'],
  },
  props: APP_FRAME_FOOTER_PROPS_META,
}

export { APP_FRAME_FOOTER_META }
