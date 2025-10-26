import { ComponentMeta } from 'client/definitions'
import { DropdownListItemProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'

const DROPDOWN_LIST_ITEM_PROPS_META: ComponentMeta<DropdownListItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  disabled: BUTTON_PROPS_META.disabled,
  iconName: BUTTON_PROPS_META.iconName,
  iconPosition: BUTTON_PROPS_META.iconPosition,
  labelAlign: BUTTON_PROPS_META.labelAlign,
  labelIntent: BUTTON_PROPS_META.labelIntent,
  tag: BUTTON_PROPS_META.tag,
}

export { DROPDOWN_LIST_ITEM_PROPS_META }
