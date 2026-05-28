import { ComponentMeta } from 'client/definitions'
import { MultiSelectProps } from 'lib/components'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { DROPDOWN_LIST_PLACEMENTS, DROPDOWN_LIST_SCROLL_ALIGN } from 'lib/components/shared'
import { BOX_INTENTS } from 'lib/components/core/Box'
import { DEFAULT_MULTI_SELECT_INLINE_SIZE } from 'lib/components/pro/MultiSelect'

import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
} from 'lib/components/shared/DropdownList/dropdown-list'

import { BOX_PROPS_META } from '../Box/props'

const MULTI_SELECT_PROPS_META: ComponentMeta<MultiSelectProps>['props'] = {
  children: {
    options: ['MultiSelect.Option'],
    isRequired: true,
    description: 'Option slots rendered.',
  },
  color: {
    options: COLORS,
    description: 'Color applied to the component.',
  },
  defaultValue: {
    options: ['string[]'],
    description: 'Initial set of selected values when the component is used in uncontrolled mode.',
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
    defaultValue: String(DEFAULT_MULTI_SELECT_INLINE_SIZE),
  },
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to the component.',
  },
  onChange: {
    options: ['(value: string[]) => void'],
    description: 'Callback fired when the set of selected values changes.',
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
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  value: {
    options: ['string[]'],
    description: 'Current set of selected values when the component is used in controlled mode.',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}

export { MULTI_SELECT_PROPS_META }
