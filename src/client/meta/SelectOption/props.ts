import type { SelectOptionProps } from 'lib/components/core/Select/slots/SelectOption/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const SELECT_OPTION_PROPS: Record<keyof SelectOptionProps, Prop> = {
  children: BOX_META.props.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}
