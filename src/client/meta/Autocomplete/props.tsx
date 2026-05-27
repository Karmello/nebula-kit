import { ComponentMeta } from 'client/definitions'
import { AutocompleteProps } from 'lib/components'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
} from 'lib/components/pro/Autocomplete'

// import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'
import { BOX_PROPS_META } from '../Box/props'

const AUTOCOMPLETE_PROPS_META: ComponentMeta<AutocompleteProps>['props'] = {
  // children: {
  //   ...DROPDOWN_LIST_PROPS_META.children,
  //   options: ['Autocomplete.Option'],
  //   description: 'Option slots rendered.',
  // },
  // color: {
  //   ...DROPDOWN_LIST_PROPS_META.color,
  //   description: 'Color applied to the component.',
  // },
  // debounceDelay: {
  //   options: ['number'],
  //   description:
  //     'Time in milliseconds to wait after typing before updating the results. The debounce applies only while the list is open and is flushed when it closes.',
  // },
  // defaultValue: {
  //   options: ['string'],
  //   description: 'Initial selected item value when the component is used in uncontrolled mode.',
  // },
  // disabled: BOX_PROPS_META.disabled,
  // disableFiltering: {
  //   options: ['boolean'],
  //   defaultValue: String(DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING),
  //   description: 'Disables internal label-based filtering. Use when options are filtered externally.',
  // },
  // dropdownPlacement: DROPDOWN_LIST_PROPS_META.placement,
  // inlineSize: {
  //   ...BOX_PROPS_META.inlineSize,
  //   defaultValue: String(DEFAULT_AUTOCOMPLETE_INLINE_SIZE),
  // },
  // intent: {
  //   ...DROPDOWN_LIST_PROPS_META.intent,
  //   description: 'Color tone applied to the component.',
  // },
  // noOptionsLabel: DROPDOWN_LIST_PROPS_META.noOptionsLabel,
  // onChange: {
  //   options: ['(value: string) => void'],
  //   description: 'Callback fired when the selected value changes.',
  // },
  // onInputChange: {
  //   options: ['(value: string) => void'],
  //   description: 'Callback fired when the text input value changes.',
  // },
  // placeholder: {
  //   options: ['string'],
  //   description: 'Placeholder text displayed in the input when no value is selected and the input is empty.',
  // },
  // scrollAlign: {
  //   ...DROPDOWN_LIST_PROPS_META.scrollAlign,
  //   description: 'Defines how the selected option is positioned within the scroll area.',
  // },
  // showToggle: {
  //   options: ['boolean'],
  //   defaultValue: String(DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE),
  //   description: 'Controls whether the dropdown toggle is rendered next to the input.',
  // },
  // size: {
  //   options: CONTROL_SIZES,
  //   defaultValue: DEFAULT_CONTROL_SIZE,
  // },
  // tagAttrs: DROPDOWN_LIST_PROPS_META.tagAttrs,
  // tagRef: DROPDOWN_LIST_PROPS_META.tagRef,
  // value: {
  //   options: ['string'],
  //   description: 'Current selected item value when the component is used in controlled mode.',
  // },
  // visibleItemsCount: DROPDOWN_LIST_PROPS_META.visibleItemsCount,
}

export { AUTOCOMPLETE_PROPS_META }
