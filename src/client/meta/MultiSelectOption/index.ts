import type { MultiSelectOptionProps } from 'lib/components/pro/MultiSelect/slots/MultiSelectOption/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const MULTI_SELECT_OPTION_META = {
  overview: {
    bundle: 'pro',
    name: 'MultiSelect.Option',
    title: 'Represents a single option within MultiSelect component.',
    composedOf: ['DropdownList.Item'],
    exposedTags: ['button'],
  },
  props: {
    children: BOX_META.Box.props.children,
    value: {
      options: ['string'],
      isRequired: true,
      description: 'Defines value for the option.',
    },
  },
} satisfies ComponentMeta<MultiSelectOptionProps>
