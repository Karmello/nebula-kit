import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_MARKER_LIST_ROW_GAP,
  MarkerListProps,
  MARKER_LIST_STYLES,
  MARKER_LIST_TAGS,
} from 'lib/components/core/elements/MarkerList/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { BOX_PROPS_META } from '../Box/props'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to all items at once.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to all items at once.',
  },
  listStyle: {
    options: MARKER_LIST_STYLES as unknown as string[],
    defaultValue: MARKER_LIST_STYLES[0],
    isRequired: false,
    isResponsive: false,
    description: 'Defines the style of the markers used for list items.',
  },
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: String(DEFAULT_MARKER_LIST_ROW_GAP),
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: MARKER_LIST_TAGS as unknown as string[],
    defaultValue: 'ul',
  },
}

export { MARKER_LIST_PROPS_META }
