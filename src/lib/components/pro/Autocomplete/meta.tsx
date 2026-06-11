import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { BOX_META } from 'lib/components/core/Box/meta'
import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DROPDOWN_LIST_PLACEMENTS,
  DROPDOWN_LIST_SCROLL_ALIGN,
} from 'lib/components/shared'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { Autocomplete, AutocompleteOptionProps, AutocompleteProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
} from './definitions'

export const AUTOCOMPLETE_META = {
  Autocomplete: {
    overview: {
      bundle: 'pro',
      title: 'Text input with a searchable, selectable dropdown list.',
      description:
        'Autocomplete combines an input field with a dropdown list to help users quickly find and select options. It reacts to typing in real time and keeps the displayed results synchronized with the current input across open and close interactions.',
      features: [
        'supports controlled and uncontrolled usage patterns',
        'works with large option sets through virtualized rendering',
        'allows debounced result updates while typing',
        'renders its dropdown without animation for maximum responsiveness',
      ],
      composedOf: ['Input', 'Text', 'IconButton'],
      topLevelTags: ['div'],
      slots: ['Autocomplete.Option'],
    },
    props: {
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
      disabled: BOX_META.Box.props.disabled,
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
        ...BOX_META.Box.props.inlineSize,
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
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string'],
        description: 'Current selected item value when the component is used in controlled mode.',
      },
      visibleItemsCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
        description: 'Specifies the number of list items visible before scrolling is enabled.',
      },
    },
    examples: [
      {
        description: 'Autocomplete used in uncontrolled mode.',
        jsx: (
          <Autocomplete noOptionsLabel="Nothing found">
            <Autocomplete.Option value="PL" label="Poland">
              Poland
            </Autocomplete.Option>
            <Autocomplete.Option value="UK" label="United Kingdom">
              United Kingdom
            </Autocomplete.Option>
            <Autocomplete.Option value="DE" label="Germany">
              Germany
            </Autocomplete.Option>
            <Autocomplete.Option value="US" label="United States">
              United States
            </Autocomplete.Option>
            <Autocomplete.Option value="FR" label="France">
              France
            </Autocomplete.Option>
          </Autocomplete>
        ),
      },
    ],
    changelog: {
      '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
      '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
      '0.5.0': ['removed `onClosed` prop'],
      '0.3.0': ['released'],
    },
  } satisfies ComponentMeta<AutocompleteProps>,
  AutocompleteOption: {
    overview: {
      bundle: 'pro',
      name: 'Autocomplete.Option',
      title: 'Represents a single option within Autocomplete component.',
      composedOf: ['DropdownList.Item'],
      topLevelTags: ['button'],
    },
    props: {
      children: BOX_META.Box.props.children,
      label: {
        options: ['string'],
        isRequired: true,
        description:
          'Text label used to display the option and to match against user input when filtering. This value is shown in the input when the option is selected.',
      },
      value: {
        options: ['string'],
        isRequired: true,
        description: 'Defines value for the option.',
      },
    },
  } satisfies ComponentMeta<AutocompleteOptionProps>,
}
