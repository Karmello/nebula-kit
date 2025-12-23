import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { FormActionButtonProps } from 'lib/components'
import { DEFAULT_BUTTON_INTENT } from 'lib/components/core/controls/Button'
import { DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT } from 'lib/components/pro/form-elements/Form'

const FORM_ACTION_BUTTON_PROPS_META: ComponentMeta<FormActionButtonProps>['props'] = {
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
  children: BUTTON_PROPS_META.children,
  color: BUTTON_PROPS_META.color,
  disabled: BUTTON_PROPS_META.disabled,
  flex: FLEX_ITEM_PROPS_META.flex,
  flexBasis: FLEX_ITEM_PROPS_META.flexBasis,
  flexGrow: FLEX_ITEM_PROPS_META.flexGrow,
  flexShrink: FLEX_ITEM_PROPS_META.flexShrink,
  iconName: BUTTON_PROPS_META.iconName,
  iconPlacement: BUTTON_PROPS_META.iconPlacement,
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: `${DEFAULT_BUTTON_INTENT}, ${DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT} for submit`,
  },
  onClick: {
    options: ['e => { ... }'],
    description: 'Callback fired when the button is clicked.',
  },
  order: FLEX_ITEM_PROPS_META.order,
  size: BUTTON_PROPS_META.size,
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
  type: {
    options: ['submit', 'reset', 'clear'],
    description: "Defines the button's action behavior. Do omit for custom buttons.",
  },
  variant: BUTTON_PROPS_META.variant,
}

export { FORM_ACTION_BUTTON_PROPS_META }
