import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { DropdownListItemProps } from 'lib/components'
import { DEFAULT_DROPDOWN_LIST_ITEM_ALIGN } from 'lib/components/core/DropdownList/slots/DropdownListItem/definitions'

const DROPDOWN_LIST_ITEM_PROPS_META: ComponentMeta<DropdownListItemProps>['props'] = {
  align: {
    ...BUTTON_PROPS_META.align,
    defaultValue: String(DEFAULT_DROPDOWN_LIST_ITEM_ALIGN),
  },
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...BUTTON_PROPS_META.children,
    isRequired: true,
  },
  disabled: BUTTON_PROPS_META.disabled,
  iconName: BUTTON_PROPS_META.iconName,
  iconPlacement: BUTTON_PROPS_META.iconPlacement,
  selected: BUTTON_PROPS_META.selected,
  tag: BUTTON_PROPS_META.tag,
  tagAttrs: BUTTON_PROPS_META.tagAttrs,
  tagRef: BUTTON_PROPS_META.tagRef,
}

export { DROPDOWN_LIST_ITEM_PROPS_META }
