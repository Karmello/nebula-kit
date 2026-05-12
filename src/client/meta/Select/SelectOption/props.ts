import { ComponentMeta } from 'client/definitions'
import { DROPDOWN_LIST_ITEM_PROPS_META } from 'client/meta/DropdownList/DropdownListItem/props'
import { SelectOptionProps } from 'lib/components'
import { DEFAULT_SELECT_OPTION_JUSTIFY_CONTENT } from 'lib/components/core/form-elements/Select'

const SELECT_OPTION_PROPS_META: ComponentMeta<SelectOptionProps>['props'] = {
  children: DROPDOWN_LIST_ITEM_PROPS_META.children,
  disabled: DROPDOWN_LIST_ITEM_PROPS_META.disabled,
  iconName: DROPDOWN_LIST_ITEM_PROPS_META.iconName,
  iconPlacement: DROPDOWN_LIST_ITEM_PROPS_META.iconPlacement,
  justifyContent: {
    ...DROPDOWN_LIST_ITEM_PROPS_META.justifyContent,
    defaultValue: String(DEFAULT_SELECT_OPTION_JUSTIFY_CONTENT),
  },
  selected: DROPDOWN_LIST_ITEM_PROPS_META?.selected,
  tagAttrs: DROPDOWN_LIST_ITEM_PROPS_META.tagAttrs,
  tagRef: DROPDOWN_LIST_ITEM_PROPS_META.tagRef,
  textAlign: DROPDOWN_LIST_ITEM_PROPS_META.textAlign,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { SELECT_OPTION_PROPS_META }
