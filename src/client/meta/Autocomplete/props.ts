import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
  DEFAULT_AUTOCOMPLETE_VISIBLE_ITEMS_COUNT,
} from 'lib/components/pro/Autocomplete/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { AutocompleteProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const AUTOCOMPLETE_PROPS: Record<keyof AutocompleteProps, DocProp> = {
  children: {
    options: ['Autocomplete.Option'],
    isRequired: true,
    description: 'Option slots rendered.',
  },
  color: {
    options: BOX_COLORS,
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
  disableFiltering: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING),
    description:
      'Disables internal label-based filtering. Use when options are filtered externally.',
  },
  disabled: BOX_META.props.disabled,
  inlineSize: {
    ...BOX_META.props.inlineSize,
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
    description:
      'Placeholder text displayed in the input when no value is selected and the input is empty.',
  },
  showToggle: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE),
    description: 'Controls whether the dropdown toggle is rendered next to the input.',
  },
  size: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
  },
  tagRef: BOX_META.props.tagRef,
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_AUTOCOMPLETE_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}
