import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { MultiSelectOptionProps } from '../types'

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
