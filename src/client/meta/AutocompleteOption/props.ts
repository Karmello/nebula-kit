import type { AutocompleteOptionProps } from 'lib/components/pro/Autocomplete/slots/AutocompleteOption/types'
import type { DocProp } from 'client/definitions'

export const AUTOCOMPLETE_OPTION_PROPS: Record<keyof AutocompleteOptionProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
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
