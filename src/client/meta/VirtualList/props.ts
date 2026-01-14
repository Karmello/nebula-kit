import { ComponentMeta } from 'client/definitions'
import { VirtualListProps } from 'lib/components'

import {
  DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN,
  DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX,
  VIRTUAL_LIST_SCROLL_ALIGN,
} from 'lib/components/pro/layout/VirtualList'

import { BOX_PROPS_META } from '../Box/props'

const VIRTUAL_LIST_PROPS_META: ComponentMeta<VirtualListProps>['props'] = {
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to the surface behind list items.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to the surface behind list items.',
  },
  itemHeight: {
    options: ['number'],
    isRequired: true,
    description: 'Height of a single list item in pixels.',
  },
  items: {
    options: ['Array<T>'],
    isRequired: true,
    description: 'Data array used to generate virtualized items.',
  },
  overscan: {
    options: ['number'],
    description:
      'Number of extra items rendered outside the visible range. If not provided the list renders one full visible range before and after.',
  },
  renderItem: {
    options: ['(item: T, index: number) => ReactNode'],
    isRequired: true,
    description: 'Render function called for each visible list item.',
  },
  scrollAlign: {
    options: Object.values(VIRTUAL_LIST_SCROLL_ALIGN),
    defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN),
    description:
      'Defines how the item targeted by the "scrollToIndex" prop is positioned within the scroll area.',
  },
  scrollToIndex: {
    options: ['number'],
    defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX),
    description: 'Scrolls the list to the item at the given index on render.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  visibleItemsCount: {
    options: ['number'],
    isRequired: true,
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { VIRTUAL_LIST_PROPS_META }
