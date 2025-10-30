import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'

const SELECT_PROPS_META: ComponentMeta<SelectProps>['props'] = {
  defaultValue: {
    options: ['string'],
    description: 'Initial selected item value when the component is used in uncontrolled mode.',
  },
  inlineSize: DROPDOWN_LIST_PROPS_META.inlineSize,
  intent: DROPDOWN_LIST_PROPS_META.intent,
  itemBorderIntent: DROPDOWN_LIST_PROPS_META.itemBorderIntent,
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the selected value changes.',
  },
  options: {
    options: ['{ value: string; label: string }[]'],
    isRequired: true,
    description: 'Array of selectable items displayed in the dropdown list.',
  },
  scrollAlign: DROPDOWN_LIST_PROPS_META.scrollAlign,
  size: DROPDOWN_LIST_PROPS_META.size,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  variant: DROPDOWN_LIST_PROPS_META.variant,
}

export { SELECT_PROPS_META }
