import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import type { SelectOptionProps } from '../types'

export const SELECT_OPTION_META = {
  overview: {
    bundle: 'core',
    name: 'Select.Option',
    title: 'Represents a selectable item within a Select dropdown list.',
    description:
      'Select.Option defines an available choice within a Select component. Each option provides a value used for selection and renders the content displayed to the user inside the dropdown list.',
    composedOf: ['Box', 'Text', 'Divider'],
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
} satisfies ComponentMeta<SelectOptionProps>
