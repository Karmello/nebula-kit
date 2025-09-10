import { ComponentMeta } from 'client/definitions'
import { APP_FRAME_INHERITED_PROPS, AppFrame, AppFrameOwnProps, Text } from 'lib/components'

import {
  APP_FRAME_FOOTER_INHERITED_PROPS,
  APP_FRAME_HEADER_INHERITED_PROPS,
  APP_FRAME_MAIN_INHERITED_PROPS,
} from 'lib/components/layouts/AppFrame/slots'

const APP_FRAME_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    description: 'AppFrame is a structural component meant to wrap an entire application view.',
    characteristics: [
      'defines a consistent layout with clear regions for a header, main content area, and optional footer',
      'gives you a predictable frame for building pages while keeping layout concerns separated from the content itself',
      'ensuring that the overall page structure stays uniform no matter what gets rendered inside',
    ],
    composedOf: APP_FRAME_INHERITED_PROPS,
  },
  props: [
    {
      name: 'stickyHeader',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description:
        'makes the AppFrame.Header remain fixed at the top of the viewport while scrolling the main content',
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

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Header',
    description: 'Defines the top region of AppFrame.',
    useCases: ['used for navigation or branding'],
    composedOf: APP_FRAME_HEADER_INHERITED_PROPS,
  },
}

const APP_FRAME_MAIN_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Main',
    description: 'Defines the central content region of AppFrame.',
    useCases: ['used for the primary application view'],
    composedOf: APP_FRAME_MAIN_INHERITED_PROPS,
  },
}

const APP_FRAME_FOOTER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Footer',
    description: 'Defines the bottom region of AppFrame.',
    useCases: ['used for legal notices, links, or supplementary information'],
    composedOf: APP_FRAME_FOOTER_INHERITED_PROPS,
  },
}

export default {
  AppFrame: APP_FRAME_META,
  'AppFrame.Header': APP_FRAME_HEADER_META,
  'AppFrame.Main': APP_FRAME_MAIN_META,
  'AppFrame.Footer': APP_FRAME_FOOTER_META,
}
