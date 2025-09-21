import { ComponentMeta } from 'client/definitions'
import { AppFrame, Text } from 'lib/components'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_EXAMPLES_META: ComponentMeta<AppFrameOwnProps>['examples'] = [
  {
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

export default APP_FRAME_EXAMPLES_META
