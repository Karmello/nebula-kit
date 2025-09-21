import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_MAIN_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Main',
    description: 'Defines the central content region of AppFrame.',
    examplesOfUse: ['used for the primary application view'],
    composedOf: ['Box'],
    rendersAs: ['main'],
  },
}

export { APP_FRAME_MAIN_META }
