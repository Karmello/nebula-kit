import { ComponentMeta } from 'client/definitions'
import { MultiSelectProps } from 'lib/components'
import { DEFAULT_SELECT_INLINE_SIZE } from 'lib/components/core/form-elements/Select'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'
import { BOX_PROPS_META } from '../Box/props'

const MULTI_SELECT_PROPS_META: ComponentMeta<MultiSelectProps>['props'] = {
  children: {
    ...DROPDOWN_LIST_PROPS_META.children,
    options: ['MultiSelect.Option'],
    description: 'Option slots rendered.',
  },
  color: {
    ...DROPDOWN_LIST_PROPS_META.color,
    description: 'Color applied to the component.',
  },
  defaultValue: {
    options: ['string[]'],
    description: 'Initial set of selected values when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  dropdownPlacement: DROPDOWN_LIST_PROPS_META.placement,
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
  },
  intent: {
    ...DROPDOWN_LIST_PROPS_META.intent,
    description: 'Color tone applied to the component.',
  },
  onChange: {
    options: ['(value: string[]) => void'],
    description: 'Callback fired when the set of selected values changes.',
  },
  scrollAlign: {
    ...DROPDOWN_LIST_PROPS_META.scrollAlign,
    description: 'Defines how the selected option is positioned within the scroll area.',
  },
  size: DROPDOWN_LIST_PROPS_META.size,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string[]'],
    description: 'Current set of selected values when the component is used in controlled mode.',
  },
  visibleItemsCount: DROPDOWN_LIST_PROPS_META.visibleItemsCount,
}

export { MULTI_SELECT_PROPS_META }
