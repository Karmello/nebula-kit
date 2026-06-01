import { ComponentMeta } from 'client/definitions'

import { type AppFrameProps } from '../../AppFrame/definitions'
import { AppFrame } from '../'

const APP_FRAME_EXAMPLES_META: ComponentMeta<AppFrameProps>['examples'] = [
  {
    description: 'Application view composed of header, main area and footer.',
    jsx: (
      <AppFrame>
        <AppFrame.Header>Header</AppFrame.Header>
        <AppFrame.Main>Main</AppFrame.Main>
        <AppFrame.Footer>Footer</AppFrame.Footer>
      </AppFrame>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { APP_FRAME_EXAMPLES_META }
