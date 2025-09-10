import { ComponentMeta } from 'client/definitions'
import { AppFrame, AppFrameOwnProps, Text } from 'lib/components'

const APP_FRAME_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    name: 'AppFrame',
    description:
      "AppFrame is a structural component meant to wrap an entire application view. It defines a consistent layout with clear regions for a header, main content area, and optional footer. By handling these slots centrally, it gives you a predictable frame for building pages while keeping layout concerns separated from the content itself. It's essentially the scaffolding for your app's UI, ensuring that the overall page structure stays uniform no matter what gets rendered inside.",
    propsDescription: '',
  },
  props: [
    {
      name: 'stickyHeader',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: '',
    },
  ],
  examples: [
    {
      jsx: (
        <AppFrame>
          <AppFrame.Header paddingTop={5} paddingLeft={5}>
            <Text>Header</Text>
          </AppFrame.Header>
          <AppFrame.Main paddingTop={5} paddingLeft={5}>
            <Text>Main</Text>
          </AppFrame.Main>
          <AppFrame.Footer paddingTop={5} paddingLeft={5}>
            <Text>Footer</Text>
          </AppFrame.Footer>
        </AppFrame>
      ),
      sandBoxWithNoPadding: true,
    },
  ],
}

export default APP_FRAME_META
