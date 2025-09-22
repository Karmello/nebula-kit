import { ComponentMeta } from 'client/definitions'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    name: 'AppFrame.Header',
    title: 'Defines the top region of AppFrame.',
    description: [
      'applies the secondary background',
      `ensures the region has at least ${BUTTON_SIZE_CONFIG[DEFAULT_BUTTON_SIZE].blockSize} units of vertical height`,
      'used for navigation or branding',
    ],
    composedOf: ['Box'],
    rendersAs: ['header'],
  },
}

export { APP_FRAME_HEADER_META }
