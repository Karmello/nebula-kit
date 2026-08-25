import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { AutocompleteOptionProps } from '../types'

export const AUTOCOMPLETE_OPTION_META = {
  overview: {
    bundle: 'pro',
    name: 'Autocomplete.Option',
    title: 'Represents a single option within Autocomplete component.',
    composedOf: ['DropdownList.Item'],
    exposedTags: ['button'],
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
} satisfies ComponentMeta<AutocompleteOptionProps>
