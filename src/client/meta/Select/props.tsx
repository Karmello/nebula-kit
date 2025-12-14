import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'
import { DEFAULT_SELECT_INLINE_SIZE } from 'lib/components/core/form-elements/Select'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'
import { BOX_PROPS_META } from '../Box/props'

const SELECT_PROPS_META: ComponentMeta<SelectProps>['props'] = {
  children: {
    ...DROPDOWN_LIST_PROPS_META.children,
    options: ['Select.Option'],
    description: 'Option slots rendered.',
  },
  color: DROPDOWN_LIST_PROPS_META.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial selected item value when the component is used in uncontrolled mode.',
  },
  dropdownPlacement: DROPDOWN_LIST_PROPS_META.placement,
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
  },
  intent: DROPDOWN_LIST_PROPS_META.intent,
  itemBorderIntent: DROPDOWN_LIST_PROPS_META.itemBorderIntent,
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the selected value changes.',
  },
  scrollAlign: {
    ...DROPDOWN_LIST_PROPS_META.scrollAlign,
    description: 'Defines how the selected option is positioned within the scroll area.',
  },
  size: DROPDOWN_LIST_PROPS_META.size,
  staticLabel: {
    options: ['string'],
    description:
      'Displays a fixed label instead of the selected value. Useful for navigation-style selects where the trigger text should stay constant.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  variant: DROPDOWN_LIST_PROPS_META.variant,
  visibleItemsCount: DROPDOWN_LIST_PROPS_META.visibleItemsCount,
}

export { SELECT_PROPS_META }
