import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { MarkerListItemProps } from 'lib/components/core/MarkerList/slots/MarkerListItem/types'
import type { DocProp } from 'client/definitions'

export const MARKER_LIST_ITEM_PROPS: Record<keyof MarkerListItemProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // appearance
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to each item individually.',
    group: 'appearance',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to each item individually.',
    group: 'appearance',
  },
}
