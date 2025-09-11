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
    role: [
      'structure the application into top, center, and bottom regions',
      'control how those regions are arranged and related',
    ],
    behavior: ['renders as a <div> element'],
    examplesOfUse: [
      'wrap an application layout that needs a persistent header and footer around the main content',
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
  ],
}

const APP_FRAME_HEADER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Header',
    description: 'Defines the top region of AppFrame.',
    behavior: ['renders as a <header> element'],
    byDefault: [
      'applies the secondary background',
      'ensures the region has at least 22 units of vertical height',
    ],
    examplesOfUse: ['used for navigation or branding'],
    composedOf: APP_FRAME_HEADER_INHERITED_PROPS,
  },
}

const APP_FRAME_MAIN_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Main',
    description: 'Defines the central content region of AppFrame.',
    behavior: ['renders as a <main> element'],
    examplesOfUse: ['used for the primary application view'],
    composedOf: APP_FRAME_MAIN_INHERITED_PROPS,
  },
}

const APP_FRAME_FOOTER_META: ComponentMeta<AppFrameOwnProps> = {
  overview: {
    title: 'AppFrame.Footer',
    description: 'Defines the bottom region of AppFrame.',
    behavior: ['renders as a <footer> element'],
    byDefault: [
      'applies the secondary background',
      'ensures the region has at least 80 units of vertical height',
    ],
    examplesOfUse: ['used for legal notices, links, or supplementary information'],
    composedOf: APP_FRAME_FOOTER_INHERITED_PROPS,
  },
}

export default {
  AppFrame: APP_FRAME_META,
  'AppFrame.Header': APP_FRAME_HEADER_META,
  'AppFrame.Main': APP_FRAME_MAIN_META,
  'AppFrame.Footer': APP_FRAME_FOOTER_META,
}
