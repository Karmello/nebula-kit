import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { DropdownListItemProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'

const DROPDOWN_LIST_ITEM_PROPS_META: ComponentMeta<DropdownListItemProps>['props'] = {
  bold: BUTTON_PROPS_META.bold,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  disabled: BUTTON_PROPS_META.disabled,
  iconName: BUTTON_PROPS_META.iconName,
  iconPosition: BUTTON_PROPS_META.iconPosition,
  justifyContent: BUTTON_PROPS_META.justifyContent,
  tag: BUTTON_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DROPDOWN_LIST_ITEM_PROPS_META }
