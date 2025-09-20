import { MarkerList, Box } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import {
  MARKER_LIST_INHERITED_PROPS,
  MarkerListElem,
  MarkerListOwnProps,
  MarkerListStyle,
} from 'lib/components/elements/MarkerList/definitions'

import { MARKER_LIST_ITEM_INHERITED_PROPS } from 'lib/components/elements/MarkerList/MarkerListItem/definitions'

const MARKER_LIST_META: ComponentMeta<MarkerListOwnProps> = {
  overview: {
    description: 'A semantic list component that displays native markers for its items.',
    role: [
      'establishes a semantic list container with native markers',
      'ensures each item is rendered as part of an accessible list structure',
    ],
    byDefault: [
      'renders as a <ul> element',
      'expects children to be <MarkerList.Item>',
      'uses disc as the list style',
      'applies a gap of 3',
    ],
    examplesOfUse: [
      'presenting short collections of text items with bullets or numbers',
      'grouping related information where the marker itself carries meaning',
    ],
    composedOf: MARKER_LIST_INHERITED_PROPS,
    rendersAs: MarkerListElem,
  },
  ownProps: [
    {
      name: 'listStyle',
      options: MarkerListStyle as unknown as string[],
      defaultValue: MarkerListStyle[0],
      isRequired: false,
      isResponsive: false,
      description: 'Defines the style of the markers used for list items.',
    },
  ],
  examples: [
    {
      description: 'Displays a basic list with two items.',
      jsx: (
        <MarkerList>
          <MarkerList.Item>Item 1</MarkerList.Item>
          <MarkerList.Item>Item 2</MarkerList.Item>
        </MarkerList>
      ),
    },
    {
      description: 'Shows a list with circular markers and custom spacing between items.',
      jsx: (
        <MarkerList listStyle="circle" gap={10}>
          <MarkerList.Item>Item 1</MarkerList.Item>
          <MarkerList.Item>Item 2</MarkerList.Item>
        </MarkerList>
      ),
    },
    {
      description: 'Displays a numbered list where each item contains a styled box.',
      jsx: (
        <MarkerList listStyle="decimal">
          <MarkerList.Item>
            <Box variant="solid" intent="primary" padding={3}>
              Item
            </Box>
          </MarkerList.Item>
          <MarkerList.Item>
            <Box variant="solid" intent="primary" padding={3}>
              Item
            </Box>
          </MarkerList.Item>
        </MarkerList>
      ),
    },
  ],
}

const MARKER_LIST_ITEM_META: ComponentMeta<any> = {
  overview: {
    title: 'MarkerList.Item',
    description: 'Represents an individual element within a MarkerList.',
    composedOf: MARKER_LIST_ITEM_INHERITED_PROPS,
    rendersAs: ['li'],
  },
}

export default {
  MarkerList: MARKER_LIST_META,
  MarkerListItem: MARKER_LIST_ITEM_META,
}
