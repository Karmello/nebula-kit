import { ButtonProps, FlexItemProps } from 'lib/components'

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

export type FormResetButtonProps = PropsFromFlexItem & PropsFromButton
