import { MouseEventHandler } from 'react'

import { ButtonProps, FlexItemProps } from 'lib/index.core'

export const DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT: FormActionButtonProps['intent'] = 'primary'
export const DEFAULT_FORM_ACTION_SUBMIT_BUTTON_COLOR: FormActionButtonProps['color'] = 'blue'

type FormActionButtonOwnProps = {
  type?: 'submit' | 'reset' | 'clear'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type PropsFromFlexItem = Omit<FlexItemProps<'div'>, 'children' | 'tag' | 'hidden'>

type PropsFromButton = Pick<
  ButtonProps,
  'disabled' | 'iconName' | 'iconPlacement' | 'intent' | 'color' | 'scale' | 'children' | 'tagAttrs' | 'tagRef' | 'variant'
>

export type FormActionButtonProps = PropsFromFlexItem & PropsFromButton & FormActionButtonOwnProps
