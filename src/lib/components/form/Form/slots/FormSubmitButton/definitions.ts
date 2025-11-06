import { ButtonProps, FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_SUBMIT_BUTTON_INTENT: FormSubmitButtonProps['intent'] = 'primary'

type PropsFromFlexItem = Omit<FlexItemProps<'div'>, 'children' | 'tag'>

type PropsFromButton = Pick<
  ButtonProps,
  | 'disabled'
  | 'iconName'
  | 'iconPosition'
  | 'intent'
  | 'size'
  | 'children'
  | 'tagAttrs'
  | 'tagRef'
  | 'variant'
>

export type FormSubmitButtonProps = PropsFromFlexItem & PropsFromButton
