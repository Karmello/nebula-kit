import { ComponentMeta } from 'client/definitions'
// import { DROPDOWN_LIST_ITEM_PROPS_META } from 'client/meta/DropdownList/DropdownListItem/props'
import { AutocompleteOptionProps } from 'lib/components'

const AUTOCOMPLETE_OPTION_PROPS_META: ComponentMeta<AutocompleteOptionProps>['props'] = {
  // align: {
  //   ...DROPDOWN_LIST_ITEM_PROPS_META.align,
  //   defaultValue: String(DEFAULT_AUTOCOMPLETE_OPTION_ALIGN),
  // },
  // children: DROPDOWN_LIST_ITEM_PROPS_META.children,
  // disabled: DROPDOWN_LIST_ITEM_PROPS_META.disabled,
  // iconName: DROPDOWN_LIST_ITEM_PROPS_META.iconName,
  // iconPlacement: DROPDOWN_LIST_ITEM_PROPS_META.iconPlacement,
  // label: {
  //   options: ['string'],
  //   isRequired: true,
  //   description:
  //     'Text label used to display the option and to match against user input when filtering. This value is shown in the input when the option is selected.',
  // },
  // selected: DROPDOWN_LIST_ITEM_PROPS_META?.selected,
  // tagAttrs: DROPDOWN_LIST_ITEM_PROPS_META.tagAttrs,
  // tagRef: DROPDOWN_LIST_ITEM_PROPS_META.tagRef,
  // value: {
  //   options: ['string'],
  //   isRequired: true,
  //   description: 'Defines value for the option.',
  // },
}

export { AUTOCOMPLETE_OPTION_PROPS_META }
