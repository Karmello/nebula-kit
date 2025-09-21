import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_FOOTER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Footer (optional)',
    description: 'Defines the bottom region of AppFrame.',
    byDefault: [
      'applies the secondary background',
      'ensures the region has at least 80 units of vertical height',
    ],
    examplesOfUse: ['used for legal notices, links, or supplementary information'],
    composedOf: ['Box'],
    rendersAs: ['footer'],
  },
}

export { APP_FRAME_FOOTER_META }
