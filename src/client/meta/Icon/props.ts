import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { DEFAULT_ICON_SIZE } from 'lib/components/core/Icon/constants'
import type { IconProps } from 'lib/components/core/Icon/types'
import type { DocProp } from 'client/definitions'

export const ICON_PROPS: Record<keyof IconProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
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
  name: {
    options: ['IconName'],
    description: 'Name of the icon to render.',
    group: 'appearance',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the icon.',
    group: 'appearance',
  },
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to the icon.',
    group: 'appearance',
  },
  size: {
    options: ['string'],
    defaultValue: String(DEFAULT_ICON_SIZE),
    description: 'Size of the icon.',
    group: 'appearance',
  },
}
