import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'
import { DEFAULT_SELECT_INLINE_SIZE } from 'lib/components/core/Select'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { BOX_INTENTS } from 'lib/components/core/Box/definitions'
import { DROPDOWN_LIST_PLACEMENTS, DROPDOWN_LIST_SCROLL_ALIGN } from 'lib/components/shared'

import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
} from 'lib/components/shared/DropdownList/dropdown-list'

import { BOX_PROPS_META } from '../Box/props'

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
  dropdownPlacement: {
    options: DROPDOWN_LIST_PLACEMENTS,
    defaultValue: DEFAULT_DROPDOWN_LIST_PLACEMENT,
    description:
      'Defines the preferred placement of the dropdown relative to the trigger. The final placement may be adjusted automatically to keep the list visible.',
  },
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
  },
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to the component.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the selected value changes.',
  },
  scrollAlign: {
    options: DROPDOWN_LIST_SCROLL_ALIGN,
    defaultValue: DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
    description: 'Defines how the selected option is positioned within the scroll area.',
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
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { SELECT_PROPS_META }
