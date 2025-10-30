import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'

const SELECT_PROPS_META: ComponentMeta<SelectProps>['props'] = {
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  itemBorderIntent: DROPDOWN_LIST_PROPS_META.itemBorderIntent,
  scrollAlign: DROPDOWN_LIST_PROPS_META.scrollAlign,
  inlineSize: BOX_PROPS_META.inlineSize,
  variant: BUTTON_PROPS_META.variant,
  intent: BUTTON_PROPS_META.intent,
  size: BUTTON_PROPS_META.size,
  options: {
    options: ['{ value: string; label: string }[]'],
    isRequired: true,
    description: 'Array of selectable items displayed in the dropdown list.',
  },
  value: {
    options: ['string'],
    description: 'Current selected item value when the component is used in controlled mode.',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial selected item value when the component is used in uncontrolled mode.',
  },
  onChange: {
    options: ['(value: string) => void'],
    isRequired: true,
  },
}

export { SELECT_PROPS_META }
