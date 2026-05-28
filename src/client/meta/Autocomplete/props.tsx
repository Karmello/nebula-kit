import { ComponentMeta } from 'client/definitions'
import { AutocompleteProps } from 'lib/components'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { DROPDOWN_LIST_PLACEMENTS, DROPDOWN_LIST_SCROLL_ALIGN } from 'lib/components/shared'
import { BOX_INTENTS } from 'lib/components/core/Box/definitions'

import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
} from 'lib/components/pro/Autocomplete/definitions'

import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
} from 'lib/components/shared/DropdownList/dropdown-list'

import { BOX_PROPS_META } from '../Box/props'

const AUTOCOMPLETE_PROPS_META: ComponentMeta<AutocompleteProps>['props'] = {
  children: {
    options: ['Autocomplete.Option'],
    isRequired: true,
    description: 'Option slots rendered.',
  },
  color: {
    options: COLORS,
    description: 'Color applied to the component.',
  },
  debounceDelay: {
    options: ['number'],
    description:
      'Time in milliseconds to wait after typing before updating the results. The debounce applies only while the list is open and is flushed when it closes.',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial selected item value when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  disableFiltering: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING),
    description: 'Disables internal label-based filtering. Use when options are filtered externally.',
  },
  dropdownPlacement: {
    options: DROPDOWN_LIST_PLACEMENTS,
    defaultValue: DEFAULT_DROPDOWN_LIST_PLACEMENT,
    description:
      'Defines the preferred placement of the dropdown relative to the trigger. The final placement may be adjusted automatically to keep the list visible.',
  },
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: String(DEFAULT_AUTOCOMPLETE_INLINE_SIZE),
  },
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to the component.',
  },
  noOptionsLabel: {
    options: ['string'],
    description:
      'When provided, displays a disabled item with the given label if the current search query yields no matching options.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the selected value changes.',
  },
  onInputChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the text input value changes.',
  },
  placeholder: {
    options: ['string'],
    description: 'Placeholder text displayed in the input when no value is selected and the input is empty.',
  },
  scrollAlign: {
    options: DROPDOWN_LIST_SCROLL_ALIGN,
    defaultValue: DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
    description: 'Defines how the selected option is positioned within the scroll area.',
  },
  showToggle: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE),
    description: 'Controls whether the dropdown toggle is rendered next to the input.',
  },
  size: {
    options: CONTROL_SIZES,
    defaultValue: DEFAULT_CONTROL_SIZE,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { AUTOCOMPLETE_PROPS_META }
