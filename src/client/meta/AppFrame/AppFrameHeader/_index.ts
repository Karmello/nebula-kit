import { ComponentMeta } from 'client/definitions'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'
import { APP_FRAME_HEADER_INHERITED_PROPS } from 'lib/components/layouts/AppFrame/slots/AppFrameHeader/definitions'

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Header',
    description: 'Defines the top region of AppFrame.',
    byDefault: [
      'applies the secondary background',
      `ensures the region has at least ${BUTTON_SIZE_CONFIG[DEFAULT_BUTTON_SIZE].blockSize} units of vertical height`,
    ],
    examplesOfUse: ['used for navigation or branding'],
    composedOf: APP_FRAME_HEADER_INHERITED_PROPS,
    rendersAs: ['header'],
  },
}

export default APP_FRAME_HEADER_META
