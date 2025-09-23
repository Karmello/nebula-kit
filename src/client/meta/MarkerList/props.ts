import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_MARKER_LIST_ROW_GAP,
  MarkerListProps,
  MarkerListStyle,
  MarkerListTag,
} from 'lib/components/elements/MarkerList/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: MarkerListTag as unknown as string[],
    defaultValue: '<ul>',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: String(DEFAULT_MARKER_LIST_ROW_GAP),
  },
  listStyle: {
    options: MarkerListStyle as unknown as string[],
    defaultValue: MarkerListStyle[0],
    isRequired: false,
    isResponsive: false,
    description: 'Defines the style of the markers used for list items.',
  },
}

export { MARKER_LIST_PROPS_META }
