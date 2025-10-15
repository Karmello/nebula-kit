import { ComponentMeta } from 'client/definitions'
import { AppFrame } from 'lib/components'
import { AppFrameProps } from 'lib/components/layouts/AppFrame/definitions'

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
