import {
  DEFAULT_MARKER_LIST_GAP,
  MARKER_LIST_STYLES,
  MARKER_LIST_TAGS,
} from 'lib/components/core/MarkerList/constants'
import { MarkerListProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const MARKER_LIST_PROPS: Record<keyof MarkerListProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    description: 'Any number of MarkerList.Item slots.',
  },
  color: {
    ...BOX_META.props.color,
    description: 'Color applied to all items at once.',
  },
  gap: {
    ...BOX_META.props.rowGap,
    defaultValue: String(DEFAULT_MARKER_LIST_GAP),
  },
  intent: {
    ...BOX_META.props.intent,
    description: 'Color tone applied to all items at once.',
  },
  listStyle: {
    options: MARKER_LIST_STYLES,
    defaultValue: MARKER_LIST_STYLES[0],
    isRequired: false,
    isResponsive: false,
    description: 'Defines the marker style used for list items.',
  },
  tag: {
    ...BOX_META.props.tag,
    options: MARKER_LIST_TAGS,
    defaultValue: 'ul',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
