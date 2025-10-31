import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import {
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
} from 'lib/components/overlays/DropdownList/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { BUTTON_PROPS_META } from '../Button/props'

const DROPDOWN_LIST_PROPS_META: ComponentMeta<DropdownListProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['DropdownList.Trigger', 'DropdownList.Item'],
    isRequired: true,
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  keepOpen: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_KEEP_OPEN),
    description: "When true, the list won't be auto-closed on item click.",
  },
  scrollToIndex: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX),
    description: 'Scrolls the list to the item at the given index on render.',
  },
  scrollAlign: {
    options: Object.values(DROPDOWN_LIST_SCROLL_ALIGN),
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN),
    description: 'Defines how the target item is positioned within the scroll area.',
  },
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    description: 'Fixed width.',
  },
  itemBorderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT),
    description: 'Semantic color intent applied to the dividers between list items.',
  },
  variant: BUTTON_PROPS_META.variant,
  intent: BUTTON_PROPS_META.intent,
  size: {
    ...BUTTON_PROPS_META.size,
    description: 'Applies the selected size to both the trigger and all dropdown items.',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { DROPDOWN_LIST_PROPS_META }
