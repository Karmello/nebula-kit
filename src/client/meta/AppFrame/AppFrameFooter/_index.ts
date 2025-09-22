import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_FOOTER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    name: 'AppFrame.Footer (optional)',
    title: 'Defines the bottom region of AppFrame.',
    description: [
      'applies the secondary background',
      'ensures the region has at least 80 units of vertical height',
      'used for legal notices, links, or supplementary information',
    ],
    composedOf: ['Box'],
    rendersAs: ['footer'],
  },
}

export { APP_FRAME_FOOTER_META }
