import { ComponentMeta } from 'client/definitions'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import { DEFAULT_SELECT_INLINE_SIZE, DEFAULT_SELECT_INTENT, DEFAULT_SELECT_VARIANT, SELECT_VARIANTS } from '../constants'

import { type SelectProps } from '../types'
import { BOX_INTENTS } from '../../Box/definitions'
import { BOX_PROPS_META } from '../../Box/meta/props'
import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT } from '../../../shared/DropdownList/dropdown-list'

const SELECT_PROPS_META: ComponentMeta<SelectProps>['props'] = {
  children: {
    options: ['Select.Option'],
    isRequired: true,
    description: 'Option slots rendered.',
  },
  color: {
    options: COLORS,
    description: 'Color applied to the component.',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial selected item value when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  inlineSize: {
    options: BOX_PROPS_META.inlineSize.options,
    defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
    isResponsive: true,
    description: BOX_PROPS_META.inlineSize.description,
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: DEFAULT_SELECT_INTENT,
    description: BOX_PROPS_META.intent.description,
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the selected value changes.',
  },
  size: {
    options: CONTROL_SIZES,
    defaultValue: DEFAULT_CONTROL_SIZE,
    description:
      'Controls overall proportions - adjusting trigger and list item sizing to keep the dropdown visually balanced at each size.',
  },
  staticLabel: {
    options: ['string'],
    description:
      'Displays a fixed label instead of the selected value. Useful for navigation-style selects where the trigger text should stay constant.',
  },
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  variant: {
    options: SELECT_VARIANTS,
    defaultValue: DEFAULT_SELECT_VARIANT,
    description: BOX_PROPS_META.variant.description,
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { SELECT_PROPS_META }
