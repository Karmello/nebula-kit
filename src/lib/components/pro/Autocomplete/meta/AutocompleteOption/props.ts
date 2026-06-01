import { ComponentMeta } from 'client/definitions'

import { ACTION_SURFACE_PROPS_META } from '../../../../core/ActionSurface/meta/props'
import { type AutocompleteOptionProps } from '../../slots/AutocompleteOption/definitions'

const AUTOCOMPLETE_OPTION_PROPS_META: ComponentMeta<AutocompleteOptionProps>['props'] = {
  children: ACTION_SURFACE_PROPS_META.children,
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
}

export { AUTOCOMPLETE_OPTION_PROPS_META }
