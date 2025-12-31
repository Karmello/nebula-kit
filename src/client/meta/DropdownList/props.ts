import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import {
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DROPDOWN_LIST_PLACEMENTS,
} from 'lib/components/core/overlays/DropdownList'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { PORTAL_PROPS_META } from '../Portal/props'
import { BOX_PROPS_META } from '../Box/props'

const DROPDOWN_LIST_PROPS_META: ComponentMeta<DropdownListProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['DropdownList.Trigger', 'DropdownList.Item'],
    isRequired: true,
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  color: {
    ...BUTTON_PROPS_META.color,
    description: 'Color applied to the list.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    description: 'Tone level applied to the list.',
  },
  itemBorderIntent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT),
    description: 'Tone level applied to the dividers between list items.',
  },
  keepOpen: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_KEEP_OPEN),
    description: "When true, the list won't be auto-closed on item click.",
  },
  placement: {
    ...PORTAL_PROPS_META.placement,
    options: DROPDOWN_LIST_PLACEMENTS,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_PLACEMENT),
    description: 'Defines the position of the dropdown list relative to the trigger element.',
  },
  scrollAlign: {
    options: Object.values(DROPDOWN_LIST_SCROLL_ALIGN),
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN),
    description:
      'Defines how the item targeted by the "scrollToIndex" prop is positioned within the scroll area.',
  },
  scrollToIndex: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX),
    description: 'Scrolls the list to the item at the given index on render.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    description: 'Applies the selected size to the list items.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { DROPDOWN_LIST_PROPS_META }
