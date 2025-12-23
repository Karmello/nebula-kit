import { MouseEventHandler } from 'react'

import { ButtonProps, FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT: FormActionButtonProps['intent'] = 'primary'
export const DEFAULT_FORM_ACTION_SUBMIT_BUTTON_COLOR: FormActionButtonProps['color'] = 'blue'

type FormActionButtonOwnProps = {
  type?: 'submit' | 'reset' | 'clear'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type PropsFromFlexItem = Omit<FlexItemProps<'div'>, 'children' | 'tag'>

type PropsFromButton = Pick<
  ButtonProps,
  | 'disabled'
  | 'iconName'
  | 'iconPlacement'
  | 'intent'
  | 'color'
  | 'size'
  | 'children'
  | 'tagAttrs'
  | 'tagRef'
  | 'variant'
>

export type FormActionButtonProps = PropsFromFlexItem & PropsFromButton & FormActionButtonOwnProps
