import type { MultiSelectOptionProps } from 'lib/components/pro/MultiSelect/slots/MultiSelectOption/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const MULTI_SELECT_OPTION_PROPS: Record<keyof MultiSelectOptionProps, Prop> = {
  children: BOX_META.props.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}
