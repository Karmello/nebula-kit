import type { MultiSelectOptionProps } from 'lib/components/pro/MultiSelect/slots/MultiSelectOption/types'
import type { DocProp } from 'client/definitions'

export const MULTI_SELECT_OPTION_PROPS: Record<keyof MultiSelectOptionProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}
