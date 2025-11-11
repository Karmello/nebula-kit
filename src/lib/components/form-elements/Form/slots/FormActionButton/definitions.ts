import { MouseEventHandler } from 'react'

import { ButtonProps, FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT: FormActionButtonProps['intent'] = 'info'

type FormActionButtonOwnProps = {
  type?: 'submit' | 'reset' | 'clear'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

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

export type FormActionButtonProps = PropsFromFlexItem & PropsFromButton & FormActionButtonOwnProps
