import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_MARKER_LIST_GAP,
  MARKER_LIST_STYLES,
  MARKER_LIST_TAGS,
} from 'lib/components/core/MarkerList/constants'
import { MarkerListProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const MARKER_LIST_PROPS: Record<keyof MarkerListProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Any number of MarkerList.Item slots.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to all items at once.',
  },
  gap: {
    options: ['string'],
    defaultValue: String(DEFAULT_MARKER_LIST_GAP),
    isResponsive: true,
    description: 'Defines vertical spacing between rows of children.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
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
    options: MARKER_LIST_TAGS,
    defaultValue: 'ul',
    description: 'The HTML tag to be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
