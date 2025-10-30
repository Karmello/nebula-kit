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
  selected: BUTTON_PROPS_META.selected,
  disabled: BUTTON_PROPS_META.disabled,
  iconName: BUTTON_PROPS_META.iconName,
  iconPosition: BUTTON_PROPS_META.iconPosition,
  justifyContent: BUTTON_PROPS_META.justifyContent,
  labelIntent: BUTTON_PROPS_META.labelIntent,
  tag: BUTTON_PROPS_META.tag,
  iconAngle: BUTTON_PROPS_META.iconAngle,
}

export { DROPDOWN_LIST_ITEM_PROPS_META }
