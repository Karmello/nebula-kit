import type { SelectOptionProps } from 'lib/components/core/Select/slots/SelectOption/types'
import type { DocProp } from 'client/definitions'

export const SELECT_OPTION_PROPS: Record<keyof SelectOptionProps, DocProp> = {
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
