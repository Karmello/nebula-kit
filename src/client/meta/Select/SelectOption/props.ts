import { ComponentMeta } from 'client/definitions'
import { DROPDOWN_LIST_ITEM_PROPS_META } from 'client/meta/DropdownList/DropdownListItem/props'
import { SelectOptionProps } from 'lib/components'
import { DEFAULT_SELECT_JUSTIFY_CONTENT } from 'lib/components/form/Select/slots'

const SELECT_OPTION_PROPS_META: ComponentMeta<SelectOptionProps>['props'] = {
  tagAttrs: DROPDOWN_LIST_ITEM_PROPS_META.tagAttrs,
  tagRef: DROPDOWN_LIST_ITEM_PROPS_META.tagRef,
  children: DROPDOWN_LIST_ITEM_PROPS_META.children,
  disabled: DROPDOWN_LIST_ITEM_PROPS_META.disabled,
  iconName: DROPDOWN_LIST_ITEM_PROPS_META.iconName,
  iconPosition: DROPDOWN_LIST_ITEM_PROPS_META.iconPosition,
  justifyContent: {
    ...DROPDOWN_LIST_ITEM_PROPS_META.justifyContent,
    defaultValue: String(DEFAULT_SELECT_JUSTIFY_CONTENT),
  },
  labelIntent: DROPDOWN_LIST_ITEM_PROPS_META.labelIntent,
  tag: DROPDOWN_LIST_ITEM_PROPS_META.tag,
  iconAngle: DROPDOWN_LIST_ITEM_PROPS_META.iconAngle,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { SELECT_OPTION_PROPS_META }
