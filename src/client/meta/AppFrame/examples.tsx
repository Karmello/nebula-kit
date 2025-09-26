import { ComponentMeta } from 'client/definitions'
import { AppFrame, Text } from 'lib/components'
import { AppFrameProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_EXAMPLES_META: ComponentMeta<AppFrameProps>['examples'] = [
  {
    description: 'Application view composed of header, main area, and footer.',
    jsx: (
      <AppFrame>
        <AppFrame.Header>
          <Text>Header</Text>
        </AppFrame.Header>
        <AppFrame.Main>
          <Text>Main</Text>
        </AppFrame.Main>
        <AppFrame.Footer>
          <Text>Footer</Text>
        </AppFrame.Footer>
      </AppFrame>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { APP_FRAME_EXAMPLES_META }
