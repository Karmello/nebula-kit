import { BOX_COLORS, BOX_INTENTS, BOX_SURFACE_DEPTHS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN,
  DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX,
  VIRTUAL_LIST_SCROLL_ALIGN,
} from 'lib/components/pro/VirtualList/constants'
import { VirtualListProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const VIRTUAL_LIST_PROPS: Record<keyof VirtualListProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // content
  items: {
    options: ['Array<T>'],
    isRequired: true,
    description: 'Data array used to generate virtualized items.',
    group: 'content',
  },
  renderItem: {
    options: ['(item: T, index: number) => ReactNode'],
    isRequired: true,
    description: 'Render function called for each visible list item.',
    group: 'content',
  },
  itemBlockSize: {
    options: ['number'],
    isRequired: true,
    description: 'Height of a single list item in pixels.',
    group: 'content',
  },
  visibleItemsCount: {
    options: ['number'],
    isRequired: true,
    description: 'Specifies the number of list items visible before scrolling is enabled.',
    group: 'content',
  },
  // surface
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to the surface behind list items.',
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the surface behind list items.',
    group: 'surface',
  },
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    description:
      "Selects which depth tier the component's surface color is drawn from - base or raised - each with its own per-intent lightness and interaction states.",
    group: 'surface',
  },
  // scroll
  scrollToIndex: {
    options: ['number'],
    defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX),
    description: 'Scrolls the list to the item at the given index on render.',
    group: 'scroll',
  },
  scrollAlign: {
    options: VIRTUAL_LIST_SCROLL_ALIGN,
    defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN),
    description:
      'Defines how the item targeted by the "scrollToIndex" prop is positioned within the scroll area.',
    group: 'scroll',
  },
  ensureVisibleIndex: {
    options: ['number'],
    description:
      'Index of the item that should be kept fully visible within the list viewport. When provided, the list scrolls only if needed to ensure this item remains in view.',
    group: 'scroll',
  },
  overscan: {
    options: ['number'],
    description:
      'Number of extra items rendered outside the visible range. If not provided the list renders one full visible range before and after.',
    group: 'scroll',
  },
}
