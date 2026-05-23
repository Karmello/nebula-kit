import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import {
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DROPDOWN_LIST_PLACEMENTS,
  DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS,
  DEFAULT_DROPDOWN_LIST_INTENT,
  DROPDOWN_LIST_SIZES,
  DEFAULT_DROPDOWN_LIST_SIZE,
} from 'lib/components/core/DropdownList'

import { BUTTON_PROPS_META } from '../Button/props'
import { BOX_PROPS_META } from '../Box/props'

const DROPDOWN_LIST_PROPS_META: ComponentMeta<DropdownListProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    options: ['DropdownList.Trigger', 'DropdownList.Item'],
    isRequired: true,
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  color: {
    ...BUTTON_PROPS_META.color,
    description: 'Color applied to the list.',
  },
  disableListAnimation: {
    options: ['boolean'],
    description: 'Disables list open animation.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_INTENT),
    description: 'Color tone applied to the list.',
  },
  keepOpen: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_KEEP_OPEN),
    description: "When true, the list won't be auto-closed on item click.",
  },
  noOptionsLabel: {
    options: ['string'],
    description:
      'When provided, displays a disabled item with the given label if the current search query yields no matching options.',
  },
  onClosed: {
    options: ['() => void'],
    description: 'Callback invoked after the list has closed.',
  },
  onOpened: {
    options: ['() => void'],
    description: 'Callback invoked after the list has fully opened.',
  },
  openOnFocus: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS),
    description:
      'Opens the dropdown when the trigger receives focus. When enabled, the trigger does not toggle the dropdown closed on click.',
  },
  placement: {
    options: DROPDOWN_LIST_PLACEMENTS,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_PLACEMENT),
    description:
      'Defines the preferred position of the dropdown list relative to the trigger element. The position gets auto-adjusted so the list stays visible.',
  },
  scrollAlign: {
    options: DROPDOWN_LIST_SCROLL_ALIGN,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN),
    description: 'Defines how the item targeted by the "scrollToIndex" prop is positioned within the scroll area.',
  },
  scrollToIndex: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX),
    description: 'Scrolls the list to the item at the given index on render.',
  },
  size: {
    options: DROPDOWN_LIST_SIZES,
    defaultValue: DEFAULT_DROPDOWN_LIST_SIZE,
    description: 'Applies the selected size to the list items.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { DROPDOWN_LIST_PROPS_META }
