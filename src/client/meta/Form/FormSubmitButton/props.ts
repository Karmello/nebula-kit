import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { FormSubmitButtonProps } from 'lib/components'
import { DEFAULT_FORM_SUBMIT_BUTTON_INTENT } from 'lib/components/form/Form/slots'

const FORM_SUBMIT_BUTTON_PROPS_META: ComponentMeta<FormSubmitButtonProps>['props'] = {
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
  children: BUTTON_PROPS_META.children,
  disabled: BUTTON_PROPS_META.disabled,
  flex: FLEX_ITEM_PROPS_META.flex,
  flexBasis: FLEX_ITEM_PROPS_META.flexBasis,
  flexGrow: FLEX_ITEM_PROPS_META.flexGrow,
  flexShrink: FLEX_ITEM_PROPS_META.flexShrink,
  iconName: BUTTON_PROPS_META.iconName,
  iconPosition: BUTTON_PROPS_META.iconPosition,
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_FORM_SUBMIT_BUTTON_INTENT),
  },
  order: FLEX_ITEM_PROPS_META.order,
  size: BUTTON_PROPS_META.size,
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
  variant: BUTTON_PROPS_META.variant,
}

export { FORM_SUBMIT_BUTTON_PROPS_META }
